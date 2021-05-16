import host from './host'

async function requestToken(username,password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }

    let data = await fetch(host+'/api/tokens', requestOptions)
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