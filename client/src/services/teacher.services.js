import {getToken} from '../cookie.js'
var host = window.location.protocol + "//" + window.location.host

async function requestNewTeacher(username, password, email, name, departments) {
    const req = {
        username, password, email, name, departments
    }
    const response = await fetch('http://localhost:8080/api/teachers',{
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

async function requestTeacherById(id) {
    const response = await fetch('http://localhost:8080/api/teachers/'+id,{
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

async function requestChangePasswordTeacher(oldpass, newpass) {
    const req = {
        oldpass, newpass
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

export { requestTeacherById, requestAvatarTeacher, requestNewTeacher, requestChangePasswordTeacher, requestChangeAvatarTeacher }