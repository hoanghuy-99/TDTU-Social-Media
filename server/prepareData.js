const connectDatabase = require('./db')

const mongoose = require('mongoose')
const hasher = require('./utils/hasher')

const User = require('./models/User')
const Department = require('./models/Department')
const Post = require('./models/Post')
const Notification = require('./models/Notification')
const Student = require('./models/Student')
const Comment = require('./models/Comment')
async function prepareData(){
    await connectDatabase()
    await User.deleteMany()
    await Department.deleteMany()
    await Post.deleteMany()
    await Notification.deleteMany()
    await Student.deleteMany()
    await Comment.deleteMany()

    const hashed_password = await hasher.hash('admin')

    const account = new User({
        _id: new mongoose.Types.ObjectId(),
        name:"Administrator",
        username:"admin",
        password: hashed_password,
        departments:[],
        role:"admin",
        posts:[],
        notification:[]
    })
    
    const faculty1 = new Department({
        id:"CTHSSV",
        name:"Phòng CTHSSV"
    })
    
    const faculty2 = new Department({
        id:"UniRoom",
        name:"Phòng Đại học"
    })

    const faculty3 = new Department({
        id:"AUR",
        name:"Phòng Sau đại học"
    })

    const faculty4 = new Department({
        id:"CR",
        name:"Phòng Điện toán và máy tính"
    })

    const faculty5 = new Department({
        id:"SR",
        name:"Phòng khảo khí và kiểm định chất lượng"
    })

    const faculty6 = new Department({
        id:"ER",
        name:"Doanh nghiệp, cựu sinh viên"
    })

    const faculty7 = new Department({
        id:"FR",
        name:"Phòng tài chính"
    })

    const faculty8 = new Department({
        id:"CLCR",
        name:"TDT Creative Language Center"
    })

    const faculty9 = new Department({
        id:"ITR",
        name:"Trung tâm tin học"
    })

    const faculty10 = new Department({
        id:"SDTC",
        name:"Đào tạo phát triển xã hội"
    })

    const faculty11 = new Department({
        id:"ATEM",
        name:"Khoa học quản lý, Ứng dụng công nghệ"
    })

    const faculty12 = new Department({
        id:"Law",
        name:"Khoa Luật"
    })

    const faculty13 = new Department({
        id:"EIF",
        name:"Ngoại ngữ-Tin học-Bồi dưỡng"
    })

    const faculty14 = new Department({
        id:"EB",
        name:"Kinh tế và Kinh doanh"
    })

    const faculty15 = new Department({
        id:"MTCN",
        name:"Khoa Mỹ thuật công nghiệp"
    })

    const faculty16 = new Department({
        id:"Electrical",
        name:"Khoa Điện-Điện tử"
    })

    const faculty17 = new Department({
        id:"CNTT",
        name:"Khoa Công nghệ thông tin"
    })

    const faculty18 = new Department({
        id:"QTKD",
        name:"Khoa Quản trị kinh doanh"
    })

    const faculty19 = new Department({
        id:"MT_BHLD",
        name:"Môi trường và bảo hộ lao động"
    })

    const faculty20 = new Department({
        id:"LDCD",
        name:"Khoa Lao động công đoàn"
    })

    const faculty21 = new Department({
        id:"TCNH",
        name:"Khoa Tài chính ngân hàng"
    })

    const faculty22 = new Department({
        id:"QDQT",
        name:"Khoa Giáo dục quốc tế"
    })
    const docs = [account,faculty1,faculty2,faculty3,faculty4,faculty5,faculty6,faculty7,faculty8,faculty9,faculty10,
        faculty11,faculty12,faculty13,faculty14,faculty15,faculty16,faculty17,faculty18,faculty19,faculty20,faculty21,faculty22]
    for(let i = 0; i < docs.length; i++ )
    {   
        await docs[i].save()
    }
}
prepareData().then(()=>{    
    console.log('Data were created')
}).catch(error => {
    console.log(error)
    
}).finally(()=>{
    mongoose.connection.close()
})