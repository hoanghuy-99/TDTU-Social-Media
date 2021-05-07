const router = require('express').Router()
const tokenCtrl = require('../controllers/token')
router.put('/tokens', tokenCtrl.createTokenByGoogle)
router.post('/tokens', tokenCtrl.createToken)
module.exports = router