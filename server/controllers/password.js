const User = require("../models/User")
const hasher = require('../utils/hasher')
exports.changePassword = async (req, res)=>{
    let user = await User.findById(req.token.user_id)
    let match = await hasher.compare(req.body.oldPassword, user.password)

    if(match){
        const password = await hasher.hash(req.body.newPassword)
        user.password = password
        await user.save()
        return res.json({
            code: 0,
            message:"Đổi mật khẩu thành công"
        })
    }else{
        return res.json({
            code: 1,
            message: 'Mật khẩu sai'
        })
    }

}