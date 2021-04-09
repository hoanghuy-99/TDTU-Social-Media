const mongoose = require('mongoose')

const localSchema = new mongoose.Schema({
    username: { type:String, required: true },
    password: { type:String, required: true },
    categories: { type:[mongoose.Types.ObjectId], ref: 'Category' }
})

const schema = new mongoose.Schema({
    id: { type:String, unique:true },
    name: String,
    email: { 
        type:String, 
        required: function () {
            return this.role === 'student'
        }
    },
    avatar: String,
    role: { type:String, enum:['student', 'admin', 'department'] },
    post: { type:[mongoose.Types.ObjectId], ref: 'Post' },
    local:{
        type: localSchema,
        required: function () {
            return this.role === 'admin' || this.role === 'department'
        }
    }

}) 
module.exports = mongoose.model('User', schema)

