const {body} = require('express-validator')
const Department = require('../models/Department')
const User = require('../models/User')
const isDepartmentsValid =  (input)=>{
        return Department.find().then(list =>{
            const dIds = list.map(d => d.id)
            const ids = input.map(d => d.id)
            for(let i = 0; i < ids.length; i++){
                if(!dIds.includes(ids[i])){
                    return Promise.reject({code: 42, message:'Has one or many invalid department ids'})
                }
            }
            
    })
}

const isUsernameValid =  (input)=>{
    return User.findOne({username:input}).then(user =>{
        if(user){
           return Promise.reject({code: 21, message: 'Username exists'})
        }
    })
}

module.exports.TeacherCreateValidator = [
    body('name').exists().notEmpty().withMessage({code: 10, message: 'Name is empty'}),

    body('username').exists().notEmpty().withMessage({code: 20, message: 'Username is empty'})
    .custom(isUsernameValid),

    body('password').exists().notEmpty().withMessage({code: 30, message: 'Password is empty'}),

    body('departments').exists().notEmpty().withMessage({code: 40, message: 'Departments is empty'})
    .isArray({min:1}).withMessage({code: 41, message:'Departments must be array'})
    .custom(isDepartmentsValid),

    body('email').notEmpty().isEmail().withMessage({code: 50, message: 'Email is invalid'})
]