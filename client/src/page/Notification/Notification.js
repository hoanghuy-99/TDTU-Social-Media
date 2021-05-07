const { Link, Route, BrowserRouter, Switch } = ReactRouterDOM;
const Notification = () =>{
    return(
        <div>
            <div>
                <nav id="nav_breadcrumb" aria-label="breadcrumb">
                    <ol className="breadcrumb" id="ol_breadcrumb">
                      <li className="breadcrumb-item" >Trang chủ</li>
                      <li className="breadcrumb-item" >Thông báo</li>
                    </ol>
                  </nav>
            </div>
            <div>
                <form>
                <div className="row justify-content-center">
                    <div id="noti_search_div">
                    <div className="row justify-content-center">
                       <div className="col-lg-6">
                           <input type="text" className="form-control" placeholder="Tìm kiếm chủ đề"/>
                       </div>
                       <div className="col-lg-6">
                            <select id="select_facutly" className="form-select" aria-label="Default select example">
                                <option value="" selected>Chọn Phòng/Khoa</option>
                                <option value="CTHSSV">Phòng CTHSSV</option>
                                <option value="UniRoom">Phòng Đại học</option>
                                <option value="AfterUniRoom">Phòng Sau đại học</option>
                                <option value="ComputerRoom">Phòng Điện toán và máy tính</option>
                                <option value="SurveyRoom">Phòng khảo khí và kiểm định chất lượng</option>
                                <option value="EnterpriseRoom"> Doanh nghiệp, cựu sinh viên</option>
                                <option value="FinanceRoom">Phòng tài chính</option>
                                <option value="CLCRoom">TDT Creative Language Center</option>
                                <option value="SDTC">Đào tạo phát triển xã hội</option>
                                <option value="ATEM">Khoa học quản lý, Ứng dụng công nghệ</option>
                                <option value="Law">Khoa Luật</option>
                                <option value="EIF">Ngoại ngữ-Tin học-Bồi dưỡng</option>
                                <option value="EB"> Kinh tế và Kinh doanh</option>
                                <option value="MTCN"> Khoa Mỹ thuật công nghiệp</option>
                                <option value="Electrical">Khoa Điện-Điện tử</option>
                                <option value="CNTT">Khoa Công nghệ thông tin</option>
                                <option value="QTKD">Khoa Quản trị kinh doanh</option>
                                <option value="MT_BHLD">Môi trường và bảo hộ lao động</option>
                                <option value="MTCN">Khoa Lao động công đoàn</option>
                                <option value="TCNH">Khoa Tài chính ngân hàng</option>
                                <option value="QDQT">Khoa Giáo dục quốc tế</option>
                                <option value="ITRoom">Trung tâm tin học</option>
                            </select>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6">
                                    <label htmlFor="begin_date"><strong>Từ ngày:</strong></label>
                                    <input type="date" className="form-control"/>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="end_date"><strong>Đến ngày:</strong></label>
                                    <input type="date" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row space_btn">
                                <div className="col-lg-4">
                                    <button type="button" className="btn btn-primary btn-form-control">Làm mới</button>
                                </div>
                                <div className="col-lg-4">
                                    <button type="button" className="btn btn-success btn-form-control">Tìm kiếm</button>
                                </div>
                            </div>
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
                            <div className="card">
                                <div className="card-body">
                                  <h5 className="card-title"><strong>Tiêu đề</strong></h5>
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
export default Notification