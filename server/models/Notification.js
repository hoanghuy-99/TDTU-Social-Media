const mongoose = require('mongoose')

const opt = { timestamps: { currentTime: Date.now} }

const schema = new mongoose.Schema({
    title: { type:String, required: true},
    content: { type:String, required: true},
    author: { type: mongoose.Types.ObjectId, ref: 'User' },
    department: {
        type: mongoose.Types.ObjectId,
        ref: 'Department',
        required: true
    }
}, opt) 
module.exports = mongoose.model('Notification', schema)

