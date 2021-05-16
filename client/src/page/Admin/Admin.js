
import { register } from '../../redux/actions/user.actions'
import { fetchDepartment } from '../../redux/actions/department.actions'
import userConstants from '../../redux/constants/user.constants'
const { useDispatch, useSelector } = ReactRedux
const { useEffect,useState } = React

const Admin = () =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchDepartment())
    },[])
    const departments = useSelector(state => state?.department?.data)
    const [message,setMessage]= useState()
    const [hiddenDanger,setHiddenDanger] = useState(true)
    const [hiddenSuccess,setHiddenSuccess] = useState(true)
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
        if(!username){
            setMessage("Không được để trống tài khoản")
            setHiddenDanger(false)
        }
        else if(!password){
            setMessage("Không được để trống  mật khẩu")
            setHiddenDanger(false)
        }
        else if(!rePassword){
            setMessage("Không được để trống xác nhận mật khẩu")
            setHiddenDanger(false)
        }
        else if(!email){
            setMessage("Không được để trống email")
            setHiddenDanger(false)
        }
        else if(!name){
            setMessage("Không được để trống tên")
            setHiddenDanger(false)
        }
        else if(department.length == 0){
            setMessage("Phải thêm phòng ban quản lý")
            setHiddenDanger(false)
        }
        else if(username && (password === rePassword) && email && name && department.length !=0){
            console.log(name,email,username,department)
            dispatch(register(username, password, email, name, department))
            document.getElementById('name').value = ""
            document.getElementById('email').value=""
            document.getElementById('username').value=""
            document.getElementById('password').value=""
            document.getElementById('re_password').value=""
            setMessage("Thêm tài khoản thành công")
            setHiddenSuccess(false)
            setHiddenDanger(true)
        } else if(password !== rePassword) {
            setMessage("2 mật khẩu không giống nhau")
            setHiddenDanger(false)
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
                                    <input type="text" required className="form-control" id="username"  placeholder="Nhập tài khoản"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1"><strong>Mật khẩu:</strong></label>
                                    <input type="password"  required className="form-control" id="password" placeholder="Nhập mật khẩu"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1"><strong>Xác nhận mật khẩu:</strong></label>
                                    <input type="password" required className="form-control" id="re_password" placeholder="Nhập lại mật khẩu"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1"><strong>Email:</strong></label>
                                    <input type="email" required className="form-control" id="email" aria-describedby="emailHelp" placeholder="Nhập email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1"><strong>Họ&Tên:</strong></label>
                                    <input type="text" required className="form-control" id="name" placeholder="Nhập Họ và Tên"/>
                                </div>
                                <div className="form-check">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <label htmlFor="exampleInputPassword1"><strong>Chọn phòng ban quản lý:</strong></label>
                                            <ul className="list_checkbox" id="list_checkbox">
                                                {departments?.map((value)=>{
                                                    return(
                                                        <li>
                                                            <input type="checkbox" name="faculty" value={value.id} className="form-check-input" id={value.id}/>
                                                            {value.name}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="alert alert-danger" hidden={hiddenDanger}>{message}</div>
                                <div className="alert alert-success" hidden={hiddenSuccess}>{message}</div>
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