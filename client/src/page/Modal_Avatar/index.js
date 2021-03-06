const { useState,useEffect } = React
const { useDispatch,useSelector } = ReactRedux
import { changeAvatarUser } from '../../redux/actions/user.actions'
import { requestImageById } from '../../services/user.services'
const Modal_Change_Avatar = ()=>{
    const dispatch = useDispatch()
    const avatar = useSelector(state => state?.user?.avatar)
    function closeModal(){
        document.getElementById('modal_change_avatar').style.display='none'
    }

    const handleClick = ()=>{
        const uploadAvatarFile = document.getElementById("avatar_file")
        uploadAvatarFile.click();
    }
    const [imgAvatar,setImgAvatar] = useState()
    const handleChangeAvatar = ()=>{
        dispatch(changeAvatarUser(imgAvatar))
        closeModal()
    }
    const handleChange = (event)=>{
      const uploadAvatarFile = document.getElementById("avatar_file")
      const avatar = document.getElementById("change_avatar_img")
        if(uploadAvatarFile.value){
            const img = event.target.files[0];
            const imgUrl = URL.createObjectURL(img);
            avatar.src =imgUrl
            setImgAvatar(img)
        }
    }
    return(
        <div id="modal_change_avatar" className="w3-modal w3-animate-opacity">
                <div className="w3-modal-content">
                  <div className="w3-container w3-teal"> 
                    <span onClick={closeModal}
                    className="w3-button w3-display-topright"><i className="fas fa-times" id="btn_close_modal"></i></span>
                    <h2>Thay đổi ảnh đại diện</h2>
                  </div>
                  <div className="w3-container">
                    <div className="row">
                        <div className="col-lg-12" id="change_avatar_div">
                                <div>
                                    <img src={avatar} id="change_avatar_img"/>
                                </div>
                                <div>
                                    <input onChange={handleChange} type="file" id="avatar_file" accept="image/png, image/jpeg"/>
                                    <button onClick={handleClick} id="btn_up_avatar" className="btn btn-danger"><i className="fas fa-images"></i>Chọn ảnh</button>
                                </div>
                        </div>
                        <div className="col-lg-12" id="confirm_avatar_div">
                            <button onClick={closeModal} className="btn btn-danger">Hủy</button>
                            <button onClick={handleChangeAvatar} className="btn btn-success" id="btn_confirm_avatar">Xác nhận</button>
                        </div>
                    </div>
                  </div>
                </div>
        </div>
    )
}
export default Modal_Change_Avatar