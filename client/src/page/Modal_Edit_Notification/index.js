import { changeNotification, } from "../../redux/actions/notification.actions"

const { useDispatch, useSelector } = ReactRedux
const { useEffect,useState } = React
const Modal_Edit_Noti = (props)=>{
    const id = props
    const dispatch = useDispatch()
    const notifications = useSelector(state => state?.notification?.data)
    const [notiInfo,setNotiInfo] = useState()
    useEffect(()=>{
        notifications?.items?.map((value)=>{
            if(value.id == id.props.id){
                setNotiInfo(value)
            }
        })
    },[])
    function closeModal(){
        document.getElementById(id.props.edit).style.display='none'
    }
    const handleClick = ()=>{
        dispatch(changeNotification(id.props.id,notiInfo?.title,notiInfo?.content,notiInfo?.department?.id))
        closeModal()
    }
    const handleChangeTitle = (e)=>{
        const title = e.target.value
        setNotiInfo(p => ({
            ...p,
            title: title
        }))
    }
    const handleChangeContent = (e)=>{
        const content = e.target.value
        setNotiInfo(p => ({
            ...p,
            content: content
        }))
    }
    console.log("noti_",notiInfo);
    return(
        <div id={id.props.edit} className="w3-modal w3-animate-opacity">
                <div className="w3-modal-content">
                  <div className="w3-container w3-teal"> 
                    <center><h2>Chỉnh sửa bài viết </h2></center>
                </div>
                <div className="w3-container">
                    <p>Chỉnh sửa thông báo</p>
                    <div className="row" id="div_modal_noti">
                        <form>
                            <div className="form-group">
                                <label htmlFor="title"><strong>Tiêu đề:</strong></label>
                                <input value={notiInfo?.title} onChange={handleChangeTitle} type="text" className="form-control" id={`edit_title_noti`+id.props.id} 
                                placeholder="Nhập Tiêu đề"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="className"><strong>Nội dung:</strong></label>
                                <textarea value={notiInfo?.content} onChange={handleChangeContent} type="text" className="form-control" id={`edit_content_noti`+id.props.id} 
                                placeholder="Nhập nội dung"></textarea>
                            </div>
                        </form>
                        <div className="col-lg-6 div_btn_add_noti">
                            <button onClick={closeModal}  className="btn btn-dark btn_social">Hủy</button>
                        </div>
                        <div className="col-lg-6 div_btn_add_noti">
                            <button onClick={handleClick} className="btn btn-danger btn_social">Lưu</button>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Modal_Edit_Noti