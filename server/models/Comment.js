const mongoose = require('mongoose')

const opt = { timestamps: true }

const schema = new mongoose.Schema({
    content: { type:String, required: true},
    author: mongoose.Types.ObjectId,
    authorRole: { type:String, enum:['admin', 'teacher'] },
}, opt)

module.exports = mongoose.model('Comment', schema)

