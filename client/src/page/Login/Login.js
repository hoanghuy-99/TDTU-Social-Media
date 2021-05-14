import { getToken } from '../../cookie'
import { login, loginGoogleAPI } from '../../redux/actions/user.actions'
const { useState } = React
const { useDispatch, useSelector } = ReactRedux
const { Redirect } = ReactRouterDOM
const { GoogleAPI, GoogleLogin } = window['react-google-oauth']

function Login(){
  console.log(window.location.pathname)
  const dispatch = useDispatch()
  
  const loggedIn = useSelector(state => state.user.loggedIn)
  
  //Google Login
  const loginStatus = (response) => console.log(response)
  const loginFailure = (error) => console.log(error)
  
  const loginSuccess = (response) => {
    const id_token = response.qc.id_token
    if(id_token){
      dispatch(loginGoogleAPI(id_token))
    }
  }
  
  //Admin Login
  const [form, setForm] = useState({
    username: '', 
    password: ''
  })
  const { username, password } = form

  function handleChange(event) {
    setForm({ 
      ...form,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(username && password) {
      dispatch(login(username, password))
    }
  }

  if(getToken()){
    return <Redirect to='/home'/>
  }

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={handleSubmit}>
            <h2 className="title">ĐĂNG NHẬP</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="username" placeholder="Tài Khoản" className="input-login" value={username} onChange={handleChange} required/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" name="password" placeholder="Mật Khẩu" className="input-login" value={password} onChange={handleChange} required/>
            </div>
            <input type="submit" value="Đăng Nhập" className="btn-login solid" />
            <p className="social-text">Hoặc đăng nhập với tài khoản Google</p>
            <GoogleAPI clientId="130563548657-fcf2g4k6a9p4e6o2qk0ggi2ut9ir6ql6.apps.googleusercontent.com"
                      hostedDomain="student.tdtu.edu.vn"
                      Scope="student.tdtu.edu.vn"
                      onUpdateSigninStatus={loginStatus}
                      onInitFailure={loginFailure}
            >
              <GoogleLogin onLoginSuccess={loginSuccess} text="Đăng nhập với Google"/>
            </GoogleAPI>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Trường Đại học Tôn Đức Thắng</h3>
            <p>Hệ Thông Thông Báo</p>
          </div>
          <img src="https://raw.githubusercontent.com/sefyudem/Sliding-Sign-In-Sign-Up-Form/955c6482aeeb2f0e77c1f3c66354da3bc4d7a72d/img/log.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login