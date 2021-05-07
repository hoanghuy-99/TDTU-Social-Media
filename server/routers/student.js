const { requireToken } = require('../middlewares/authorization')

const router = require('express').Router()
const studentCtrl = require('../controllers/student')
router.get('/students/:id', requireToken(), studentCtrl.getSingleStudent)
router.get('/students/:id/avatar', requireToken(), studentCtrl.getAvatar)
router.get('/students/:id/posts', requireToken(), studentCtrl.getPosts)

module.exports = router