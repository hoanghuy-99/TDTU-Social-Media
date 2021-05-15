const validate = require('jsonschema').validate
exports.useValidator = (schemaCreator)=>(req, res, next)=>{
    let schema = schemaCreator(req.token.user_id)
    const rs = validate(req.body, schema, {required:true, nestedErrors: true})
    if(rs.valid){
        return next()
    }
    res.json({
        code:1,
        message:rs.errors[0].message
    })

}