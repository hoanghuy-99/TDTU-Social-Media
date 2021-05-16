
const {body} = require('express-validator')

module.exports.CommentCreateValidator =[
    body('content').exists().notEmpty().withMessage({code:10, message:'Content is empty'}),
]

module.exports.CommentEditValidator =[
    body('content').exists().notEmpty().withMessage({code:10, message:'Content is empty'}),
]
