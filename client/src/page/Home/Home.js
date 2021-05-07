const { Link, Route, BrowserRouter, Switch } = ReactRouterDOM
import formatDate from '../../utils/FormatDate'

const Home = ({children}) =>{
    function openModal(){
        document.getElementById('modal_change_avatar').style.display='block'
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
                                    <div className="col-lg-11">
                                        <strong>Tuấn Kiệt</strong>
                                        <p>Posted on {/*formatDate(date)*/}</p>
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
                                <div className="row">
                                    <div className="col-lg-1">
                                        <img src="/img/avatar.jpg" id="avatar_comment"/>
                                    </div>
                                    <div className="col-lg-10">
                                       <strong>Tuấn Kiệt</strong>
                                       <p>Mày ăn cơm chưa</p>
                                    </div>
                                    <div className="col-lg-1">
                                        <p>12/06/1999</p>
                                    </div>
                                </div>
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