const { Link } = ReactRouterDOM
const { useDispatch, useSelector } = ReactRedux
const { useEffect,useState } = React
import { getId } from '../../cookie';
import { fetchFacultyById } from '../../redux/actions/faculty.actions';
import { fetchNotificationByIdFacultyAndTeacher, fetchNotificationByIdTeacher } from '../../redux/actions/notification.actions';
import Modal_Add_Noti from '../Modal_Add_Notification';
import Modal_Delete from '../Modal_Delete/index'
import Modal_Edit_Noti from '../Modal_Edit_Notification';
const FacultyHome = () =>{
    const dispatch = useDispatch()
    const openModal= (id)=>(e)=>{
        document.getElementById(id).style.display='block'
    }
    const openModalAddNoti= (id)=>(e)=>{
        document.getElementById(id).style.display='block'
    }
    const openModalEditNoti= (id)=>(e)=>{
        document.getElementById(id).style.display='block'
    }
    const id_teacher = getId()
    useEffect(()=>{
        dispatch(fetchNotificationByIdTeacher(id_teacher))
        dispatch(fetchFacultyById(id_teacher))
    },[])
    const handleGetFaculty = () =>{
        const faculty = document.getElementById("select_facutly_home").value
        setDisabledAddNoti("")
        if(faculty == undefined || faculty == "allFaculty"){
            setDisabledAddNoti("disabledCursor")
            dispatch(fetchNotificationByIdTeacher(id_teacher))
            return 
        }
        setGetFaculty(faculty)
        dispatch(fetchNotificationByIdFacultyAndTeacher(id_teacher,faculty))
    }
    const facultys = useSelector(state => state?.faculty?.data)
    const notifications = useSelector(state => state?.notification?.data)
    const formatDate = (new_date) =>{
        const create_data = new Date(new_date).getTime()
        const date = new Date(create_data)
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 101).toString().substring(1);
        var day = (date.getDate() + 100).toString().substring(1);
        return month + '/' + day + '/' + year;
    }
    notifications?.items?.sort((a,b)=>{
        const timeA = new Date(a.createdAt).getTime()
        const timeB = new Date(b.createdAt).getTime()
        return timeB - timeA
    })
    const [getFaculty,setGetFaculty] = useState()
    const [disabledAddNoti,setDisabledAddNoti] = useState("disabledCursor")
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
                                <select onChange={handleGetFaculty} id="select_facutly_home" className="form-select" aria-label="Default select example">
                                    <option value="allFaculty">Tất cả Phòng/Ban</option>
                                    {facultys?.departments?.map((value)=>{
                                        return(
                                            <option value={value.id}>{value.name}</option>
                                        )
                                    })}
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
                                <Link onClick={openModalAddNoti(getFaculty)} className={`btn btn-primary `+disabledAddNoti} id="btn_add_noti" 
                                >Thêm thông báo</Link>
                                <Modal_Add_Noti props={{id:getFaculty}}></Modal_Add_Noti>
                            </div>
                            {notifications?.items?.map((value)=>{
                                return(
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title" id="noti_title"><strong>{value.title}</strong></h5>
                                            <div id="fix_delete_noti">
                                                <Link onClick={openModalEditNoti("edit_noti"+value.id)}><i className="fas fa-wrench"></i></Link>
                                                <Link  id="btn_delete_noti" onClick={openModal("delete_noti"+value.id)}><i className="fas fa-times"></i></Link>
                                            </div>
                                            <div className="clear"></div>
                                            <p className="card-text noti_text">{value.content}</p>
                                            <Link to={`/notification/`+value.id} className="btn btn-danger">Xem chi tiết thông báo</Link>
                                            <p id="faculty_time">{value.department.name} | Ngày đăng:{formatDate(value.createdAt)} </p>
                                            <div className="clear"></div>
                                        </div>
                                        <Modal_Delete props={{delete:"delete_noti"+value.id,id:value.id}}/>
                                        <Modal_Edit_Noti props={{edit:"edit_noti"+value.id,id:value.id}}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FacultyHome