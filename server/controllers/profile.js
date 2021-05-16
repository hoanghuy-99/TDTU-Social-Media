const { getSingleTeacher } = require("./teacher")
const { getSingleStudent } = require("./student")
const Student = require("../models/Student")
const User = require("../models/User")
exports.getProfile = async (req, res)=>{
    const userId = req.token.user_id
    if(req.token.role === 'student'){
        let student = await Student.findById(userId)
        res.json({
            code:0,
            data:{
                id: student._id,
                email: student.email,
                name: student.name,
                class: student.class,
                faculty: student.faculty,
                role: req.token.role
            }
        })
    }else{
        let teacher = await User.findById(userId).populate('departments')
        res.json({
            code: 0,
            data :{
                id: teacher._id,
                email: teacher.email,
                username: teacher.username,
                name: teacher.name,
                role: req.token.role,
                departments: teacher.departments?.map(d =>({
                    id: d.id,
                    name: d.name
                })) || []
            }
        })
    }
}

exports.editProfile = async (req, res)=>{
    await Student.findByIdAndUpdate(req.token.user_id, req.body)
    req.params.id = req.token.user_id
    getSingleStudent(req, res)
}

const fs = require('fs/promises')
const path = require('path')
exports.updateAvatar = async (req, res)=>{
    let student = await Student.findById(req.token.user_id)
    oldAvatar = student.avatar 
    student.avatar = req.image
    await Promise.all([student.save(), fs.unlink(path.join(__dirname, '../uploads/', oldAvatar))])
    res.json({
        code: 0,
        message:'Tải hình ảnh thành công'
    })
}

exports.getAvatar = async (req, res)=>{
    let student = await Student.findById(req.token.user_id)
    if(student.avatar){
        return res.send('No image')
    }
    res.sendFile(path.join(__dirname, '../uploads/'+ student.avatar))
}