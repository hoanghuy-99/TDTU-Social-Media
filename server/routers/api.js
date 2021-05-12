const router = require('express').Router()

const commentRouter = require('./comment')
const departmentRouter = require('./department')
const notificationRouter = require('./notification')
const postRouter = require('./post')
const studentRouter = require('./student')
const teacherRouter = require('./teacher')
const tokenRouter = require('./token')
const passwordRouter = require('./password')
const profileRouter = require('./profile')

router.use(passwordRouter)
router.use(tokenRouter)
router.use(commentRouter)
router.use(departmentRouter)
router.use(notificationRouter)
router.use(postRouter)
router.use(studentRouter)
router.use(teacherRouter)
router.use(profileRouter)

module.exports = router