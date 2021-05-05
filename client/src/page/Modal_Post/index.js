const Modal_Post = ()=>{
    function closeModal(){
        document.getElementById('modal_change_avatar').style.display='none'
    }
    function activeImage() {
        const defautBtnPic = document.querySelector("#pic-file")
        defautBtnPic.click()
    }
    function activeVideo() {
        const defautBtnVid = document.querySelector("#video-file")
        defautBtnVid.click()
    }
    const handleChange = ()=>{
        const uploadAvatarFile = document.getElementById("pic-file")
        const avatar = document.getElementById("img_modal_post")
          if(uploadAvatarFile.value){
              const img = event.target.files[0];
              const imgUrl = URL.createObjectURL(img);
              avatar.src =imgUrl
          }
      }
    return(
        <div id="modal_change_avatar" className="w3-modal w3-animate-opacity">
                <div className="w3-modal-content">
                  <div className="w3-container w3-teal"> 
                    <span onClick={closeModal}
                    className="w3-button w3-display-topright"><i className="fas fa-times" id="btn_close_modal"></i></span>
                    <h2>Tạo bài đăng</h2>
                </div>
                <div className="w3-container">
                    <div className="row">
                        <div className="col-lg-1">
                            <img src="/img/avatar.jpg" id="avatar_post"/>
                        </div>
                        <div className="col-lg-11">
                            <strong>Tuấn Kiệt</strong>
                        </div>
                    </div>
                    <div>
                        <textarea placeholder="Bạn đang nghĩ gì?" id="value_post"></textarea>
                        <img src="" id="img_modal_post" hidden/>
                        <video hidden>
                            <source src="" id="vid_modal_post"></source>
                        </video>
                    </div>
                    <div className="row" id="div_modal_post_social">
                        <div className="col-lg-6">
                            <input onChange={handleChange} id="pic-file" type="file" hidden/>
                            <button id="custom_btn_pic" onClick={activeImage} className="btn btn-success btn_social"><i className="far fa-images"></i>Ảnh</button>
                        </div>
                        <div className="col-lg-6">
                            <input id="video-file" type="file" hidden/>
                            <button className="btn btn-danger btn_social    " onClick={activeVideo}><i className="fas fa-video"></i>Video</button>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-12">
                        <button id="btn_modal_post" className="btn btn-primary">Đăng</button>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Modal_Post