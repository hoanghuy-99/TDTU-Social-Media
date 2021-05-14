import {getToken} from '../cookie.js'
var host = window.location.protocol + "//" + window.location.host

async function requestNotification() {
    const response = await fetch('http://localhost:8080/api/notifications',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    })
    const data = await response.json()
    return data
}

async function requestNewNotification(title,content,departmentId) {
    const req = {
        title,content,departmentId
    }
    const response = await fetch('http://localhost:8080/api/notifications',{
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

async function requestNotificationById(id) {
    const response = await fetch('http://localhost:8080/api/notifications/'+id,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    })
    const data = await response.json()
    return data
}

async function requestNotiByIdTeacher(id) {
    const response = await fetch('http://localhost:8080/api/teachers/'+id+'/notifications',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    })
    const data = await response.json()
    return data
}

async function requestChangeNotificationById(id,title,content,departmentId) {
    const req = {
        title,content,departmentId
    }
    const response = await fetch(host + '/api/notifications/'+id,{
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

async function requestDeleteNotification(id) {
    const response = await fetch('http://localhost:8080/api/notifications/'+id,{
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
        body: ''
    })
    const data = await response.json()
    return data
}

export { requestNotification, requestNotiByIdTeacher,
requestNewNotification, requestChangeNotificationById, requestNotificationById, requestDeleteNotification }