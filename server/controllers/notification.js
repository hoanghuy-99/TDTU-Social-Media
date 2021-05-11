const User = require('../models/User')
const Student = require('../models/Student')
const Notification = require('../models/Notification')
const Department = require('../models/Department')

exports.createNotification = async (req, res)=>{
    let department = (await Department.findOne({id:req.body.departmentId}))._id
    let notification = await Notification.create({
        ...req.body,
        author: req.token.user_id,
        department: department
    })
    let user = await User.findById(req.token.user_id)
    user.notifications.push(notification._id)
    await user.save()
    
    notification = await Notification.findById(notification._id).populate('department')
    res.json({
        code: 0,
        data:{
            id: notification._id,
            author:{
                id:user.id,
                name: user.name
            },
            department: {
                id: notification.department.id,
                name: notification.department.name
            },
            content: notification.content,
            createdAt: notification.createdAt,
            updatedAt: notification.updatedAt
        }
    })
}

exports.getManyNotification = async (req, res)=>{
    const {page, limit, olderThan, departmentId} = req.query
    let notificationsQuery = Notification.find()
    if(olderThan){
        olderThan = parseInt(olderThan)
        notificationsQuery = notificationsQuery.where('createdAt').lte(olderThan)
    }
    if(department){
        let department = await Department.findOne({id: departmentId})
        notificationsQuery = notificationsQuery.where('department', department?._id)
    }
    if(page && limit){
        limit = parseInt(limit)
        page = parseInt(page)
        notificationsQuery = notificationsQuery.skip(page*limit).limit(limit)
    }
    const [notifications, count] = await Promise.all([notificationsQuery.exec(), Notification.populate('department').countDocuments()])
    
    res.json({
        code:0,
        data:{
          totalPages: page || 1,
          totalItems: count, 
          page: page || 1,
          limit: 2,
          items: await Promise.all(notifications.map(async (notification) =>({
            id: notification._id,
            createdAt: notification.createdAt,
            updatedAt: notification.updatedAt,
            author:{
                id: notification.author,
                name: (await User.findById(notification.author)).name
            },
            department: {
                id: notification.department.id,
                name: notification.department.name
            },
            title: notification.title,
            content: notification.content,
          })))
        }
      })
}

exports.getSingleNotification = async (req, res)=>{
    let notification = await Notification.findById(req.params.id).populate('department')
    res.json({
        code: 0,
        data:{
            id: notification._id,
            createdAt: notification.createdAt,
            updatedAt: notification.updatedAt,
            author:{
                id: notification.author,
                name: (await User.findById(notification.author)).name
            },
            department: {
                id: notification.department.id,
                name: notification.department.name
            },
            title: notification.title,
            content: notification.content,
        }
    })
}

exports.editNotification = async (req, res)=>{
    if(req.body.department){
        req.body.department = (await Department.find({id:req.body.department}))._id 
    }
    let notification = await Notification.findByIdAndUpdate(req.params.id, req.body).populate('department')
    res.json({
        code: 0,
        data:{
            id: notification._id,
            createdAt: notification.createdAt,
            updatedAt: notification.updatedAt,
            author:{
                id: notification.author,
                name: (await User.findById(notification.author)).name
            },
            department: {
                id: notification.department.id,
                name: notification.department.name
            },
            title: notification.title,
            content: notification.content
        }
    })
}

exports.deleteNotification = async (req, res)=>{
    const notification = await Notification.findByIdAndDelete(req.params.id)
    let user = await User.findById(notification.author)
    
    user.notifications = user.notifications.filter(notificationId => notificationId !== notification._id)
    await user.save()
    res.json({
        code: 0,
        message: 'Xóa thành công'
    })
}
