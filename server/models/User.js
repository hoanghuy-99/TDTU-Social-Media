const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    avatar: String,
    username: { type:String, required: true },
    password: { type:String, required: true },
    email: String,
    departments: { type:[mongoose.Types.ObjectId], ref: 'Department', default:[] },
    role: { type:String, enum:['admin', 'teacher'] },
    posts: { type:[mongoose.Types.ObjectId], ref: 'Post' },
    notifications: { type:[mongoose.Types.ObjectId], ref: 'Notification' },
}) 
module.exports = mongoose.model('User', schema)

