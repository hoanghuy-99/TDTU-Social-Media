const connectDatabase = require('./db')

const mongoose = require('mongoose')
const hasher = require('./utils/hasher')

const User = require('./models/User')

async function prepareData(){
    await connectDatabase()
    await User.deleteMany()

    const hashed_password = await hasher.hash('123123')

    const account = new User({
        name:"TuanKiet",
        avatar:"/img/avatar_mac_dinh.jpg",
        username:"tuankiet",
        password: hashed_password,
        departments:[],
        role:"admin",
        posts:[],
        notification:[]
    })
    const docs = [account]
    for(let i = 0; i < docs.length; i++ )
    {   
        await docs[i].save()
    }
}
prepareData().then(()=>{
    console.log('Fake data were created')
}).catch(error => {
    console.log(error)
    
}).finally(()=>{
    mongoose.connection.close()
})