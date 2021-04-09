const mongoose = require('mongoose')

const opt = { timestamps: true }

const schema = new mongoose.Schema({
    content: { type:String, required: true},
    author: { type: mongoose.Types.ObjectId, ref: 'User' },
    type: { type: String, enum:['status', 'notification'] },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
        required: function () {
            return this.type === 'notification'
        }
    },
    comments: {
        type: [mongoose.Types.ObjectId],
        ref: 'Comment'
    },
    image: String,
    video: String
}, opt) 
module.exports = mongoose.model('Post', schema)

