import {getToken} from '../cookie.js'
var host = window.location.protocol + "//" + window.location.host

async function requestNewTeacher(username, password, email, name, department) {
    const req = {
        username, password, email, name, department
    }
    const response = await fetch(host + '/api/teachers',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
        body: JSON.stringify(req)
    })
    const data = await response.json()
    return data
}

async function requestTeacherById() {
    const response = await fetch(host + '/api/teachers/me',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    })
    const data = await response.json()
    return data
}

async function requestAvatarTeacher() {
    const response = await fetch(host + '/api/teachers/me/avatar',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    })
    const data = await response.json()
    return data
}

async function requestChangeAvatarTeacher() {
    const response = await fetch(host + '/api/teachers/me/avatar',{
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    })
    const data = await response.json()
    return data
}

async function requestChangePasswordTeacher(oldpass,newpass) {
    const req = {
        oldpass,newpass
    }
    const response = await fetch(host + '/api/teachers/me/avatar',{
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