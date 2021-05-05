function Login(){
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h2 className="title">ĐĂNG NHẬP</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Tài Khoản" className="input-login"/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Mật Khẩu" className="input-login"/>
            </div>
            <input type="submit" value="Đăng Nhập" className="btn-login solid" />
            <p className="social-text">Hoặc đăng nhập với tài khoản Google</p>
            <div className="google-login">
              <button className="google-login-button"><i className="fas fa-home"></i>Đăng Nhập với Google</button>
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