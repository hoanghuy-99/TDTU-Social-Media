const host = env.NODE_ENV == 'production' ?  window.location.protocol + "//" + window.location.host : 'http://localhost:8080'
export default host