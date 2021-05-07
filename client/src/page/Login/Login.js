const {useState} = React
const {useDispatch, useSelector} = ReactRedux
const { Redirect } = ReactRouterDOM
import { login } from '../../redux/actions/user.actions'

function Login(){
  //const dispatch = useDispatch()
  //const checkLogin = useSelector(state => state.user?.loggedIn)
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

  /*if(checkLogin){
    return <Redirect to='/home'/>
  }*/

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
            <div className="google-login">
              <button className="google-login-button"><i className="fab fa-google"></i>Đăng Nhập với Google</button>
            </div>
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