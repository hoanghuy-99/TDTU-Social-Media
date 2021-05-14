import { newNotification } from "../../redux/actions/notification.actions"
const { useState,useEffect } = React
const { useDispatch, useSelector } = ReactRedux
const Modal_Add_Noti = (props)=>{
    const id = props
    const dispatch = useDispatch()
    function closeModal(){
        document.getElementById(id.props.id).style.display='none'
    }
    const facultys = useSelector(state => state?.faculty?.data)
    console.log("fac",facultys);
    const [facultyInfo,setFacultyInfo] = useState()
    useEffect(()=>{
        facultys?.departments?.map((value)=>{
            if(id.props.id == value.id){
                setFacultyInfo(value)
            }
        })
    },)
    const addNotification = () =>{
        const title = document.getElementById('noti_add_title').value
        const content = document.getElementById('noti_add_content').value
        console.log(title,content,id.props.id);
        dispatch(newNotification(title,content,id.props.id))
        closeModal()
    }
    return(
        <div id={id.props.id} className="w3-modal w3-animate-opacity">
                <div className="w3-modal-content">
                  <div className="w3-container w3-teal"> 
                    <center><h2>Thêm thông báo</h2></center>
                </div>
                <div className="w3-container">
                    <h3>Thêm thông báo vào {facultyInfo?.name}</h3>
                    <div className="row" id="div_modal_noti">
                        <form>
                            <div className="form-group">
                                <label htmlFor="title"><strong>Tiêu đề:</strong></label>
                                <input type="text" className="form-control" id="noti_add_title" placeholder="Nhập Tiêu đề"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="className"><strong>Nội dung:</strong></label>
                                <textarea type="text" className="form-control" id="noti_add_content" placeholder="Nhập nội dung"></textarea>
                            </div>
                        </form>
                        <div className="col-lg-6 div_btn_add_noti">
                            <button onClick={closeModal}  className="btn btn-dark btn_social">Hủy</button>
                        </div>
                        <div className="col-lg-6 div_btn_add_noti">
                            <button onClick={addNotification} className="btn btn-danger btn_social">Đăng</button>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Modal_Add_Noti