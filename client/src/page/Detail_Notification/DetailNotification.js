const { useState,useEffect } = React
const { useParams } = ReactRouterDOM

const DetailNotification = () =>{
    const {id} = useParams()
    console.log(id);
    return(
        <div>
            <div>
                <nav id="nav_breadcrumb" aria-label="breadcrumb">
                    <ol className="breadcrumb" id="ol_breadcrumb">
                      <li className="breadcrumb-item" >Trang chủ</li>
                      <li className="breadcrumb-item" >Chi thiết thông báo</li>
                    </ol>
                  </nav>
            </div>
            <div className="last_component">
                <div className="row justify-content-center">
                    <div id="noti_list_div">
                        <div className="row justify-content-center">
                            <div id="detai_noti_title">
                                <h2>Tiêu đề</h2>
                            </div>
                            <div>
                                <p id="faculty_time">Công nghệ thông tin | Ngày đăng: 02/04/2021</p>
                            </div>
                            <div className="clear"></div>
                            <div>
                                <p>Nội dung</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailNotification