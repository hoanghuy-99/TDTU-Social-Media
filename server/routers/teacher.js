const router = require('express').Router()

const { requireToken } = require('../middlewares/authorization')
const teacherCtrl = require('../controllers/teacher')
router.post('/teachers', requireToken('admin'), teacherCtrl.createTeachers)
router.get('/teachers/:id', requireToken(), teacherCtrl.getSingleTeacher)
router.get('/teachers/:id/posts', requireToken(), teacherCtrl.getPosts)

module.exports = router