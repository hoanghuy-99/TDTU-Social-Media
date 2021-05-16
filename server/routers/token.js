const router = require('express').Router()
const tokenCtrl = require('../controllers/token')
const { useValidator } = require('../middlewares/validator')
const { DefaultLoginValidator, GoogleLoginValidator } = require('../validators/token')
router.put('/tokens', useValidator(GoogleLoginValidator),tokenCtrl.createTokenByGoogle)
router.post('/tokens', useValidator(DefaultLoginValidator),tokenCtrl.createToken)
module.exports = router