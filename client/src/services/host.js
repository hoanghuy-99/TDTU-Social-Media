const host = env.NODE_ENV == 'production' ?  window.location.protocol + "//" + window.location.host : 'http://localhost:8080'
console.log('host',host)
export default host