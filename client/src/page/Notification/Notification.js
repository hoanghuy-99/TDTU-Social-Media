const { Link } = ReactRouterDOM
const { useDispatch,useSelector } = ReactRedux
const { useState,useEffect } = React
import { fetchDepartment } from '../../redux/actions/department.actions'
import { fetchNotification } from '../../redux/actions/notification.actions'

const Notification = () =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchDepartment())
        dispatch(fetchNotification())
    },[])
    const departments = useSelector(state => state?.department?.data)
    const notifications = useSelector(state => state?.notification?.data)
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
                      <li className="breadcrumb-item" >Thông báo</li>
                    </ol>
                  </nav>
            </div>
            <div>
                <form>
                <div className="row justify-content-center">
                    <div id="noti_search_div">
                    <div className="row justify-content-center">
                       <div className="col-lg-6">
                           <input type="text" className="form-control" placeholder="Tìm kiếm chủ đề"/>
                       </div>
                       <div className="col-lg-6">
                            <select id="select_facutly" className="form-select" aria-label="Default select example">
                                <option value="allFaculty">Tất cả Phòng/Ban</option>
                                {departments?.map((value)=>{
                                    return(
                                        <option value={value.id}>{value.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6">
                                    <label htmlFor="begin_date"><strong>Từ ngày:</strong></label>
                                    <input type="date" className="form-control"/>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="end_date"><strong>Đến ngày:</strong></label>
                                    <input type="date" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row space_btn">
                                <div className="col-lg-4">
                                    <button type="button" className="btn btn-primary btn-form-control">Làm mới</button>
                                </div>
                                <div className="col-lg-4">
                                    <button type="button" className="btn btn-success btn-form-control">Tìm kiếm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </form>
            </div>
            <div className="last_component">
                <div className="row justify-content-center">
                    <div id="noti_list_div">
                        <div className="row justify-content-center">
                            {notifications?.items?.map((value)=>{
                                return(
                                    <div className="card">
                                        <div className="card-body">
                                        <h5 className="card-title"><strong>{value.title}</strong></h5>
                                        <p className="card-text noti_text">{value.content}</p>
                                        <Link to={`/notification/`+value.id} className="btn btn-danger">Xem chi tiết thông báo</Link>
                                        <p id="faculty_time">{value.department.name} | Ngày đăng: {formatDate(value.updatedAt)}</p>
                                        <div className="clear"></div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Notification