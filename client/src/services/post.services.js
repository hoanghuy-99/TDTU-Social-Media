import {getToken} from '../cookie.js'
var host = window.location.protocol + "//" + window.location.host

async function requestPost() {
    const response = await fetch(host + '/api/posts',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    })
    const data = await response.json()
    return data
}

async function requestNewPost(content,video) {
    const req= {
        content,video
    }
    const response = await fetch(host + '/api/posts',{
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

async function requestPostById(id) {
    const response = await fetch(host + '/api/posts/'+id,{
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

async function requestChangePostById(id) {
    const response = await fetch(host + '/api/posts/'+id,{
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
        body: ''
    })
    const data = await response.json()
    return data
}