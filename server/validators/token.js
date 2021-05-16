const {body} = require('express-validator')

module.exports.DefaultLoginValidator = [
    body('username').exists().withMessage({code: 10, message:'Username không được trống'}),
    body('password').exists().withMessage({code: 20, message:'Password không được trống'})
]

module.exports.GoogleLoginValidator =[
    body('idToken').exists().withMessage({code: 10, message:'idToken không được trống'})
]