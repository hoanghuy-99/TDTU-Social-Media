const {useState,useEffect} = React
const {useParams} = ReactRouterDOM
const EditNotification = () =>{
    const {id} = useParams()
    const [boo,setBoo] = useState(true)
    const openChange = () =>{
        setBoo(false)
    }
    const editNotification = () =>{
        const title = document.getElementById('noti_add_title').value
        const content = document.getElementById('noti_add_content').value
        const faculty = document.getElementById('select_facutly_home').value
        setBoo(true)
        console.log(title,content,faculty);
    }
    return(
        <div>
            <div>
                <nav id="nav_breadcrumb" aria-label="breadcrumb">
                    <ol className="breadcrumb" id="ol_breadcrumb">
                      <li className="breadcrumb-item" >Trang chủ</li>
                      <li className="breadcrumb-item" >Sửa thông báo</li>
                    </ol>
                  </nav>
            </div>
            <div>
                <form>
                <div className="row justify-content-center">
                    <div id="faculty_noti_home_div">
                        <div className="row justify-content-center">
                        <div className="col-lg-8" id="select_facutly_home_div">
                                <h2>Phòng/Khoa:</h2>
                                <select id="select_facutly_home" className="form-select" disabled>
                                    <option value="CTHSSV">Phòng CTHSSV</option>
                                </select>
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
                            <form>
                                <div className="form-group">
                                    <label htmlFor="title"><strong>Tiêu đề:</strong></label>
                                    <input type="text" className="form-control" id="noti_add_title" placeholder="Nhập Tiêu đề" disabled={boo}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="className"><strong>Nội dung:</strong></label>
                                    <textarea type="text" className="form-control" id="noti_add_content" placeholder="Nhập nội dung" disabled={boo}></textarea>
                                </div>
                                <div className="row" id="cancel_post_noti_div">
                                    <div className="col-lg-2">
                                        <button type="button" onClick={openChange} className="btn btn-danger form-control">Chỉnh sửa</button>
                                    </div>
                                    <div className="col-lg-2">
                                        <button type="button" onClick={editNotification} className="btn btn-success form-control" id="post_noti_btn" disabled={boo}>Lưu</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditNotification