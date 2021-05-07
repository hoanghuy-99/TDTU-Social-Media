const User = require('../models/User')
const Student = require('../models/Student')
const Notification = require('../models/Notification')
const Comment = require('../models/Comment')


async function getName(id,role){
    return role === 'student' ? (await Student.findById(id)).name : (await User.findById(id)).name
}


exports.createNotification = async (req, res)=>{
    let department = (await Department.find({id:req.body.departmentId}))._id 
    let notification = await Notification.create({
        ...req.body,
        author: req.token.user_id,
        authorRole: req.token.role,
        department
    })
    let user
    if(req.token.role === 'student'){
        user = await Student.findById(req.token.user_id)
        user.notifications.push(notification._id)
        await user.save()
    }else{
        user = await User.findById(req.token.user_id)
        user.notifications.push(notification._id)
        await user.save()
    }

    res.json({
        code: 0,
        data:{
            id: notification._id,
            author:{
                id:user.id,
                role:notification.authorRole,
                name: user.name
            },
            content: notification.content,
            createdAt: notification.createdAt,
            updatedAt: notification.updatedAt
        }
    })
}

exports.getManyNotification = async (req, res)=>{
    const {page, limit, olderThan} = req.query
    limit = parseInt(limit)
    page = parseInt(page)
    olderThan = parseInt(olderThan)
    let notificationsQuery = Notification.find().populate('comments')
    if(olderThan){
        notificationsQuery = notificationsQuery.where('createdAt').lte(olderThan)
    }
    if(page && limit){
        notificationsQuery = notificationsQuery.skip(page*limit).limit(limit)
    }
    const [notifications, count] = await Promise.all(notificationsQuery.exec(), Notification.find().countDocuments())
    
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
                role: notification.authorRole,
                name: notification.authorRole === 'student' ? (await Student.findById(notification.author)).name : (await User.findById(notification.author)).name
            },
            title: notification.title,
            content: notification.content,
          })))
        }
      })
}

exports.getSingleNotification = async (req, res)=>{
    let notification = await Notification.findById(req.params.id).populate('comments')
    res.json({
        code: 0,
        data:{
            id: notification._id,
            createdAt: notification.createdAt,
            updatedAt: notification.updatedAt,
            author:{
                id: notification.author,
                role: notification.authorRole,
                name: notification.authorRole === 'student' ? (await Student.findById(notification.author)).name : (await User.findById(notification.author)).name
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
    let notification = await Notification.findByIdAndUpdate(req.params.id, req.body).populate('comments')
    res.json({
        code: 0,
        data:{
            id: notification._id,
            createdAt: notification.createdAt,
            updatedAt: notification.updatedAt,
            author:{
                id: notification.author,
                role: notification.authorRole,
                name: notification.authorRole === 'student' ? (await Student.findById(notification.author)).name : (await User.findById(notification.author)).name
            },
            title: notification.title,
            content: notification.content
        }
    })
}

exports.deleteNotification = async (req, res)=>{
    const notification = await Notification.findByIdAndDelete(req.params.id)
    let user
    if(notification.authorRole === 'student'){
        user = await Student.findById(notification.author)
    }else{
        user = await User.findById(notification.author)
    }
    user.notifications = user.notifications.filter(notificationId => notificationId !== notification._id)
    await user.save()
    res.json({
        code: 0,
        message: 'Xóa thành công'
    })
}
