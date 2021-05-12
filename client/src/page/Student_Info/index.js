const { Link } = ReactRouterDOM
const { useState } = React

const Student_Info = ({children}) =>{
    function openModal(){
        document.getElementById('modal_change_avatar').style.display='block'
    }
    const [boo,setBoo] = useState(true)
    const OpenChangeInfo = ()=>{
        setBoo(false)
    }
    const ChangeInfo = () =>{
        const student_name = document.getElementById('student_name').value
        const student_className = document.getElementById('student_className').value
        const student_faculty = document.getElementById('student_faculty').value
        setBoo(true)
        console.log(student_name,student_className,student_faculty);
    }
    return(
        <div>
            <div>
                <nav id="nav_breadcrumb" aria-label="breadcrumb">
                    <ol className="breadcrumb" id="ol_breadcrumb">
                      <li className="breadcrumb-item" >Trang chủ</li>
                      <li className="breadcrumb-item" >Thông tin tài khoản</li>
                    </ol>
                  </nav>
            </div>
            <div className="last_component">
                <form>
                <div className="row justify-content-center">
                    <div id="student_info_div">
                        <div className="row justify-content-center">
                            <div className="col-lg-6" id="student_info_avatar_div">
                                <img src="/img/avatar.jpg" id="student_info_avatar" alt=""/>
                                <br/>
                                <Link to="#" onClick={openModal} id="btn_student_info_avatar">Thay đổi ảnh đại diện</Link>
                            </div>
                            <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="name"><strong>Tên:</strong></label>
                                        <input type="text" className="form-control" id="student_name" placeholder="Nhập họ tên" disabled={boo}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="className"><strong>Lớp:</strong></label>
                                        <input type="text" className="form-control" id="student_className" placeholder="Nhập lớp" disabled={boo}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="faculty"><strong>Khoa:</strong></label>
                                        <input type="text" className="form-control" id="student_faculty" placeholder="Nhập khoa" disabled={boo}/>
                                    </div>
                                    <div className="row space_btn">
                                        <div className="col-lg-4">
                                            <button type="button" onClick={OpenChangeInfo} className="btn btn-primary btn-form-control">Chỉnh sửa</button>
                                        </div>
                                        <div className="col-lg-4">
                                            <button type="button"onClick={ChangeInfo} className="btn btn-success btn-form-control" disabled={boo}>Lưu</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>
            {children}
        </div>
    )
}
export default Student_Info