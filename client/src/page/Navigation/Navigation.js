const { Link, Route, BrowserRouter, Switch } = ReactRouterDOM;

const Navigation = ({children}) =>{
    return(
        <div className="row">
                <div className="col-12 col-lg-2" id="navigation_div">
                    <div id="navigation_title">
                        Navigation
                    </div>
                    <div className="list-group">
                        <Link to="#" className="list-group-item list-group-item-action"><i className="fas fa-home"></i>Trang chủ</Link>
                        <Link to="#" className="list-group-item list-group-item-action"><i className="fas fa-bell"></i>Thông báo</Link>
                        <Link to="#" className="list-group-item list-group-item-action"><i className="fas fa-key"></i>Đổi mật khẩu</Link>
                        <Link to="#" className="list-group-item list-group-item-action"><i className="fas fa-user"></i>Đổi thông tin</Link>
                        <Link to="#" className="list-group-item list-group-item-action"><i className="fas fa-tasks"></i>Quản lý thông báo</Link>
                        <Link to="#" className="list-group-item list-group-item-action"><i className="fas fa-user-plus"></i>Tạo tài khoản Phòng/Ban</Link>
                    </div>
                </div>
                <div className=" col-12 col-lg-10" id="body_div">
                    {children}
                </div>
            </div>
    )
}
export default Navigation