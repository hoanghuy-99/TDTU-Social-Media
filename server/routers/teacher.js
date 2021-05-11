const router = require('express').Router()

const { requireToken } = require('../middlewares/authorization')
const uploadImage = require('../middlewares/imageUpload')
const teacherCtrl = require('../controllers/teacher')

router.post('/teachers', requireToken(['admin']), teacherCtrl.createTeachers)
router.get('/teachers/:id', requireToken(), teacherCtrl.getSingleTeacher)
router.get('/teachers/:id/posts', requireToken(), teacherCtrl.getPosts)
router.get('/teachers/:id/notifications', requireToken(), teacherCtrl.getManyNotification)
router.get('/teachers/:id/avatar', requireToken(), teacherCtrl.getAvatar)
router.put('/teachers/:id/avatar', requireToken(), uploadImage(), teacherCtrl.updateAvatar)

module.exports = router