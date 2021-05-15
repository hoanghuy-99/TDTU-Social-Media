const express = require('express')
const path = require('path')
const port = 3000

const server = express()

server.use(express.static(path.join(__dirname, './public')))
server.use((req, res)=>{
    res.sendFile(path.join(__dirname, './public/index.html'))
})

server.listen(port, ()=>{
    console.log('React is running on http://localhost:'+port)
})