const router = require('express').Router()
const tokenCtrl = require('../controllers/token')
router.put('/tokens', tokenCtrl.createTokenByGoogle)

module.exports = router