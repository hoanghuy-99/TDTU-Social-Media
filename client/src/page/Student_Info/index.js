import { getId } from "../../cookie"
import { changeInfoStudent, fetchUserById } from "../../redux/actions/user.actions"

const { Link } = ReactRouterDOM
const { useState,useEffect } = React
const { useDispatch,useSelector } = ReactRedux

const Student_Info = ({children}) =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUserById())
    },[])
    const users = useSelector(state => state?.user?.data)
    const [userInfo,setUserInfo]= useState(users)
    console.log("users",users);
    function openModal(){
        document.getElementById('modal_change_avatar').style.display='block'
    }
    const [boo,setBoo] = useState(true)
    const OpenChangeInfo = ()=>{
        setBoo(false)
    }
    const ChangeInfo = () =>{
        setBoo(true)
        console.log(userInfo?.name,userInfo?.class,userInfo?.faculty);
        dispatch(changeInfoStudent(userInfo?.name,userInfo?.class,userInfo?.faculty))
    }
    const changeName = (e)=>{
        const name = e.target.value
        setUserInfo(p =>({
            ...p,
            name: name
        }))
    }
    const changeClass = (e)=>{
        const classRoom = e.target.value
        setUserInfo(p =>({
            ...p,
            class: classRoom
        }))
    }
    const changeFaculty = (e)=>{
        const faculty = e.target.value
        setUserInfo(p =>({
            ...p,
            faculty: faculty
        }))
    }
    return(
        <div>
            <div>
                <nav id="nav_breadcrumb" aria-label="breadcrumb">
                    <ol className="breadcrumb" id="ol_breadcrumb">
                      <li className="breadcrumb-item" >Trang chủ</li>
                      <li className="breadcrumb-item" >Thông tin tài khoản</li>
                    </ol>
                  </nav>
            </div>
            <div className="last_component">
                <form>
                <div className="row justify-content-center">
                    <div id="student_info_div">
                        <div className="row justify-content-center">
                            <div className="col-lg-6" id="student_info_avatar_div">
                                <img src="/img/avatar.jpg" id="student_info_avatar" alt=""/>
                                <br/>
                                <Link to="#" onClick={openModal} id="btn_student_info_avatar">Thay đổi ảnh đại diện</Link>
                            </div>
                            <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="name"><strong>Tên:</strong></label>
                                        <input type="text" onChange={changeName} className="form-control" id="student_name" value={userInfo?.name} placeholder="Nhập họ tên" disabled={boo}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="className"><strong>Lớp:</strong></label>
                                        <input type="text" onChange={changeClass} className="form-control" id="student_className" value={userInfo?.class} placeholder="Nhập lớp" disabled={boo}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="faculty"><strong>Khoa:</strong></label>
                                        <input type="text" onChange={changeFaculty} className="form-control" id="student_faculty" value={userInfo?.faculty} placeholder="Nhập khoa" disabled={boo}/>
                                    </div>
                                    <div className="row space_btn">
                                        <div className="col-lg-4">
                                            <button type="button" onClick={OpenChangeInfo} className="btn btn-primary btn-form-control">Chỉnh sửa</button>
                                        </div>
                                        <div className="col-lg-4">
                                            <button type="button"onClick={ChangeInfo} className="btn btn-success btn-form-control" disabled={boo}>Lưu</button>
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
export default Student_Info