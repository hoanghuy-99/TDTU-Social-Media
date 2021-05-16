import {getToken} from '../cookie.js'
var host = window.location.protocol + "//" + window.location.host

async function requestPost() {
    const response = await fetch('http://localhost:8080/api/posts',{
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
    const req = {
        content,video
    }
    console.log("kết quả",req);
    const response = await fetch('http://localhost:8080/api/posts',{
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
    const response = await fetch('http://localhost:8080/api/posts/'+id,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    })
    const data = await response.json()
    return data
}

async function requestChangePostById(id,content,video) {
    const req= {
        content,video
    }
    const response = await fetch('http://localhost:8080/api/posts/'+id,{
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

async function requestDeletePost(id) {
    const response = await fetch("http://localhost:8080/api/posts/"+id,{
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    })
    const data = await response.json()
    return data
}

async function requestCommentPost(id) {
    const response = await fetch(host + '/api/posts/'+id+'/comments',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    })
    const data = await response.json()
    return data
}

async function requestNewCommentPost(id,content) {
    const req={
        content
    }
    const response = await fetch('http://localhost:8080/api/posts/'+id+'/comments',{
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


async function requestChangeComment(id,content) {
    const req={
        content
    }
    const response = await fetch('http://localhost:8080/api/comments/'+id,{
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

async function requestDeleteComment(id) {
    const response = await fetch('http://localhost:8080/api/comments/'+id,{
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    })
    const data = await response.json()
    return data
}

async function requestImagePost(id,imgPost) {
    const response = await fetch('http://localhost:8080/api/posts/'+id+'/image',{
        method: "PUT",
        headers: {
            'Authorization': getToken(),
        },
        body: imgPost
    })
    const data = await response.json()
    return data
}

async function requestGetImagePost(id) {
    const response = await fetch('http://localhost:8080/api/posts/'+id+'/image',{
        method: "GET",
        headers: {
            'Authorization': getToken(),
        },
    })
    const data = await response.blob()
    return data
}
async function requestChangeImagePost(id) {
    const response = await fetch(host + '/api/posts/'+id+'/image',{
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
        body: ''
    })
    const data = await response.json()
    return data
}

async function requestDeleteImagePost(id) {
    const response = await fetch(host + '/api/posts/'+id+'/image',{
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

export { requestPost, requestPostById, requestNewPost, 
    requestDeletePost, requestChangePostById, requestNewCommentPost, 
    requestDeleteComment, requestChangeComment,requestImagePost,requestGetImagePost }