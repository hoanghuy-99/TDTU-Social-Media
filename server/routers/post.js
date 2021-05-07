const router = require('express').Router()

const postCtrl = require('../controllers/post')
const {requireToken, requireYour} = require('../middlewares/authorization')
const uploadImage = require('../middlewares/imageUpload')
const Post = require('../models/Post')

router.get('/posts', requireToken(), postCtrl.getManyPost)
router.post('/posts',requireToken(), postCtrl.createPost)
router.get('/posts/:id', requireToken(), postCtrl.getSinglePost)
router.patch('/posts/:id', requireToken(), requireYour(Post), postCtrl.editPost)
router.delete('/posts/:id', requireToken(), requireYour(Post), postCtrl.deletePost)
router.post('/posts/:id/comments', requireToken(), postCtrl.commentPost)
router.get('/posts/:id/image', requireToken(), postCtrl.getImage)
router.get('/posts/:id/image', requireToken(), requireYour(Post), uploadImage(), postCtrl.uploadImage)

module.exports = router