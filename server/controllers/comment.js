const Comment = require('../models/Comment')
const Post = require('../models/Post')
const User = require('../models/User')
const Student = require('../models/Student')
exports.editComment = async (req, res)=>{
    await Comment.findByIdAndUpdate(req.params.id, {content:req.body.content})
    const comment = await Comment.findById(req.params.id)
    res.json({
        code: 0,
        data:{
            id: comment._id,
            content: comment.content,
            author:{
                id: comment.author,
                role: comment.authorRole,
                name: comment.authorRole === 'student' ? (await Student.findById(comment.author)).name : (await User.findById(comment.author)).name
            },
            createdAt: comment.createdAt,
            updatedAt: comment.updatedAt,
        }
    })
}

exports.deleteComment = async (req, res)=>{
    await Comment.findByIdAndDelete(req.params.id)
    await Post.updateOne({comments: req.params.id}, {$pull: {comments: req.params.id}})
    res.json({
        code: 0,
        message: 'Xóa thành công'
    })
}