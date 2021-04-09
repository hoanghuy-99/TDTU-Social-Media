const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    id: { type:String, require: true, unique: true },
    name: { type:String, required: true},
})

module.exports = mongoose.model('Category', schema)

