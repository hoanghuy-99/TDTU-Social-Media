let socket
const useSocket = ()=>{
    if(!socket){
        socket = io()
    }
    return{
        handleNewNotification: (action)=>{
            socket.on('new_notification', (data)=>{
                action(data)
            })
        }
    }
}