const FacultyHome = () =>{
    return(
        <div>
            <div>
                <nav id="nav_breadcrumb" aria-label="breadcrumb">
                    <ol className="breadcrumb" id="ol_breadcrumb">
                      <li className="breadcrumb-item" >Trang chủ</li>
                      <li className="breadcrumb-item" >Quản lý thông báo</li>
                    </ol>
                  </nav>
            </div>
            <div>
                <form>
                <div className="row justify-content-center">
                    <div id="faculty_noti_home_div">
                        <div className="row justify-content-center">
                        <div className="col-lg-8" id="select_facutly_home_div">
                                <h2>Phòng/Khoa:</h2>
                                <select id="select_facutly_home" className="form-select" aria-label="Default select example">
                                    <option value="" selected>Chọn Phòng/Khoa</option>
                                    <option value="CTHSSV">Phòng CTHSSV</option>
                                    <option value="UniRoom">Phòng Đại học</option>
                                    <option value="AfterUniRoom">Phòng Sau đại học</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>
            <div className="last_component">
                <div className="row justify-content-center">
                    <div id="noti_list_div">
                        <div className="row justify-content-center">
                            <div>
                                <button className="btn btn-primary" id="btn_add_noti">Thêm thông báo</button>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title" id="noti_title"><strong>Tiêu đề</strong></h5>
                                    <div id="fix_delete_noti">
                                        <Link to="#"><i className="fas fa-wrench"></i></Link>
                                        <Link to="#" id="btn_delete_noti"><i className="fas fa-times"></i></Link>
                                    </div>
                                    <div className="clear"></div>
                                    <p className="card-text noti_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="#" className="btn btn-danger">Xem chi tiết thông báo</Link>
                                    <p id="faculty_time">Công nghệ thông tin | Ngày đăng: 02/04/2021</p>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}