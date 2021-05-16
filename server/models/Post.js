const mongoose = require('mongoose')

const opt = { timestamps: { currentTime: Date.now} }

const schema = new mongoose.Schema({
    content: { type:String },
    author: { type: mongoose.Types.ObjectId, required: true },
    authorRole: {type:String, enum:['student', 'teacher', 'admin']},
    comments: {
        type: [mongoose.Types.ObjectId],
        ref: 'Comment'
    },
    image: String,
    video: String
}, opt) 

module.exports = mongoose.model('Post', schema)

