import {getToken} from '../cookie.js'
var host = window.location.protocol + "//" + window.location.host

async function requestDepartment() {
    const response = await fetch(host + '/api/departments',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await response.json()
    return data
}
