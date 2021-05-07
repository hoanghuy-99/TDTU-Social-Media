const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    avatar: String,
    username: { type:String, required: true },
    password: { type:String, required: true },
    departments: { type:[String], ref: 'Department', default:[] },
    role: { type:String, enum:['admin', 'teacher'] },
    posts: { type:[mongoose.Types.ObjectId], ref: 'Post' },
    notification: { type:[String], ref: 'Department' },
}) 
module.exports = mongoose.model('User', schema)

