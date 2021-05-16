import {getToken} from '../cookie.js'
import host from './host'

async function requestNotification() {
    const response = await fetch(host+'/api/notifications',{
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
    const response = await fetch(host+'/api/notifications',{
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
    const response = await fetch(host+'/api/notifications/'+id,{
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
    const response = await fetch(host+'/api/teachers/'+id+'/notifications',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    })
    const data = await response.json()
    return data
}

async function requestNotiByIdFacultyAndTeacher(id,departmentId) {
    const response = await fetch(host+'/api/teachers/'+id+'/notifications?departmentId='+departmentId,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    })
    const data = await response.json()
    return data
}

async function requestNotiByIdFaculty(departmentId) {
    const response = await fetch(host+'/api/notifications?departmentId='+departmentId,{
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
    const response = await fetch(host+'/api/notifications/'+id,{
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
    const response = await fetch(host+'/api/notifications/'+id,{
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

export { requestNotification, requestNotiByIdTeacher,requestNotiByIdFaculty,
requestNewNotification, requestChangeNotificationById, requestNotiByIdFacultyAndTeacher,
requestNotificationById, requestDeleteNotification }