import {getToken} from '../cookie.js'
var host = window.location.protocol + "//" + window.location.host

async function requestUserById() {
    const response = await fetch('http://localhost:8080/api/profile',{
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
    const response = await fetch('http://localhost:8080/api/password',{
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
    const response = await fetch(host + '/api/users/student/me',{
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
    const response = await fetch(host + '/api/users/student/avatar',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    })
    const data = await response.json()
    return data
}

async function requestChangeImageById(){
    const response = await fetch(host + '/api/student/me/avatar',{
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    })
    const data = await response.json()
    return data
}
export { requestUserById,requestChangePassword }