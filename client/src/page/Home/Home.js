const { Link, Route, BrowserRouter, Switch } = ReactRouterDOM;
const Home = () =>{
    return(
        <div class=" col-12 col-lg-10" id="body_div">
            <div class="row">
                <div id="xahoi" class="col-lg-7" >  
                    Đây là chổ làm Mạng xã hội
                </div>
                <div  class="col-lg-5" id="home_notification">
                    <div id="home_title_notification">
                        Thông báo mới
                    </div>
                    <div><Link to="#">Xem tất cả thông báo</Link></div>
                    <div class="card home_notification_card">
                        <div class="card-body">
                          <h5 class="card-title">Tiêu đề</h5>
                          <p class="card-text home_notification_card_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <Link to="#" class="btn btn-primary btn_home_detail_noti">Xem chi tiết</Link>
                          <p class="home_faculty_date">Công nghệ thông tin|31/03/2021</p>
                          <div class="clear"></div>
                        </div>
                    </div>
                    <div class="card home_notification_card">
                        <div class="card-body">
                          <h5 class="card-title">Tiêu đề</h5>
                          <p class="card-text home_notification_card_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <Link to="#" class="btn btn-primary btn_home_detail_noti">Xem chi tiết</Link>
                          <p class="home_faculty_date">Công nghệ thông tin|31/03/2021</p>
                          <div class="clear"></div>
                        </div>
                    </div>
                    <div class="card home_notification_card">
                        <div class="card-body">
                          <h5 class="card-title">Tiêu đề</h5>
                          <p class="card-text home_notification_card_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <Link to="#" class="btn btn-primary btn_home_detail_noti">Xem chi tiết</Link>
                          <p class="home_faculty_date">Công nghệ thông tin|31/03/2021</p>
                          <div class="clear"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home