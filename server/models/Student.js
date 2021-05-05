const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    class: String,
    faculty: String,
    email: {type:String, required: true, unique:true},
    avatar: String,
    post: { type:[mongoose.Types.ObjectId], ref: 'Post' }

}) 
module.exports = mongoose.model('Student', schema)

