const { Link } = ReactRouterDOM

const FacultyInfo = ({children}) =>{
    function openModal(){
        document.getElementById('modal_change_avatar').style.display='block'
    }
    const ChangePassword = () =>{
        const old_password = document.getElementById('old_password').value
        const new_password = document.getElementById('new_password').value
        const re_password = document.getElementById('re_new_password').value
        if(new_password == re_password){
            console.log("haha");
        }
        console.log(old_password,new_password,re_password);
    }
    return(
        <div>
           <div>
                <nav id="nav_breadcrumb" aria-label="breadcrumb">
                    <ol className="breadcrumb" id="ol_breadcrumb">
                      <li className="breadcrumb-item" >Trang chủ</li>
                      <li className="breadcrumb-item" >Đổi mật khẩu</li>
                    </ol>
                  </nav>
            </div>
            <div>
                <form>
                <div className="row justify-content-center">
                    <div id="student_info_div">
                        <div className="row justify-content-center">
                            <h3>
                                <strong>Ảnh đại diện:</strong>
                            </h3>
                            <div className="col-lg-12" id="student_info_avatar_div">
                                <img src="/img/avatar.jpg" id="student_info_avatar" alt=""/>
                                <br/>
                                <Link to="#" onClick={openModal} id="btn_student_info_avatar">Thay đổi ảnh đại diện</Link>
                            </div>
                            <h3>
                                <strong>Đổi mật khẩu:</strong>
                            </h3>
                            <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="new_password"><strong>Mật khẩu cũ:</strong></label>
                                        <input type="password" className="form-control" id="old_password" placeholder="Nhập mật khẩu cũ"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="new_password"><strong>Mật khẩu mới:</strong></label>
                                        <input type="password" className="form-control" id="new_password" placeholder="Nhập mật khẩu mới"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="re_new_password"><strong>Nhập lại mật khẩu mới:</strong></label>
                                        <input type="password" className="form-control" id="re_new_password" placeholder="Nhập lại mật khẩu"/>
                                    </div>
                                    <div className="row space_btn">
                                        <div className="col-lg-4">
                                            <label htmlFor=""></label>
                                            <button type="button" onClick={ChangePassword} className="btn btn-success btn-form-control">Xác nhận</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>
            {children}
        </div>
    )
}
export default FacultyInfo