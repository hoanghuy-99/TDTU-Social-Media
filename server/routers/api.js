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

router.use((req, res)=>{
    if(process.env.NODE_ENV !== 'production'){
        console.log('API not found')
    }
    res.status(404).send('API not found')
})

module.exports = router