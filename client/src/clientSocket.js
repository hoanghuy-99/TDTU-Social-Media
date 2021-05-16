import {getToken} from './cookie'
let socket
const useSocket = ()=>{
    if(!socket){
        socket = io(`wss://${window.location.hostname}:${window.location.port}`, {
            auth: {
                token: getToken()
            }
        })
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