import { changeInfoPost } from "../../redux/actions/post.actions"
import { requestGetImagePost, requestPostById } from "../../services/post.services"
const { useDispatch } = ReactRedux
const { useState,useEffect } = React

const Modal_Edit_Post = (props)=>{
    const id = props
    const dispatch = useDispatch()
    const [postInfo,setpostInfo] = useState()
    const handlePostInfo = async () =>{
        const postById =  await requestPostById(id.props.id)
        if(postById.code == 0){
            setpostInfo(postById.data)
            if(postById.data.video){
                setHiddenVid(false)
                setDisableImg(true)
            }
        }
    }
    const handImgPost = async ()=>{
        const img = await requestGetImagePost(id.props.id)
        const imgUrl = URL.createObjectURL(img)
        setImgPostById(imgUrl)
        setHiddenImg(false)
    }
    const [imgPostById,setImgPostById] = useState()
    useEffect(()=>{
        handlePostInfo()
        handImgPost()
    },[])
    const [imagePost,setImagePost] = useState()
    function closeModal(){
        document.getElementById(id.props.edit).style.display='none'
    }
    function activeImage() {
        const defautBtnPic = document.querySelector("#pic-file-"+id.props.id)
        defautBtnPic.click()
    }
    const handleChange = ()=>{
        const uploadAvatarFile = document.getElementById("pic-file-"+id.props.id)
        const avatar = document.getElementById("img_modal_edit_post_"+id.props.id)
          if(uploadAvatarFile.value){
            const img = event.target.files[0];
            const imgUrl = URL.createObjectURL(img);
            avatar.src =imgUrl
            setImagePost(img)
            setHiddenImg(false)
            setDisableVid(true)
          }
    }
    const [hiddenVid,setHiddenVid] = useState(true)
    const [hiddenImg,setHiddenImg] = useState(true)
    const [disableVid,setDisableVid] = useState(false)
    const [disableImg,setDisableImg] = useState(false)
    const handleChangeVideo = (e) =>{
        const uploadVideo = document.getElementById("youtube_edit_embed")
        const url_ytb = e.target.value
        setpostInfo(p => ({
            ...p,
            video: url_ytb
        }))
        setHiddenVid(false)
        setDisableImg(true)
        if(url_ytb.length == 0){
            setHiddenVid(true)
            setDisableImg(false)
        }
    }
    const changeVideo = (url_link) =>{
        if(url_link){
            if(url_link.includes("https://www.youtube.com/embed/")){
                 return url_link
            }
            else{
                const test ="https://www.youtube.com/embed/"+url_link.slice(32)+"?controls=1"
                return test
            }
        }
        return undefined
    }
    const handleChangeContent = (e)=>{
        const test = e.target.value
        setpostInfo(p => ({
            ...p,
            content: test
        }))
    }
    const editPost = () => {
        dispatch(changeInfoPost(id.props.id,postInfo?.content,changeVideo(postInfo?.video),imagePost))
        console.log(id.props.id,postInfo?.content,postInfo?.video);
        closeModal()
    }
    const handleCancelImg = () =>{
        document.getElementById("img_modal_edit_post_"+id.props.id).setAttribute('src','')
        setImagePost(undefined)
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
                            <img src="/img/avatar_mac_dinh.jpg" id="avatar_post"/>
                        </div>
                        <div className="col-lg-11">
                            <strong>{postInfo?.author?.name}</strong>
                        </div>
                    </div>
                    <div>
                        <textarea onChange={handleChangeContent} placeholder="Bạn đang nghĩ gì?" 
                        id="value_edit_post" value={postInfo?.content}></textarea>
                    </div>
                    <div className="form-group">
                        <input onChange={handleChangeVideo} type="text" disabled={disableVid} className="form-control" id="embed_video" 
                        placeholder="Thêm đường dẫn youtube" value={postInfo?.video}/>
                    </div>
                    <div>
                        <img src={imgPostById} id={`img_modal_edit_post_`+id.props.id} className="img_modal_post" hidden={hiddenImg}/>
                        <button id={`btn_cancel_img_`+id.props.id} hidden={hiddenImg} className="btn_cancel_img" onClick={handleCancelImg}><i className="fas fa-times"/></button>
                    </div>
                    <div>
                        <iframe id="youtube_edit_embed" width="560" height="315" src={changeVideo(postInfo?.video)} allowFullScreen hidden={hiddenVid} 
                        ></iframe>
                    </div>
                    <div className="row" id="div_modal_post_social">
                        <div className="col-lg-12">
                            <input onChange={handleChange} id={`pic-file-`+id.props.id} type="file" hidden/>
                            <button id="custom_btn_pic" onClick={activeImage} disabled={disableImg} className="btn btn-success btn_social">
                                <i className="far fa-images"></i>Ảnh</button>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-12">
                        <button id="btn_modal_post" onClick={editPost} className="btn btn-primary">Lưu</button>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Modal_Edit_Post