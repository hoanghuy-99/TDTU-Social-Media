function Login(){
  return (
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form class="sign-in-form">
            <h2 class="title">ĐĂNG NHẬP</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Tài Khoản" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Mật Khẩu" />
            </div>
            <input type="submit" value="Đăng Nhập" class="btn solid" />
            <p class="social-text">Hoặc đăng nhập với tài khoản Google</p>
            <div class="google-login">
              <button class="google-login-button"><i class="fas fa-google"></i>Đăng Nhập với Google</button>
            </div>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>Trường Đại học Tôn Đức Thắng</h3>
            <p>Hệ Thông Thông Báo</p>
          </div>
          <img src="https://raw.githubusercontent.com/sefyudem/Sliding-Sign-In-Sign-Up-Form/955c6482aeeb2f0e77c1f3c66354da3bc4d7a72d/img/log.svg" class="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login