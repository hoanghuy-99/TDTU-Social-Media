require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const PORT = process.env.PORT || 8080

const connectDatabase = require('./db')
const socket = require('./serverSocket')


app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
const api = require('./routers/api')

//URL for Demo
app.use('/demo',(req, res)=>{
    req.io.emitDemo('Dữ liệu từ server')
    res.send('Đã gửi cho client qua socket')
})

//Serve API
app.use('/api', api)

//Serve React
app.use(express.static(path.join(__dirname,'./public')))

app.use((req, res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'))
})



//Start server
{(async ()=>{
    //Connect database
    await connectDatabase().then(()=>{
        console.log('Database connected')
    })
    
    const server = socket(app)
    server.listen(PORT, ()=>{
        console.log('server running on http://localhost:'+PORT);
    })
})()}

