const router = require('express').Router()

const profileCtrl = require('../controllers/profile')
const { requireToken } = require('../middlewares/authorization')
const uploadImage  = require('../middlewares/imageUpload')
const { useValidator } = require('../middlewares/validator')
const { StudentEditValidator } = require('../validators/student')

router.get('/profile', requireToken(),profileCtrl.getProfile)
router.patch('/profile', requireToken(['student']), useValidator(StudentEditValidator),profileCtrl.editProfile)
router.get('/profile/avatar', requireToken(), profileCtrl.getAvatar)
router.put('/profile/avatar',requireToken(['student']), uploadImage(), profileCtrl.updateAvatar)


module.exports = router