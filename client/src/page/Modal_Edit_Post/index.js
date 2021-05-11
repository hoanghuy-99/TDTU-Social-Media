import { requestPostById } from "../../services/post.services"

const {useDispatch,useSelector} = ReactRedux
const {useState,useEffect} = React
const Modal_Edit_Post = (props)=>{
    const id = props
    const dispatch = useDispatch()
    const postById = JSON.stringify(requestPostById(id.props.id))
    console.log("data",postById);
    function closeModal(){
        document.getElementById(id.props.edit).style.display='none'
    }
    function activeImage() {
        const defautBtnPic = document.querySelector("#pic-file")
        defautBtnPic.click()
    }
    const handleChange = ()=>{
        const uploadAvatarFile = document.getElementById("pic-file")
        const avatar = document.getElementById("img_modal_edit_post")
          if(uploadAvatarFile.value){
            const img = event.target.files[0];
            const imgUrl = URL.createObjectURL(img);
            avatar.src =imgUrl
            document.getElementById('btn_cancel_img').style.display ='block'
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
        const uploadVideo = document.getElementById("youtube_edit_embed")
        const url_ytb = e.target.value
        const test ="https://www.youtube.com/embed/"+url_ytb.slice(32)+"?controls=1"
        setUrlYTB(test)
        setHiddenVid(false)
        setDisableImg(true)
        if(url_ytb.length == 0){
            setHiddenVid(true)
            setDisableImg(false)
        }
    }
    const editPost = () => {
        const content = document.getElementById('value_edit_post').value
        const link_ytb = document.getElementById('youtube_edit_embed').getAttribute('src')
        closeModal()
    }
    const handleCancelImg = () =>{
        document.getElementById("img_modal_edit_post").setAttribute('src','')
        document.getElementById('btn_cancel_img').style.display ='none'
        setHiddenImg(true)
        setDisableVid(false)
    }
    return(
        <div id={id.props.edit} className="w3-modal w3-animate-opacity modal_post">
                <div className="w3-modal-content modal_post_content">
                  <div className="w3-container w3-teal"> 
                    <span onClick={closeModal}
                    className="w3-button w3-display-topright"><i className="fas fa-times" id="btn_close_modal"></i></span>
                    <center><h2>Chỉnh sửa bài đăng</h2></center>
                </div>
                    <div className="w3-container">
                    <div className="row">
                        <div className="col-lg-1">
                            <img src="/img/avatar.jpg" id="avatar_post"/>
                        </div>
                        <div className="col-lg-11">
                            <strong>Tuấn Kiệt</strong>
                        </div>
                    </div>
                    <div>
                        <textarea placeholder="Bạn đang nghĩ gì?" id="value_edit_post"></textarea>
                    </div>
                    <div className="form-group">
                        <input onChange={handleChangeVideo} type="text" disabled={disableVid} className="form-control" id="embed_video" 
                        placeholder="Thêm đường dẫn youtube"/>
                    </div>
                    <div>
                        <img src="" id="img_modal_edit_post" hidden={hiddenImg}/>
                        <button id="btn_cancel_img" onClick={handleCancelImg}><i className="fas fa-times"/></button>
                    </div>
                    <div>
                        <iframe id="youtube_edit_embed" width="560" height="315" src={urlYTB} allowFullScreen hidden={hiddenVid} 
                        ></iframe>
                    </div>
                    <div className="row" id="div_modal_post_social">
                        <div className="col-lg-12">
                            <input onChange={handleChange} id="pic-file" type="file" hidden/>
                            <button id="custom_btn_pic" onClick={activeImage} disabled={disableImg} className="btn btn-success btn_social">
                                <i className="far fa-images"></i>Ảnh</button>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-12">
                        <button id="btn_modal_post" onClick={editPost} className="btn btn-primary">Đăng</button>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Modal_Edit_Post