require('dotenv').config()
const User = require('../models/User')
const Student = require('../models/Student')
const jwtUtil = require('../utils/jwt')
const hasher = require('../utils/hasher') 

const privateKey = process.env.PRIVATE_KEY
const tokenExpIn = Number(process.env.TOKEN_EXP_IN) 

exports.createToken = async (req, res)=>{
    let {username, password} = req.body
    const user = await User.findOne({username:username})
    if(!user){
        return res.json({
            code: 1,
            massage: 'Username không tồn tại'
        })
    }
    const hashed_password = user.password
    let is_equal
    try{
        is_equal = await hasher.compare(password, hashed_password)
    }catch(e){
        console.log(e)
        throw new Error('Can not compare')
    }

    const payload ={
        user_id : user._id,
        role: user.role
    }

    if(!is_equal){
        return res.json({
            code: 1,
            massage: 'Password không chính xác '
        })
    }
    
    const token = jwtUtil.create(payload, privateKey, tokenExpIn)

    res.json({
        code:0,
        data: {
            token: token
        }
    })
}

const CLIENT_ID = process.env.CLIENT_ID
const {OAuth2Client} = require('google-auth-library');
const fetch = require('node-fetch')
const fs = require('fs/promises')
const path  = require('path')
const { v4: uuidv4 } = require('uuid')
const client = new OAuth2Client(CLIENT_ID);
exports.createTokenByGoogle = async (req, res)=>{
    let idToken = req.body.idToken 
    const ticket = await client.verifyIdToken({
        idToken: idToken,
        audience: CLIENT_ID,
    });

    const payload = ticket.getPayload()

    if(!payload){
        return res.json({
            code: 1,
            message: 'Id token invalid'
        })
    }

    let hostDomain = payload.hd

    if(!hostDomain || hostDomain !== 'student.tdtu.edu.vn'){
        return res.json({
            code: 1,
            message: 'Bạn không được phép đăng nhập vào hệ thống'
        })
    }

    let user = await Student.findOne({email:payload.email})
    if(!user){
        let avatar = uuidv4()+'.jpg'
        let response = await fetch(payload.picture)
        let buffer = await response.buffer()
        await fs.writeFile(path.join(__dirname, '../uploads', avatar ), buffer)
        user = await Student.create({
            name: payload.name,
            email: payload.email,
            avatar: avatar
        })
    }

    const token = jwtUtil.create({ user_id:user._id, role:'student' }, privateKey, tokenExpIn)

    res.json({
        code: 0,
        data:{
            token: token
        }
    })
}
