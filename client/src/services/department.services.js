import {getToken} from '../cookie.js'
import host from './host'

async function requestDepartment() {
    const response = await fetch(host+'/api/departments',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await response.json()
    return data
}

export { requestDepartment }