const {body} = require('express-validator')
module.exports.StudentEditValidator = [
    body('name').notEmpty().withMessage({code:10, message:'Name is empty'}),
    body('class').notEmpty().withMessage({code:20, message:'Class is empty'}),
    body('faculty').notEmpty().withMessage({code:30, message:'Faculty is empty'}),
]