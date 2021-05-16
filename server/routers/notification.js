const router = require('express').Router()
const Notification = require('../models/Notification')
const notificationCtrl = require('../controllers/notification')
const { requireToken, requireYour } = require('../middlewares/authorization')
const { useValidator } = require('../middlewares/validator')
const { NotificationCreateValidator, NotificationEditValidator } = require('../validators/notification')

router.get('/notifications', requireToken(), notificationCtrl.getManyNotification)
router.post('/notifications',requireToken(['teacher']), useValidator(NotificationCreateValidator),notificationCtrl.createNotification)
router.get('/notifications/:id', requireToken(), notificationCtrl.getSingleNotification)
router.patch('/notifications/:id', requireToken(['teacher']), useValidator(NotificationEditValidator),requireYour(Notification),notificationCtrl.editNotification)
router.delete('/notifications/:id', requireToken(['teacher']), requireYour(Notification), notificationCtrl.deleteNotification)


module.exports = router