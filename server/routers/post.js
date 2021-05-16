const router = require('express').Router()

const postCtrl = require('../controllers/post')
const {requireToken, requireYour} = require('../middlewares/authorization')
const uploadImage = require('../middlewares/imageUpload')
const { useValidator } = require('../middlewares/validator')
const Post = require('../models/Post')
const { CommentCreateValidator } = require('../validators/comment')
const { PostCreateValidator, PostEditValidator } = require('../validators/post')

router.get('/posts', requireToken(), postCtrl.getManyPost)
router.post('/posts',requireToken(),useValidator(PostCreateValidator), postCtrl.createPost)
router.get('/posts/:id', requireToken(), postCtrl.getSinglePost)
router.patch('/posts/:id', requireToken(), requireYour(Post), useValidator(PostEditValidator),postCtrl.editPost)
router.delete('/posts/:id', requireToken(), requireYour(Post), postCtrl.deletePost)
router.post('/posts/:id/comments', requireToken(), useValidator(CommentCreateValidator),postCtrl.commentPost)
router.get('/posts/:id/image', requireToken(), postCtrl.getImage)
router.put('/posts/:id/image', requireToken(), requireYour(Post), uploadImage(), postCtrl.uploadImage)

module.exports = router