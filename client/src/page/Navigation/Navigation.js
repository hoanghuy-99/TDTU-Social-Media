const { Link } = ReactRouterDOM
const { useState,useEffect } = React 
import { getRole } from '../../cookie'

const Navigation = ({children}) =>{
    var hiddenStudent = true
    var hiddenTeacher = true
    var hiddenAdmin = true
    console.log(getRole());
    
    if(getRole() == "admin"){
        hiddenAdmin = false;
    }
    else if(getRole() == "teacher"){
        hiddenTeacher = false;   
    }
    else{
        hiddenStudent = false
    }
    return(
        <div className="row">
                <div className="col-12 col-lg-2" id="navigation_div">
                    <div id="navigation_title">
                        Thanh điều hướng
                    </div>
                    <div className="list-group">
                        <Link to="/home" className="list-group-item list-group-item-action"><i className="fas fa-home"></i>Trang chủ</Link>
                        <Link to="/notification" className="list-group-item list-group-item-action"><i className="fas fa-bell"></i>Thông báo</Link>
                        <Link to="/facultyInfo" hidden={hiddenTeacher} className="list-group-item list-group-item-action"><i className="fas fa-key"></i>Đổi mật khẩu</Link>
                        <Link to="/student" hidden={hiddenStudent} className="list-group-item list-group-item-action"><i className="fas fa-user"></i>Đổi thông tin</Link>
                        <Link to="/faculty" hidden={hiddenTeacher} className="list-group-item list-group-item-action"><i className="fas fa-tasks"></i>Quản lý thông báo</Link>
                        <Link to="/admin" hidden={hiddenAdmin} className="list-group-item list-group-item-action"><i className="fas fa-user-plus"></i>Tạo tài khoản Phòng/Ban</Link>
                    </div>
                </div>
                <div className=" col-12 col-lg-10" id="body_div">
                    {children}
                </div>
            </div>
    )
}
export default Navigation