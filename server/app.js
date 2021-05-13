require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const PORT = process.env.PORT || 8080

const connectDatabase = require('./db')
const socket = require('./socket')

const server = socket(app)

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
const api = require('./routers/api')

app.use('/api', api)

app.use(express.static(path.join(__dirname,'./public')))

app.use((req, res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'))
})


//Chạy server
{(async ()=>{
    //Kết nối database
    await connectDatabase().then(()=>{
        console.log('Database connected')
    })
    
    server.listen(PORT, ()=>{
        console.log('server running on http://localhost:'+PORT);
    })
})()}

