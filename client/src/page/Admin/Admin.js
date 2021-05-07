import setAlert from '../../redux/actions/alert.actions'
import { register } from '../../redux/actions/user.actions'
//const {useDispatch} = ReactRedux

const Admin = () =>{
    //const dispatch = useDispatch()
    const handleClick = (event) =>{
        event.preventDefault();
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        const rePassword = document.getElementById('re_password').value
        const checkbox = document.getElementsByName('faculty')
        var department = []
        for(var i=0;i<checkbox.length;i++){
            if(checkbox[i].checked === true){
                department.push({id:checkbox[i].value})
            }
        }
        if(password !== rePassword){
            setAlert('Mật khẩu không trùng nhau', 'danger')
        } else {
            dispatch(register(username, username, password, email, name, department))
        }
    
    }
    
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
                                    <input type="text" className="form-control" id="username"  placeholder="Nhập tài khoản"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1"><strong>Mật khẩu:</strong></label>
                                    <input type="password" className="form-control" id="password" placeholder="Nhập mật khẩu"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1"><strong>Xác nhận mật khẩu:</strong></label>
                                    <input type="password" className="form-control" id="re_password" placeholder="Nhập lại mật khẩu"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1"><strong>Email:</strong></label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Nhập email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1"><strong>Họ&Tên:</strong></label>
                                    <input type="text" className="form-control" id="name" placeholder="Nhập Họ và Tên"/>
                                </div>
                                <div className="form-check">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <label htmlFor="exampleInputPassword1"><strong>Chọn phòng ban quản lý:</strong></label>
                                            <ul className="list_checkbox" id="list_checkbox">
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Phòng CTHSSV" className="form-check-input" id="CTHSSV"/>
                                                    Phòng CTHSSV
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Phòng Đại học" className="form-check-input" id="UniRoom"/>
                                                    Phòng Đại học
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Phòng Sau đại học" className="form-check-input" id="AfterUniRoom"/>
                                                    Phòng Sau đại học
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Phòng Điện toán và máy tính" className="form-check-input" id="ComputerRoom"/>
                                                    Phòng Điện toán và máy tính
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Phòng khảo khí và kiểm định chất lượng" className="form-check-input" id="SurveyRoom"/>
                                                    Phòng khảo khí và kiểm định chất lượng
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Doanh nghiệp, cựu sinh viên" className="form-check-input" id="EnterpriseRoom"/>
                                                    Doanh nghiệp, cựu sinh viên
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Phòng tài chính" className="form-check-input" id="FinanceRoom"/>
                                                    Phòng tài chính
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="TDT Creative Language Center" className="form-check-input" id="CLCRoom"/>
                                                    TDT Creative Language Center
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Trung tâm tin học" className="form-check-input" id="ITRoom"/>
                                                    Trung tâm tin học
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Đào tạo phát triển xã hội" className="form-check-input" id="SDTC"/>
                                                    Đào tạo phát triển xã hội
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Khoa học quản lý, Ứng dụng công nghệ" className="form-check-input" id="ATEM"/>
                                                    Khoa học quản lý, Ứng dụng công nghệ
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value=" Khoa Luật" className="form-check-input" id="Law"/>
                                                    Khoa Luật
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Ngoại ngữ-Tin học-Bồi dưỡng" className="form-check-input" id="EIF"/>
                                                    Ngoại ngữ-Tin học-Bồi dưỡng
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Kinh tế và Kinh doanh" className="form-check-input" id="EB"/>
                                                    Kinh tế và Kinh doanh
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Khoa Mỹ thuật công nghiệp" className="form-check-input" id="MTCN"/>
                                                    Khoa Mỹ thuật công nghiệp
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Khoa Điện-Điện tử" className="form-check-input" id="Electrical"/>
                                                    Khoa Điện-Điện tử
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Khoa Công nghệ thông tin" className="form-check-input" id="CNTT"/>
                                                    Khoa Công nghệ thông tin
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Khoa Quản trị kinh doanh" className="form-check-input" id="QTKD"/>
                                                    Khoa Quản trị kinh doanh
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Môi trường và bảo hộ lao động" className="form-check-input" id="MT_BHLD"/>
                                                    Môi trường và bảo hộ lao động
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value=" Khoa Lao động công đoàn" className="form-check-input" id="LDCD"/>
                                                    Khoa Lao động công đoàn
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Khoa Tài chính ngân hàng" className="form-check-input" id="TCNH"/>
                                                    Khoa Tài chính ngân hàng
                                                </li>
                                                <li>
                                                    <input type="checkbox" name="faculty" value="Khoa Giáo dục quốc tế" className="form-check-input" id="QDQT"/>
                                                    Khoa Giáo dục quốc tế
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" onClick={handleClick} className="btn btn-danger" id="btn_registerFaculty">Tạo tài khoản</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin