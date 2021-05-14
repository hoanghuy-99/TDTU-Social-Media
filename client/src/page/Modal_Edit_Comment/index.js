import { changeComment } from "../../redux/actions/post.actions"

const { useDispatch,useSelector } = ReactRedux
const { useState,useEffect } = React
const Modal_Edit_Comment = (props)=>{
    const id = props
    const dispatch = useDispatch()
    function closeModal(){
        document.getElementById(id.props.edit).style.display='none'
    }
    const posts = useSelector(state => state?.post?.data)
    const [infoComment,setInfoComment] = useState()
    useEffect(()=>{
        posts?.items?.map((value)=>{
            if(id.props.idPost == value.id){
                value?.comments?.map((new_value)=>{
                    if(id.props.id == new_value.id){
                        setInfoComment(new_value)
                    }
                })
            }
        })
    },[])
    const handleChangeCmt = (e)=>{
        const cmt = e.target.value
        setInfoComment(comment =>({
            ...comment,
            content: cmt
        }))
    }
    const handleClick = ()=>{
        dispatch(changeComment(id.props.id,id.props.idPost,infoComment?.content))
        console.log(id.props.id,id.props.idPost,infoComment?.content);
        closeModal()
    }
    return(
        <div id={id.props.edit} className="w3-modal w3-animate-opacity">
                <div className="w3-modal-content" id="modal_post_delete">
                  <div className="w3-container w3-teal"> 
                    <center><h2>Sửa bình luận</h2></center>
                </div>
                <div className="w3-container">
                    <textarea type="text" onChange={handleChangeCmt} className="form-control" name="content" value={infoComment?.content}></textarea>
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