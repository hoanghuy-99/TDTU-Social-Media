const router = require('express').Router()
const Notification = require('../models/Notification')
const notificationCtrl = require('../controllers/notification')

router.get('/notifications', requireToken(), notificationCtrl.createNotification)
router.post('/notifications',requireToken(['teacher']), notificationCtrl.createNotification)
router.get('/notifications/:id', requireToken(), notificationCtrl.getSingleNotification)
router.patch('/notifications/:id', requireToken(['teacher']), requireYour(Notification), notificationCtrl.editNotification)
router.delete('/notifications/:id', requireToken(['teacher']), requireYour(Notification), notificationCtrl.deleteNotification)


module.exports = router