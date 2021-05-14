import { fetchNotificationById } from "../../redux/actions/notification.actions"

const { useState,useEffect } = React
const { useParams } = ReactRouterDOM
const { useDispatch,useSelector } = ReactRedux
const DetailNotification = () =>{
    const dispatch = useDispatch()
    const {id} = useParams()
    console.log(id);
    useEffect(()=>{
        dispatch(fetchNotificationById(id))
    },[])
    const notifications = useSelector(state => state?.notification?.data)
    console.log("noti",notifications);
    const formatDate = (new_date) =>{
        const create_data = new Date(new_date).getTime()
        const date = new Date(create_data)
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 101).toString().substring(1);
        var day = (date.getDate() + 100).toString().substring(1);
        return month + '/' + day + '/' + year;
    }
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
                                <h2>{notifications?.title}</h2>
                            </div>
                            <div>
                                <p id="faculty_time">{notifications?.department?.name} | Ngày đăng: {formatDate(notifications?.updatedAt)}</p>
                            </div>
                            <div className="clear"></div>
                            <div>
                                <p>{notifications?.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailNotification