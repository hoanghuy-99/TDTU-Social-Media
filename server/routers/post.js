const router = require('express').Router()

const postCtrl = require('../controllers/post')
const {requireToken, requireYour} = require('../middlewares/authorization')
const Post = require('../models/Post')

router.get('/posts', requireToken(), postCtrl.getManyPost)
router.post('/posts',requireToken(), postCtrl.createPost)
router.get('/posts/:id', requireToken(), postCtrl.getSinglePost)
router.patch('/posts/:id', requireToken(), requireYour(Post), postCtrl.editPost)
router.delete('/posts/:id', requireToken(), requireYour(Post), postCtrl.deletePost)
router.post('/posts/:id/comments', requireToken(), postCtrl.commentPost)

module.exports = router