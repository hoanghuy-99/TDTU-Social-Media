require('dotenv').config()
const {createServer} = require(process.env.NODE_ENV == 'production'?'https':'http')
const { Server } = require('socket.io')
const jwtUtil = require('./utils/jwt')
const privateKey = process.env.PRIVATE_KEY

module.exports = (app) =>{
    const server = createServer(app)
    const io = new Server(server)
    //Set up middleware for app
    app.use((req, res, next)=>{
        req.socketIo = {
            emitNewNotification: (data)=>{
                io.emit('new_notification', data)
            }
        }
        next()
    })

    //Set up middleware for io
    io.use((socket, next)=>{
        const token = socket.handshake.auth.token
        if(!token){
            return next(new Error('No credentials sent!'))
        }
        let isValid = true
        let payload = undefined
        
        try{
            payload = jwtUtil.verify(token, privateKey)
            if(!payload){
                isValid = false
            }
        }catch(e){
            console.log(e)
            isValid = false
        }

        if(!isValid){
            return next(new Error('Token is invalid'))
        }

        if(payload.role != 'student'){
            return next(new Error('No permission'))
        }

        next()
    })


    return server
}