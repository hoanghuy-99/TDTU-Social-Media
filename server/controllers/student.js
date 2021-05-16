const Student = require("../models/Student")
const User = require('../models/User')

async function getName(id,role){
    return role === 'student' ? (await Student.findById(id)).name : (await User.findById(id)).name
}


exports.getSingleStudent = async (req, res)=>{
    let student = await Student.findById(req.params.id)
    res.json({
        code:0,
        data:{
            id: student._id,
            email: student.email,
            name: student.name,
            class: student.class,
            faculty: student.faculty
        }
    })
}

exports.getPosts = async (req, res)=>{
    const {page, limit, olderThan} = req.query
    limit = parseInt(limit)
    page = parseInt(page)
    olderThan = parseInt(olderThan)
    let postsQuery = Post.find({author:req.params.id}).populate('comments')
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
          })))
        }
      })
}

exports.getAvatar = async (req, res)=>{
    let student = await Student.findById(req.params.id)
    if(!student.image){
        res.send('No image')
    }
    res.sendFile(path.join(__dirname, '../uploads/'+ student.image))
}