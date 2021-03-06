const Department = require('../models/Department')
const User = require('../models/User')
const Post = require('../models/Post')
const Notification = require('../models/Notification')
const hasher = require('../utils/hasher')
const { Types } = require('mongoose')

async function getName(id,role){
    return role === 'student' ? (await Student.findById(id)).name : (await User.findById(id)).name
}

exports.createTeachers =  async (req, res)=>{
    let password = await hasher.hash(req.body.password)
    let { departments } = req.body
    departments = await Promise.all(departments.map(async d => (await Department.findOne({id:d.id}))._id ))
    let teacher = await User.create({
        _id: new Types.ObjectId(),
        name: req.body.name, 
        username: req.body.username,
        email: req.body.email, 
        role:'teacher', 
        password, 
        departments})
    teacher = await User.findById(teacher._id).populate('departments')
    res.json({
        code: 0,
        data :{
            id: teacher._id,
            email: teacher.email,
            username: teacher.username,
            name: teacher.name,
            departments: teacher.departments.map(d =>({
                id: d.id,
                name: d.name
            }))
        }
    })
}

exports.getSingleTeacher = async (req, res)=>{
    let teacher = await User.findById(req.params.id).populate('departments')
    res.json({
        code: 0,
        data :{
            id: teacher._id,
            email: teacher.email,
            username: teacher.username,
            name: teacher.name,
            departments: teacher.departments?.map(d =>({
                id: d.id,
                name: d.name
            })) || []
        }
    })
}

exports.getPosts = async (req, res)=>{
    const {page, limit, olderThan} = req.query
    limit = parseInt(limit)
    page = parseInt(page)
    olderThan = parseInt(olderThan)
    let postsQuery = Post.find({author:req.params.id}).populate('comments')
    if(olderThan){
        postsQuery = postsQuery.where('createdAt').lte(olderThan)
    }
    if(page && limit){
        postsQuery = postsQuery.skip(page*limit).limit(limit)
    }
    const [posts, count] = await Promise.all(postsQuery.exec(), Post.find().countDocuments())
    
    res.json({
        code:0,
        data:{
          totalPages: page || 1,
          totalItems: count, 
          page: page || 1,
          limit: 2,
          items: await Promise.all(posts.map(async (post) =>({
            id: post._id,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
            author:{
                id: post.author,
                role: post.authorRole,
                name: await getName(post.author, post.authorRole)
            },
            comments:Promise.all(post.comments.map(async comment =>{
                let name = await getName(comment.author, comment.authorRole)
                return {
                id: comment._id,
                content: comment.content,
                author:{
                    id: comment.author,
                    role: comment.authorRole,
                    name: name
                }
            }})),
            content: post.content,
            video: post.video
          })))
        }
      })
}

exports.getManyNotification = async (req, res)=>{
    const {page, limit, olderThan, departmentId} = req.query
    let notificationsQuery = Notification.find({author: req.params.id}).populate('department')
    if(olderThan){
        olderThan = parseInt(olderThan)
        notificationsQuery = notificationsQuery.where('createdAt').lte(olderThan)
    }
    if(departmentId){
        let department = await Department.findOne({id: departmentId})
        notificationsQuery = notificationsQuery.where('department', department?._id)
    }
    if(page && limit){
        limit = parseInt(limit)
        page = parseInt(page)
        notificationsQuery = notificationsQuery.skip(page*limit).limit(limit)
    }
    const [notifications, count] = await Promise.all([notificationsQuery.exec(), Notification.find().countDocuments()])
    
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

exports.getAvatar = async (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/img/avatar_mac_dinh.jpg'))
    //let user = await User.findById(req.params.id)
    //res.sendFile(path.join(__dirname, '../uploads/'+ user.image))
}

exports.updateAvatar = async (req, res)=>{
    let user = await User.findById(req.params.id)
    user.avatar = req.image
    user.save()
    res.json({
        code: 0,
        message:'T???i h??nh ???nh th??nh c??ng'
    })
}
