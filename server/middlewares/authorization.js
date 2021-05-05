require('dotenv').config()
const jwtUtil = require('../utils/jwt')

const privateKey = process.env.PRIVATE_KEY

module.exports.requireToken = (req, res, next) => {
    const token = req.headers.authorization
    if(!token){
        return res.status(403).json({
            code: 100,
            message: 'No credentials sent!'
        })
    }
    let isValid = true
    let payload = undefined
    
    try{
        payload = jwtUtil.verify(token, privateKey)
        if(!payload){
            isValid = false
        }
    }catch(e){
        console.log(e)
        isValid = false
    }

    if(isValid){
        req['token'] = {
            user_id: payload.user_id,
            role: payload.role
        }
        next()
    }else{
        res.json({
            code: 101,
            message: 'Token is invalid'
        })
    }
}
