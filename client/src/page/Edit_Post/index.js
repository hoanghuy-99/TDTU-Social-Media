const { Link } = ReactRouterDOM
const {useState} = React
const {useParams} = ReactRouterDOM

const Edit_Post = () =>{
    const {id} = useParams()
    console.log(id);
    function activeImage() {
        const defautBtnPic = document.querySelector("#pic-file")
        defautBtnPic.click()
    }
    const handleChange = ()=>{
        const uploadAvatarFile = document.getElementById("pic-file")
        const avatar = document.getElementById("img_edit_post")
          if(uploadAvatarFile.value){
            const img = event.target.files[0];
            const imgUrl = URL.createObjectURL(img);
            avatar.src =imgUrl
            document.getElementById('btn_cancel_img_edit').style.display ='block'
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
        const uploadVideo = document.getElementById("youtube_embed")
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
        const content = document.getElementById('value_post').value
        const link_ytb = document.getElementById('youtube_embed').getAttribute('src')
    }
    const handleCancelImg = () =>{
        document.getElementById("img_edit_post").setAttribute('src','')
        document.getElementById('btn_cancel_img_edit').style.display ='none'
        setHiddenImg(true)
        setDisableVid(false)
    }
    return(
        <div className=" col-12 col-lg-10" id="body_div">
            <div className="row">
                <div id="xahoi" className="col-lg-7" >  
                    <div className="row justify-content-center">
                        <div className="col-lg-11" id="div_edit_post">
                            <div className="row">
                                <div className="col-lg-1">
                                    <img src="/img/avatar.jpg" id="avatar_post"/>
                                </div>
                                <div className="col-lg-10">
                                    <strong>Tuấn Kiệt</strong>
                                </div>
                                <div className="col-lg-1 dropdown">
                                    <Link to="/home"><i className="fas fa-times" id="btn_close_modal"/></Link>
                                </div>
                            </div>
                            <div>
                                <textarea placeholder="Bạn đang nghĩ gì?" id="value_post"></textarea>
                            </div>
                            <div className="form-group">
                                <input onChange={handleChangeVideo} type="text" disabled={disableVid} className="form-control" id="embed_video" 
                                placeholder="Thêm đường dẫn youtube"/>
                            </div>
                            <div id="div_edit_image_post">
                                <img src="" id="img_edit_post" hidden={hiddenImg}/>
                                <button id="btn_cancel_img_edit" onClick={handleCancelImg}><i className="fas fa-times"/></button>
                            </div>
                            <div>
                                <iframe id="youtube_embed" width="560" height="315" src={urlYTB} allowFullScreen hidden={hiddenVid} 
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
                                <button id="btn_modal_post" onClick={editPost} className="btn btn-primary">Lưu</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="col-lg-5" id="home_notification">
                    <div id="home_title_notification">
                        Thông báo mới
                    </div>
                    <div><Link to="#">Xem tất cả thông báo</Link></div>
                    <div className="card home_notification_card">
                        <div className="card-body">
                          <h5 className="card-title">Tiêu đề</h5>
                          <p className="card-text home_notification_card_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <Link to="#" className="btn btn-primary btn_home_detail_noti">Xem chi tiết</Link>
                          <p className="home_faculty_date">Công nghệ thông tin|31/03/2021</p>
                          <div className="clear"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit_Post