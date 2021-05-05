const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    avatar: String,
    username: { type:String, required: true },
    password: { type:String, required: true },
    departments: { type:[mongoose.Types.ObjectId], ref: 'Department' },
    role: { type:String, enum:['admin', 'teacher'] },
    post: { type:[mongoose.Types.ObjectId], ref: 'Post' },
}) 
module.exports = mongoose.model('User', schema)

