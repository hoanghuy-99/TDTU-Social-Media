require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3000
const connectDatabase = require('./db')


app.use(express.static(path.join(__dirname,'./public')))


app.use((req, res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'))
})

//Chạy server
const start = async ()=>{
    //Kết nối database
    await connectDatabase().then(()=>{
        console.log('Database connected')
    })
    
    app.listen(PORT, ()=>{
        console.log('server running on http://localhost:'+PORT);
    })
}

start()
