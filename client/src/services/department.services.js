import {getToken} from '../cookie.js'
var host = window.location.protocol + "//" + window.location.host
console.log(host);
async function requestDepartment() {
    const response = await fetch('http://localhost:8080/api/departments',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await response.json()
    return data
}

export {requestDepartment}