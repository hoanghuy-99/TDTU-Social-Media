const router = require('express').Router()
const { requireToken } = require('../middlewares/authorization')

const passwordCtrl = require('../controllers/password')

router.put('/password', requireToken(['teacher']),passwordCtrl.changePassword)

module.exports = router