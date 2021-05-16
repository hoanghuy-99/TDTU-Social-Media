const { validationResult } = require('express-validator')
module.exports.useValidator = (validator)=>[validator, (req, res, next)=>{
    let err = validationResult(req).array()
    if(err.length>0){
        let code = err[0].msg.code
        let message = err[0].msg.message

        return res.json({code, message})
    }

    next()
}]