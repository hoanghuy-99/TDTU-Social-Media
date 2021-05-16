const { useDispatch,useSelector } = ReactRedux
const { useState,useEffect } = React
import { getRole } from '../../cookie'
import { newPost } from '../../redux/actions/post.actions'
import { requestImageById } from '../../services/user.services'
const Modal_Post = ()=>{
    const dispatch = useDispatch()
    const avatar = useSelector(state => state?.user?.avatar)
    function closeModal(){
        document.getElementById('modal_change_avatar').style.display='none'
    }
    function activeImage() {
        const defautBtnPic = document.querySelector("#pic-post-file")
        defautBtnPic.click()
    }
    const users = useSelector(state => state?.user?.data)
    const [imagePost,setImagePost] = useState()
    const handleChange = (event)=>{
        const uploadAvatarFile = document.getElementById("pic-post-file")
        const avatar = document.getElementById("img_modal_post_social")
          if(uploadAvatarFile.value){
            const img = event.target.files[0];
            const imgUrl = URL.createObjectURL(img);
            avatar.src =imgUrl
            setImagePost(img)
            setHiddenImg(false)
            setDisableVid(true)
          }
    }
    const [urlYTB,setUrlYTB] = useState()
    const [hiddenVid,setHiddenVid] = useState(true)
    const [hiddenImg,setHiddenImg] = useState(true)
    const [disableVid,setDisableVid] = useState(false)
    const [disableImg,setDisableImg] = useState(false)
    const handleChangeVideo = (e) =>{
        const url_ytb = e.target.value
        if(!url_ytb){
            setUrlYTB(undefined)
            setHiddenVid(true)
            setDisableImg(false)
        }
        else{
            const test ="https://www.youtube.com/embed/"+url_ytb.slice(32)+"?controls=1"
            setUrlYTB(test)
            setHiddenVid(false)
            setDisableImg(true)
        }
        
    }
    const addPost = () => {
        const content = document.getElementById('value_post').value
        const link_ytb = document.getElementById('youtube_embed').getAttribute('src')
        dispatch(newPost(content,link_ytb,imagePost))
        console.log(content,urlYTB,imagePost);
        closeModal()
    }
    const handleCancelImg = () =>{
        document.getElementById("img_modal_post_social").setAttribute('src','')
        setHiddenImg(true)
        setImagePost(undefined)
        setDisableVid(false)
    }
    const getAvatarPostAndCmt = ()=>{
        if(getRole() == "student"){
            return avatar
        }
        else{
            return '/img/avatar_mac_dinh.jpg'
        }
    }
    console.log("imageUrl: ",imagePost);
    return(
        <div id="modal_change_avatar" className="w3-modal w3-animate-opacity modal_post">
                <div className="w3-modal-content modal_post_content">
                  <div className="w3-container w3-teal"> 
                    <span onClick={closeModal}
                    className="w3-button w3-display-topright"><i className="fas fa-times" id="btn_close_modal"></i></span>
                    <center><h2>Tạo bài đăng</h2></center>
                </div>
                <div className="w3-container">
                    <div className="row">
                        <div className="col-lg-1">
                            <img src={getAvatarPostAndCmt()} id="avatar_post"/>
                        </div>
                        <div className="col-lg-11">
                            <strong>{users?.name}</strong>
                        </div>
                    </div>
                    <div>
                        <textarea placeholder="Bạn đang nghĩ gì?" id="value_post"></textarea>
                    </div>
                    <div className="form-group">
                        <input onChange={handleChangeVideo} type="text" disabled={disableVid} className="form-control" id="embed_video" 
                        placeholder="Thêm đường dẫn youtube"/>
                    </div>
                    <div>
                        <img src="" id="img_modal_post_social" className="img_modal_post" hidden={hiddenImg}/>
                        <button id="btn_cancel_img" className="btn_cancel_img" hidden={hiddenImg} onClick={handleCancelImg}><i className="fas fa-times"/></button>
                    </div>
                    <div>
                        <iframe id="youtube_embed" width="560" height="315" src={urlYTB} allowFullScreen hidden={hiddenVid} 
                        ></iframe>
                    </div>
                    <div className="row" id="div_modal_post_social">
                        <div className="col-lg-12">
                            <input onChange={handleChange} id="pic-post-file" type="file" hidden accept="image/png, image/jpeg"/>
                            <button id="custom_btn_pic" onClick={activeImage} disabled={disableImg} className="btn btn-success btn_social">
                                <i className="far fa-images"></i>Ảnh</button>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-12">
                        <button id="btn_modal_post" onClick={addPost} className="btn btn-primary">Đăng</button>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Modal_Post