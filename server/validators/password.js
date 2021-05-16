const {body} = require('express-validator')
module.exports.PasswordChangeValidator =[
    body('oldPassword').exists().notEmpty().withMessage({code:10, message:'Old password is empty'}),
    body('newPassword').exists().notEmpty().withMessage({code:20, message:'New password is empty'}),
]