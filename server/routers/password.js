const router = require('express').Router()
const { requireToken } = require('../middlewares/authorization')

const passwordCtrl = require('../controllers/password')
const { useValidator } = require('../middlewares/validator')
const { PasswordChangeValidator } = require('../validators/password')

router.put('/password', requireToken(['teacher']),useValidator(PasswordChangeValidator),passwordCtrl.changePassword)

module.exports = router