const { Link, Route, BrowserRouter, Switch } = ReactRouterDOM
import formatDate from '../../utils/FormatDate'
import Modal_Delete_Post from '../Modal_Delete_Post/index'
import Modal_Edit_Comment from '../Modal_Edit_Comment/index'
import Modal_Delete_Comment from '../Modal_Delete_Comment/index'
const Home = ({children}) =>{
    function openModal(){
        document.getElementById('modal_change_avatar').style.display='block'
    }
    const openModalDeletePost= (id)=>(e)=>{
        document.getElementById(id).style.display='block'
    }
    const openModalEditComment= (edit)=>(e)=>{
        document.getElementById(edit).style.display='block'
    }
    const openModalDeleteComment= (id)=>(e)=>{
        document.getElementById(id).style.display='block'
    }
    return(
        <div className=" col-12 col-lg-10" id="body_div">
            <div className="row">
                <div id="xahoi" className="col-lg-7" >  
                    <div className="row justify-content-center">
                        <div className="col-lg-11" id="div_post_social">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-1">
                                        <img src="/img/avatar.jpg" id="avatar_post"/>
                                    </div>
                                    <div className="col-lg-11" id="div_modal_post" onClick={openModal}>
                                        Bạn đang nghĩ gì?
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    {/* Mỗi bài post */}
                    <div className="row justify-content-center">
                        <div className="col-lg-11" id="div_post_social">
                            <div className="form-group">
                                <div className="row">
                                    <hr/>
                                    <div className="col-lg-1">
                                        <img src="/img/avatar.jpg" id="avatar_post"/>
                                    </div>
                                    <div className="col-lg-10">
                                        <strong>Tuấn Kiệt</strong>
                                        <p>Posted on {/*formatDate(date)*/}</p>
                                    </div>
                                    <div className="col-lg-1">
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                             data-bs-toggle="dropdown" aria-expanded="false">
                                                ...
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><Link className="dropdown-item" to="#"><i className="fas fa-wrench"></i>Chỉnh sửa</Link></li>
                                                <li><Link className="dropdown-item" to="#" onClick={openModalDeletePost("BAIVIET1")}><i className="fas fa-times"></i>Xóa</Link></li>
                                            </ul>
                                        </div>
                                        <Modal_Delete_Post props={{id:"BAIVIET1"}}></Modal_Delete_Post>
                                    </div>
                                </div>
                                <div className="row">
                                    <p>Hôm nay tôi buồn vcl!</p>
                                </div>
                                <div className="row">
                                    <img src="/img/landing-background.jpg" id="img_post" hidden></img>
                                </div>
                                <div>
                                    <iframe id="youtube_post"  height="400"  src="https://www.youtube.com/embed/vVhKA9Av6vA?controls=1" allowFullScreen></iframe>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-lg-1">
                                        <img src="/img/avatar.jpg" id="avatar_comment"/>
                                    </div>
                                    <div className="col-lg-11" id="div_comment_post">
                                    <div className="input-group">
                                        <input id="comment_post" type="text" className="form-control" placeholder="Viết bình luận..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">Bình luận</button>
                                        </div>  
                                    </div>
                                    </div>
                                </div>
                                <hr/>
                                {/* Comment */}
                                <div className="row">
                                    <div className="col-lg-1">
                                        <img src="/img/avatar.jpg" id="avatar_comment"/>
                                    </div>
                                    <div className="col-lg-10">
                                       <strong>Tuấn Kiệt</strong>
                                       <p id="comment">Mày ăn cơm chưa</p>
                                       <button onClick={openModalEditComment("CMT1edit")} className="edit_cmt">Chỉnh sửa</button>
                                       <button onClick={openModalDeleteComment("CMT1")} className="edit_cmt">Xóa</button>
                                    </div>
                                    <Modal_Edit_Comment props={{id:"CMT1"+"edit",content:"Mày ăn cơm chưa"}}></Modal_Edit_Comment>
                                    <Modal_Delete_Comment props={{id:"CMT1"}}></Modal_Delete_Comment>
                                    <div className="col-lg-1">
                                        <p>12/06/1999</p>
                                    </div>
                                </div>
                                {/* ------ */}
                            </div>
                        </div> 
                    </div>
                    {/* ----- */}
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
            {children}
        </div>
    )
}
export default Home