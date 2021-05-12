const { getSingleTeacher } = require("./teacher")
const { getSingleStudent } = require("./student")
const Student = require("../models/Student")
exports.getProfile = async (req, res)=>{
    req.params.id = req.token.id
    if(req.token.role === 'student'){
        getSingleStudent(req, res)
    }else{
        getSingleTeacher(req, res)
    }
}

exports.updateAvatar = async (req, res)=>{
    let student = await Student.findById(req.params.id)
    student.avatar = req.image
    student.save()
    res.json({
        code: 0,
        message:'Tải hình ảnh thành công'
    })
}

exports.getAvatar = async (req, res)=>{
    let student = await Student.findById(req.params.id)
    res.sendFile(path.join(__dirname, '../uploads/'+ student.avatar))
}