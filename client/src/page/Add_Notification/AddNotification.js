const {useDispatch,useSelector} = ReactRedux
const { useParams } = ReactRouterDOM
const { useState,useEffect } = React
import {newNotification} from '../../redux/actions/notification.actions'

const AddNotification = () =>{
    const dispatch = useDispatch()
    const {id} = useParams()
    const addNotification = () =>{
        const title = document.getElementById('noti_add_title').value
        const content = document.getElementById('noti_add_content').value
        const faculty = document.getElementById('select_facutly_home').value
        console.log(title,content,faculty);
        dispatch(newNotification(title,content,faculty))
    }
    const facultys = useSelector(state => state?.faculty?.data)
    const [facultyInfo,setFacultyInfo] = useState()
    useEffect(()=>{
        facultys.departments?.map((value)=>{
            if(id == value.id){
                setFacultyInfo(value)
            }
        })
    },)
    console.log("fac",facultyInfo);
    return(
        <div>
            <div>
                <nav id="nav_breadcrumb" aria-label="breadcrumb">
                    <ol className="breadcrumb" id="ol_breadcrumb">
                      <li className="breadcrumb-item" >Trang chủ</li>
                      <li className="breadcrumb-item" >Thêm thông báo</li>
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
                                <select id="select_facutly_home" className="form-select" disabled>
                                    <option value={facultyInfo?.id}>{facultyInfo?.name}</option>
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
                            <form>
                                <div className="form-group">
                                    <label htmlFor="title"><strong>Tiêu đề:</strong></label>
                                    <input type="text" className="form-control" id="noti_add_title" placeholder="Nhập Tiêu đề"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="className"><strong>Nội dung:</strong></label>
                                    <textarea type="text" className="form-control" id="noti_add_content" placeholder="Nhập nội dung"></textarea>
                                </div>
                                <div className="row" id="cancel_post_noti_div">
                                    <div className="col-lg-2">
                                        <button type="button" className="btn btn-danger btn-form-control">Hủy</button>
                                    </div>
                                    <div className="col-lg-2">
                                        <button type="button" onClick={addNotification} className="btn btn-success btn-form-control" id="post_noti_btn">Đăng</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddNotification