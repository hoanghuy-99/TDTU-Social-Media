const router = require('express').Router()

const postCtrl = require('../controllers/post')
const {requireToken} = require('../middlewares/authorization')

router.get('/posts', requireToken(), postCtrl.getManyPost)
router.post('/posts',requireToken(), postCtrl.createPost)
router.get('/posts/:id', requireToken(), postCtrl.getSinglePost)
router.patch('/posts/:id', requireToken(), postCtrl.editPost)
router.delete('/posts/:id', requireToken(), postCtrl.deletePost)
router.post('/posts/:id/comments', requireToken(), postCtrl.commentPost)

module.exports = router