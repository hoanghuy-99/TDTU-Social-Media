let socket
const useSocket = ()=>{
    if(!socket){
        socket = io('ws://localhost:8080')
    }
    return{
        handleNewNotification: (action)=>{
            socket.on('new_notification', (data)=>{
                action(data)
            })
        },
        handleDemo: (action)=>{
            socket.on('demo', (data)=>{
                action(data)
            })
        }
    }
}

export default useSocket