let socket



const useSocket = ()=>{
    return{
        handleNewNotification: (action)=>{
            socket.on('new_notification', (data)=>{
                action(data)
            })
        }
    }
}