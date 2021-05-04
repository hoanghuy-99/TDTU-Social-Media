const mongoose = require('mongoose')

const opt = { timestamps: true }

const schema = new mongoose.Schema({
    content: { type:String, required: true},
    author: { type: mongoose.Types.ObjectId, ref: 'User' }
}, opt)

module.exports = mongoose.model('Comment', schema)

