const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'./public')))

app.use((req, res)=>{
    console.log('view')
    res.sendFile(path.join(__dirname,'./public/index.html'))
})
app.use(()=>{
    console.log('error')
})

app.listen(3000)