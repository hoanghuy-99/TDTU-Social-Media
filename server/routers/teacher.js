const router = require('express').Router()

const { requireToken } = require('../middlewares/authorization')
const uploadImage = require('../middlewares/imageUpload')
const teacherCtrl = require('../controllers/teacher')
const { useValidator } = require('../middlewares/validator')
const { TeacherCreateValidator } = require('../validators/teacher')

router.post('/teachers', requireToken(['admin']), useValidator(TeacherCreateValidator),teacherCtrl.createTeachers)
router.get('/teachers/:id', requireToken(), teacherCtrl.getSingleTeacher)
router.get('/teachers/:id/posts', requireToken(), teacherCtrl.getPosts)
router.get('/teachers/:id/notifications', requireToken(), teacherCtrl.getManyNotification)
router.get('/teachers/:id/avatar', requireToken(), teacherCtrl.getAvatar)
router.put('/teachers/:id/avatar', requireToken(['admin']), uploadImage(), teacherCtrl.updateAvatar)

module.exports = router