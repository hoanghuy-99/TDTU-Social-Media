const Admin = () =>{
    return(
        <div>
            <div>
                <nav id="nav_breadcrumb" aria-label="breadcrumb">
                    <ol className="breadcrumb" id="ol_breadcrumb">
                      <li className="breadcrumb-item" >Admin</li>
                      <li className="breadcrumb-item" aria-current="page">Thêm Phòng/Ban</li>
                    </ol>
                  </nav>
            </div>
            <div className="row justify-content-center">
                <div id="registerFaculty">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1"><strong>Tài khoản:</strong></label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Nhập tài khoản"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1"><strong>Mật khẩu:</strong></label>
                                    <input type="password" className="form-control" id="password" placeholder="Nhập mật khẩu"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1"><strong>Xác nhận mật khẩu:</strong></label>
                                    <input type="password" className="form-control" id="re_password" placeholder="Nhập lại mật khẩu"/>
                                </div>
                                <div className="form-check">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <ul className="list_checkbox">
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="CTHSSV"/>
                                                    Phòng CTHSSV
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="UniRoom"/>
                                                    Phòng Đại học
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="AfterUniRoom"/>
                                                    Phòng Sau đại học
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="ComputerRoom"/>
                                                    Phòng Điện toán và máy tính
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="SurveyRoom"/>
                                                    Phòng khảo khí và kiểm định chất lượng
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="EnterpriseRoom"/>
                                                    Doanh nghiệp, cựu sinh viên
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <ul className="list_checkbox">
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="FinanceRoom"/>
                                                    Phòng tài chính
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="CLCRoom"/>
                                                    TDT Creative Language Center
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="ITRoom"/>
                                                Trung tâm tin học
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="SDTC"/>
                                                Đào tạo phát triển xã hội
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="ATEM"/>
                                                Khoa học quản lý, Ứng dụng công nghệ
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="Law"/>
                                                    Khoa Luật
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <ul className="list_checkbox">
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="EIF"/>
                                                Ngoại ngữ-Tin học-Bồi dưỡng
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="EB"/>
                                                Kinh tế và Kinh doanh
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="MTCN"/>
                                                Khoa Mỹ thuật công nghiệp
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="Electrical"/>
                                                    Khoa Điện-Điện tử
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="CNTT"/>
                                                    Khoa Công nghệ thông tin
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="QTKD"/>
                                                Khoa Quản trị kinh doanh
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <ul className="list_checkbox">
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="MT_BHLD"/>
                                                Môi trường và bảo hộ lao động
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="LDCD"/>
                                                Khoa Lao động công đoàn
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="TCNH"/>
                                                    Khoa Tài chính ngân hàng
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" id="QDQT"/>
                                                    Khoa Giáo dục quốc tế
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-danger" id="btn_registerFaculty">Tạo tài khoản</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}