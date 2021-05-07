const User = require('../models/User')
const Student = require('../models/Student')
const Post = require('../models/Post')
const Comment = require('../models/Comment')

async function getName(id,role){
    return role === 'student' ? (await Student.findById(id)).name : (await User.findById(id)).name
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
    const {page, limit, olderThan} = req.query
    limit = parseInt(limit)
    page = parseInt(page)
    olderThan = parseInt(olderThan)
    let postsQuery = Post.find().populate('comments')
    if(olderThan){
        postsQuery = postsQuery.where('createdAt').lte(olderThan)
    }
    if(page && limit){
        postsQuery = postsQuery.skip(page*limit).limit(limit)
    }
    const [posts, count] = await Promise.all(postsQuery.exec(), Post.find().countDocuments())
    
    res.json({
        code:0,
        data:{
          totalPages: page || 1,
          totalItems: count, 
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
                }
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
                }
            }})),
            content: post.content,
            video: post.video
        }
    })
}

exports.editPost = async (req, res)=>{
    
    let post = await Post.findByIdAndUpdate(req.params.id, req.body).populate('comments')
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
            comments: Promise.all(post.comments.map(async comment =>{
                let name = await getName(comment.author, comment.authorRole)
                return {
                id: comment._id,
                content: comment.content,
                author:{
                    id: comment.author,
                    role: comment.authorRole,
                    name: name
                }
            }})),
            content: post.content,
            video: post.video
        }
    })
}

exports.deletePost = async (req, res)=>{
    const post = await Post.findByIdAndDelete(req.params.id)
    let user
    if(post.authorRole === 'student'){
        user = await Student.findById(post.author)
    }else{
        user = await User.findById(post.author)
    }
    user.posts = user.posts.filter(postId => postId !== post._id)
    await user.save()
    res.json({
        code: 0,
        message: 'Xóa thành công'
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
        data:Promise.all(post.comments.map(async comment =>{
            let name = await getName(comment.author, comment.authorRole)
            return {
            id: comment._id,
            content: comment.content,
            author:{
                id: comment.author,
                role: comment.authorRole,
                name: name
            }
        }})),
    })
}

exports.getImage = async (req, res)=>{
    let post = await Post.findById(req.params.id)
    res.sendFile(path.join(__dirname, '../uploads/'+ post.image))
}

exports.uploadImage = async (req, res)=>{
    let post = await Post.findById(req.params.id)
    post.image = req.image
    post.save()
    res.json({
        code: 0,
        message:'Tải hình ảnh thành công'
    })
}