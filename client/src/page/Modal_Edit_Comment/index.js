const Modal_Edit_Comment = (props)=>{
    const id = props
    function closeModal(){
        document.getElementById(id.props.id).style.display='none'
    }
    const handleClick = ()=>{
        // put(id.props.content)
    }
    return(
        <div id={id.props.id} className="w3-modal w3-animate-opacity">
                <div className="w3-modal-content" id="modal_post_delete">
                  <div className="w3-container w3-teal"> 
                    <center><h2>Sửa comment</h2></center>
                </div>
                <div className="w3-container">
                    <input type="text" className="form-control" name="content" value={id.props.content}/>
                    <div className="row" id="div_modal_post_social">
                        <div className="col-lg-6">
                            <button onClick={closeModal}  className="btn btn-dark btn_social">Hủy</button>
                        </div>
                        <div className="col-lg-6">
                            <button onClick={handleClick} className="btn btn-danger btn_social">Lưu</button>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Modal_Edit_Comment