import {getToken} from '../cookie.js'
import host from './host'

async function requestUserById() {
    const response = await fetch(host+'/api/profile',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    })
    const data = await response.json()
    return data
}

async function requestChangePassword(oldPassword,newPassword){
    const req= {
        oldPassword,newPassword
    }
    const response = await fetch(host+'/api/password',{
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
        body: JSON.stringify(req)
    })
    const data = await response.json()
    return data
}

async function requestChangeInfoById(name,classroom,faculty){
    const req = {
        name,
        class:classroom,
        faculty
    }
    const response = await fetch(host+'/api/profile',{
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
        body: JSON.stringify(req)
    })
    const data = await response.json()
    return data
}

async function requestPostById(){
    const response = await fetch(host + '/api/users/student/post',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    })
    const data = await response.json()
    return data
}

async function requestImageById(){
    const response = await fetch(host+'/api/profile/avatar',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    })
    const data = await response.blob()
    return data
}

async function requestChangeAvatarById(imgAvatar){
    const response = await fetch(host+'/api/profile/avatar',{
        method: "PUT",
        headers: {
            'Authorization': getToken(),
        },
        body: imgAvatar
    })
    const data = await response.json()
    return data
}

async function requestGetAvatarStudent(id){
    const response = await fetch(host+'/api/students/'+id+'/avatar',{
        method: "GET",
        headers: {
            'Authorization': getToken(),
        },
    })
    const data = await response.blob()
    return data
}
export { requestUserById,requestChangePassword,requestImageById,requestChangeInfoById,requestChangeAvatarById,requestGetAvatarStudent}