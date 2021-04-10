const Modal_Change_Avatar = ()=>{
    return(
        <div id="modal_change_avatar" className="w3-modal w3-animate-opacity">
                <div className="w3-modal-content">
                  <div className="w3-container w3-teal"> 
                    <span onClick={closeModal}
                    className="w3-button w3-display-topright"><i className="fas fa-times" id="btn_close_modal"></i></span>
                    <h2>Thay đổi ảnh đại diện</h2>
                  </div>
                  <div className="w3-container">
                    <div className="row">
                        <div className="col-lg-12" id="change_avatar_div">
                                <div>
                                    <img src="/img/avatar.jpg" id="change_avatar_img"/>
                                </div>
                                <div>
                                    <input type="file" id="avatar_file"/>
                                    <button id="btn_up_avatar" className="btn btn-danger"><i className="fas fa-images"></i>Chọn ảnh</button>
                                </div>
                        </div>
                        <div className="col-lg-12" id="confirm_avatar_div">
                            <button className="btn btn-danger">Hủy</button>
                            <button className="btn btn-success" id="btn_confirm_avatar">Xác nhận</button>
                        </div>
                    </div>
                  </div>
                </div>
        </div>
    )
}