const Department = require("../models/Department");
const User = require("../models/User");
const {body} = require('express-validator')

const isDepartmentValid = (id)=>{
    return Department.findOne({id}).then(d =>{
        if(!d){
            console.log(d)
           return Promise.reject({code:31, message:'departmentId is invalid'})
        }
    })
}

module.exports.NotificationCreateValidator =[
    body('title').exists().notEmpty().withMessage({code:10, message:'Title is empty'}),

    body('content').exists().notEmpty().withMessage({code:20, message:'Content is empty'}),

    body('departmentId').exists().notEmpty().withMessage({code:30, message:'departmentId is empty'})
        .custom(isDepartmentValid)
]

module.exports.NotificationEditValidator =[
    body('title').notEmpty().withMessage({code:10, message:'Title is empty'}),

    body('content').notEmpty().withMessage({code:20, message:'Content is empty'}),

    body('departmentId').notEmpty().withMessage({code:30, message:'departmentId is empty'})
        .custom(isDepartmentValid)
]