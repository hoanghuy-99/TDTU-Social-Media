const Cookie = Cookies
const jwtDecode = jwt_decode

function setToken(token){
    let {exp} = jwtDecode(token)
    const expires = exp*1000
    console.log(new Date(expires))
    Cookie.set('token', token, {expires: new Date(expires)})
}

function getToken(){
    return Cookie.get('token') || undefined
}

function removeToken(){
    Cookie.remove('token')
}
function getRole(){
    const token = getToken()
    return jwt_decode(token).role
}
export {
    setToken,
    getToken,
    removeToken,
    getRole
}