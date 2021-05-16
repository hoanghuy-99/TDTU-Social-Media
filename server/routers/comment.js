const router = require('express').Router()

const commentCtrl = require('../controllers/comment')
const { requireToken, requireYour } = require('../middlewares/authorization')
const { useValidator } = require('../middlewares/validator')
const Comment = require('../models/Comment')
const { CommentEditValidator } = require('../validators/comment')

router.patch('/comments/:id', requireToken(), requireYour(Comment), useValidator(CommentEditValidator),commentCtrl.editComment)
router.delete('/comments/:id', requireToken(), requireYour(Comment), commentCtrl.deleteComment)

module.exports = router