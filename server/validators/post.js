const {body} = require('express-validator')
module.exports.PostCreateValidator =[
    body('content').notEmpty().withMessage({code:10, message:'Content is empty'}),
    body('video').notEmpty().withMessage({code:20, message:'Video is empty'}),
]

module.exports.PostEditValidator =[
    body('content').notEmpty().withMessage({code:10, message:'Content is empty'}),
    body('video').notEmpty().withMessage({code:20, message:'Video is empty'}),
]


