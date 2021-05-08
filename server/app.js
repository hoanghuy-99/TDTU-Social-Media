require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8080
const connectDatabase = require('./db')

app.use(express.json())
app.use(cors())
const api = require('./routers/api')
app.use('/api', api)

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
