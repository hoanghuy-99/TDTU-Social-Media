const router = require('express').Router()

const commentCtrl = require('../controllers/comment')
const { requireToken, requireYour } = require('../middlewares/authorization')
const Comment = require('../models/Comment')

router.patch('/comments/:id', requireToken(), requireYour(Comment),commentCtrl.editComment)
router.delete('/comments/:id', requireToken(), requireYour(Comment), commentCtrl.deleteComment)

module.exports = router