require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3000

//Kết nối database
const connectDatabase = require('./db')
connectDatabase().then(()=>{
    require('./demo')()
})


app.use(express.static(path.join(__dirname,'./public')))

app.use((req, res)=>{
    console.log('view')
    res.sendFile(path.join(__dirname,'./public/index.html'))
})

app.use(()=>{
    console.log('error')
})



app.listen(PORT, ()=>{
    console.log('server running on http://localhost:'+PORT);
})