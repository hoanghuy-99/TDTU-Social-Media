const User = require('../models/User')
const Student = require('../models/Student')
const Post = require('../models/Post')
const Comment = require('../models/Comment')
const fs = require('fs/promises')
const path = require('path')

async function getName(id,role){
    return role === 'student' ? (await Student.findById(id))?.name : (await User.findById(id))?.name
}

exports.createPost = async (req, res)=>{

    let post = await Post.create({
        ...req.body,
        author: req.token.user_id,
        authorRole: req.token.role
    })
    let user
    if(req.token.role === 'student'){
        user = await Student.findById(req.token.user_id)
    }else{
        user = await User.findById(req.token.user_id)
    }
    
    user.posts.push(post._id)
    await user.save()

    res.json({
        code: 0,
        data:{
            id: post._id,
            author:{
                id:user.id,
                role:post.authorRole,
                name: user.name
            },
            comments: [],
            content: post.content,
            video: post.video,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt
        }
    })
}

exports.getManyPost = async (req, res)=>{
    let {page, limit, olderThan} = req.query
   
    let postsQuery = Post.find()
    if(olderThan){
        olderThan = parseInt(olderThan)
        postsQuery = postsQuery.where('createdAt').lte(olderThan)
    }
    if(page && limit){
        limit = parseInt(limit)
        page = parseInt(page)
        postsQuery = postsQuery.skip(page*limit).limit(limit)
    }
    const posts = await postsQuery.populate('comments')
    
    res.json({
        code:0,
        data:{
          totalPages: page || 1,
          totalItems: posts.length, 
          page: page || 1,
          limit: 2,
          items: await Promise.all(posts.map(async (post) =>({
            id: post._id,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
            author:{
                id: post.author,
                role: post.authorRole,
                name: await getName(post.author, post.authorRole)
            },
            comments: await Promise.all(post.comments.map(async comment =>{ 
                let name = await getName(comment.author, comment.authorRole)
                return {
                id: comment._id,
                content: comment.content,
                author:{
                    id: comment.author,
                    role: comment.authorRole,
                    name: name
                },
                createdAt: comment.createdAt,
                updatedAt: comment.updatedAt,
            }})),
            content: post.content,
            video: post.video
          })))
        }
      })
}

exports.getSinglePost = async (req, res)=>{
    let post = await Post.findById(req.params.id).populate('comments')
    res.json({
        code: 0,
        data:{
            id: post._id,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
            author:{
                id: post.author,
                role: post.authorRole,
                name: await getName(post.author, post.authorRole)
            },
            comments:Promise.all(post.comments.map(async comment =>{
                let name = await getName(comment.author, comment.authorRole)
                return {
                id: comment._id,
                content: comment.content,
                author:{
                    id: comment.author,
                    role: comment.authorRole,
                    name: name
                },
                createdAt: comment.createdAt,
                updatedAt: comment.updatedAt,
            }})),
            content: post.content,
            video: post.video
        }
    })
}

exports.editPost = async (req, res)=>{
    await Post.findByIdAndUpdate(req.params.id, req.body)
    let post = await Post.findById(req.params.id).populate('comments')
    res.json({
        code: 0,
        data:{
            id: post._id,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
            author:{
                id: post.author,
                role: post.authorRole,
                name: await getName(post.author, post.authorRole)
            },
            comments: await Promise.all(post.comments.map(async comment =>{
                let name = await getName(comment.author, comment.authorRole)
                return {
                id: comment._id,
                content: comment.content,
                author:{
                    id: comment.author,
                    role: comment.authorRole,
                    name: name
                },
                createdAt: comment.createdAt,
                updatedAt: comment.updatedAt,

            }})),
            content: post.content,
            video: post.video
        }
    })
}

async function deleteImage(image){
    if(image){
        await fs.unlink(path.join(__dirname, '../uploads/', image))
    }
}

exports.deletePost = async (req, res)=>{
    const post = await Post.findByIdAndDelete(req.params.id)
    await deleteImage(post.image)
    let user
    if(post.authorRole === 'student'){
        user = await Student.findById(post.author)
    }else{
        user = await User.findById(post.author)
    }
    user.posts = user.posts.filter(postId => postId != post._id)
    await user.save()
    res.json({
        code: 0,
        message: 'X??a th??nh c??ng'
    })
}

exports.commentPost = async (req, res)=>{
    let post = await Post.findById(req.params.id)
    let comment = await Comment.create({
        content: req.body.content,
        author: req.token.user_id,
        authorRole: req.token.role
    })
    post.comments.push(comment._id)
    await post.save()
    res.json({
        code: 0,
        data:{
            id: comment._id,
            content: comment.content,
            author:{
                id: comment.author,
                role: comment.authorRole,
                name: await getName(comment.author, comment.authorRole)
            },
            createdAt: comment.createdAt,
            updatedAt: comment.updatedAt,
        },
    })
}

exports.getImage = async (req, res)=>{
    let post = await Post.findById(req.params.id)
    if(!post.image){
        return res.send('No image')
    }
    res.sendFile(path.join(__dirname, '../uploads/'+ post.image))
}


exports.uploadImage = async (req, res)=>{
    let post = await Post.findById(req.params.id)
    oldImage = post.image
    post.image = req.image
    await deleteImage(oldImage)
    await post.save()
    res.json({
        code: 0,
        message:'T???i h??nh ???nh th??nh c??ng'
    })
}

exports.deleteImage = async (req, res)=>{
    let post = await Post.findById(req.params.id)
    await deleteImage(post.image)
    post.image = null,
    await post.save()
    res.json({
        code: 0,
        message:'X??a h??nh ???nh th??nh c??ng'
    })
}