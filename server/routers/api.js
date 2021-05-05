const router = require('express').Router()

const commentRouter = require('./comment')
const departmentRouter = require('./department')
const notificationRouter = require('./notification')
const postRouter = require('./post')
const studentRouter = require('./student')
const teacherRouter = require('./teacher')
const tokenRouter = require('./token')

router.use(tokenRouter)
router.use(commentRouter)
router.use(departmentRouter)
router.use(notificationRouter)
router.use(postRouter)
router.use(studentRouter)
router.use(teacherRouter)

module.exports = router