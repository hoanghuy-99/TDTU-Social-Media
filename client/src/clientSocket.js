let socket

handleNewNotification = (action)=>{
    socket.on('new_notification', (data)=>{
        action(data)
    })
}