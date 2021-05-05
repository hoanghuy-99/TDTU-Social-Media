const User = require('../models/User')
const Student = require('../models/Student')
const Post = require('../models/Post')

exports.createPost = async (req, res)=>{

    let post = await Post.create({
        ...req.body,
        author: req.token.user_id,
        authorRole: req.token.role
    })
    let user
    if(req.token.role === 'student'){
        user = await Student.findById(req.token.user_id)
        user.posts.push(post._id)
        await user.save()
    }else{
        user = await User.findById(req.token.user_id)
        user.posts.push(post._id)
        await user.save()
    }

    res.json({
        code: 0,
        data:{
            id: post._id,
            author:{
                id:user.id,
                role:post.authorRole,
                name: user.name
            },
            content: post.content,
            video: post.video,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt
        }
    })
}