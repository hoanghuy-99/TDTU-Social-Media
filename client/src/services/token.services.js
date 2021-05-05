var host = window.location.protocol + "//" + window.location.host
async function requestToken(username,password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }

    let data = await fetch(host + '/api/tokens', requestOptions)
    data = await data.json()
    return data
}

async function putToken(tokenId) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tokenId })
    }

    let data = await fetch(host + '/api/tokens', requestOptions)
    data = await data.json()
    return data
}