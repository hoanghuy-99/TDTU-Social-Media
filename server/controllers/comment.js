const Comment = require('../models/Comment')

exports.editComment = async (req, res)=>{
    const comment = await Comment.findByIdAndUpdate(req.params.id, {content:req.body.content})

    res.json({
        code: 0,
        data:{
            id: comment._id,
            content: comment.content,
            author:{
                id: comment.author,
                role: comment.authorRole,
                name: comment.authorRole === 'student' ? (await Student.findById(post.author)).name : (await User.findById(post.author)).name
            }
        }
    })
}

exports.deleteComment = async (req, res)=>{
    await Comment.findByIdAndDelete(req.params.id)
    res.json({
        code: 0,
        message: 'Xóa thành công'
    })
}