var host = window.location.protocol + "//" + window.location.host
host = 'http://localhost:8080'

async function requestToken(username,password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }

    let data = await fetch('http://localhost:8080/api/tokens', requestOptions)
    data = await data.json()
    return data
}

async function putToken(idToken) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken })
    }

    let data = await fetch(host + '/api/tokens', requestOptions)
    data = await data.json()
    return data
}

export { requestToken, putToken }