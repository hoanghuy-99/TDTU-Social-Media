const Modal_Delete_Post = (props)=>{
    const id = props
    function closeModal(){
        document.getElementById(id.props.id).style.display='none'
    }
    const handleClick = ()=>{
        // delete(id)
    }
    return(
        <div id={id.props.id} className="w3-modal w3-animate-opacity">
                <div className="w3-modal-content" id="modal_post_delete">
                  <div className="w3-container w3-teal"> 
                    <center><h2>Xóa bài viết</h2></center>
                </div>
                <div className="w3-container">
                    <p>Bạn có muốn xóa bài viết <strong>{id.props.id}</strong></p>
                    <div className="row" id="div_modal_post_social">
                        <div className="col-lg-6">
                            <button onClick={closeModal}  className="btn btn-dark btn_social">Hủy</button>
                        </div>
                        <div className="col-lg-6">
                            <button onClick={handleClick} className="btn btn-danger btn_social">Xóa</button>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Modal_Delete_Post