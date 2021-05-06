require('dotenv').config()
const jwtUtil = require('../utils/jwt')

const privateKey = process.env.PRIVATE_KEY

exports.requireToken = (accessibleRoles = []) => (req, res, next) => {
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

    if(!isValid){
        return res.json({
            code: 101,
            message: 'Token is invalid'
        })
    }

    if(accessibleRoles.length != 0 && accessibleRoles.includes(payload.role)){
        return res.json({
            code: 102,
            message: 'No permission'
        })
    }

    req['token'] = {
        user_id: payload.user_id,
        role: payload.role
    }
    next()
}

exports.requireYour = (Model) => async (req, res, next)=>{
    let item = await Model.findById(req.params.id)
    if(item.author !== req.token.user_id){
        
        return res.json({
            code: 102,
            message: 'No permission'
        })
    }

    next()
}
