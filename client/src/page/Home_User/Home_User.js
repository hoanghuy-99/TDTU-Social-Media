const { Link, Route, BrowserRouter, Switch } = ReactRouterDOM
import Modal_Delete_Post from '../Modal_Delete_Post/index'
import Modal_Edit_Comment from '../Modal_Edit_Comment/index'
import Modal_Delete_Comment from '../Modal_Delete_Comment/index'
import Modal_Edit_Post from '../Modal_Edit_Post/index'
import { fetchPost, newCmtPost, newPost } from '../../redux/actions/post.actions'
import { getId, getRole } from '../../cookie'
import { fetchNotification } from '../../redux/actions/notification.actions'
import { requestGetImagePost } from '../../services/post.services'
import { requestGetAvatarStudent, requestImageById } from '../../services/user.services'
const {useDispatch,useSelector} = ReactRedux
const {useState,useEffect} = React
const { useParams } = ReactRouterDOM
const Home_User = ({children}) =>{
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(()=>{
        dispatch(fetchPost())
        dispatch(fetchNotification())
    },[])
    let posts = useSelector(state => state?.post?.data)
    let notifications = useSelector(state => state?.notification?.data)
    const avatar = useSelector(state => state?.user?.avatar)
    console.log("posts",posts);
    console.log("notifications",notifications);
    notifications?.items?.sort((a,b)=>{
        const timeA = new Date(a.createdAt).getTime()
        const timeB = new Date(b.createdAt).getTime()
        return timeB - timeA
    })
    posts?.items?.sort((a,b)=>{
        const timeA = new Date(a.createdAt).getTime()
        const timeB = new Date(b.createdAt).getTime()
        return timeB - timeA
    })
    posts?.items?.comments?.sort((a,b)=>{
        const timeA = new Date(a.createdAt).getTime()
        const timeB = new Date(b.createdAt).getTime()
        return timeB - timeA
    })
    const openModalDeletePost= (id)=>(e)=>{
        document.getElementById(id).style.display='block'
    }
    const openModalEditComment= (edit)=>(e)=>{
        document.getElementById(edit).style.display='block'
    }
    const openModalDeleteComment= (id)=>(e)=>{
        document.getElementById(id).style.display='block'
    }
    const openModalEditPost= (id)=>(e)=>{
        document.getElementById(id).style.display='block'

    }
    const getImgPost = async (id) =>{
        const imgPost = await requestGetImagePost(id)
        const imgUrl = URL.createObjectURL(imgPost)
        setImgList(list => ({
            ...list,
            [id]: {
                imgUrl,
                imgPost
            }
        }))
    }
    useEffect(()=>{
        posts?.items?.map((value)=>{
            getImgPost(value.id)
        })
    },[posts?.items])
    const [imgList,setImgList] = useState({})
    const checkImage = (id) =>{
        if(imgList[id]?.imgPost.type != "image/jpeg"){
            return true
        }
        else{
            return false
        }
    }

    const formatDate = (date) =>{
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 101).toString().substring(1);
        var day = (date.getDate() + 100).toString().substring(1);
        return month + '/' + day + '/' + year;
    }
    const formatDateFaculty = (new_date) =>{
        const create_data = new Date(new_date).getTime()
        const date = new Date(create_data)
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 101).toString().substring(1);
        var day = (date.getDate() + 100).toString().substring(1);
        return month + '/' + day + '/' + year;
    }
    const fromatPostOn = (time) =>{
        const now = Date.now()
        const createdAt = new Date(time).getTime()
        const time_post = now - createdAt
        const date = new Date(time_post)
        const minutes = date.getMinutes().toString()
        const hours = time_post/(3600*1000)
        const seconds  = date.getSeconds().toString()
        const date_post = new Date(createdAt)
        const post_on_date = formatDate(date_post)
        if(minutes == 0){
            return "vài giây trước"
        }
        else if (hours >= 24){
            return post_on_date
        }
        else if(hours >= 1){
            return hours.toString().split('.')[0]+"h"+" trước"
        }
        else{
            return minutes+"m"+" trước"
        } 
    }
    const checkIdUser = (id_user) =>{
        if(getId() == id_user){
            return false
        }
        else{
            return true
        }
    }
    const hiddenVideo = (video) =>{
        if(video?.length == 0 || !video){
            return true
        }
        else{
            return false
        }
    }
    const hiddenComment = (cmtId) => {
        if(getId() == cmtId){
            return false
        }
        else{
            return true
        }
    }
    const addComment = (id)=>()=>{
        const content = document.getElementById(id).value
        if(content){
            dispatch(newCmtPost(id,content))
        }
        console.log(id,content)
    }
    const getAvatarEachPost = async (id) =>{
        const imgAvatar = await requestGetAvatarStudent(id)
        const imgUrlAvatar = URL.createObjectURL(imgAvatar)
        setAvatarList(list => ({
            ...list,
            [id]: {
                imgUrlAvatar,
                imgAvatar
            }
        }))
    }
    const [avatarList,setAvatarList] = useState({})
    useEffect(()=>{
        posts?.items?.map((value)=>{
            if(value.author.role == "student"){
                getAvatarEachPost(value.author.id)
            }
        })
    },[posts?.items])
    const checkAvatarEachPost = (id)=>{
        if(avatarList[id]?.imgAvatar.type == "image/jpeg"){
            return avatarList[id]?.imgUrlAvatar
        }
        else{
            return '/img/avatar_mac_dinh.jpg'
        }
    }
    const getAvatarPostAndCmt = ()=>{
        if(getRole() == "student"){
            return avatar
        }
        else{
            return '/img/avatar_mac_dinh.jpg'
        }
    }
    return(
        <div className=" col-12 col-lg-10" id="body_div">
            <div className="row">
                <div id="xahoi" className="col-lg-7" >  
                    {/* Mỗi bài post */}
                    {posts?.items?.map((value,index)=>{
                        if(id == value.author.id){
                            return(
                                <div key={`post-`+index} className="row justify-content-center">
                            <div className="col-lg-11" id="div_post_social">
                                <div className="form-group">
                                    <div className="row">
                                        <hr/>
                                        <div className="col-2 col-lg-1">
                                            <img src={checkAvatarEachPost(value.author.id)} id="avatar_post"/>
                                        </div>
                                        <div className="col-8 col-lg-10">
                                            <strong>{value.author.name}</strong>
                                            <p>Được đăng: {fromatPostOn(value.createdAt)}</p>
                                        </div>
                                        <div className="col-2 col-lg-1">
                                            <div className="dropdown" hidden={checkIdUser(value.author.id)}>
                                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                                 data-bs-toggle="dropdown" aria-expanded="false">
                                                    ...
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><Link className="dropdown-item" to="#" onClick={openModalEditPost("edit_post_"+value.id)}><i className="fas fa-wrench"></i>Chỉnh sửa</Link></li>
                                                    <li><Link className="dropdown-item" to="#" onClick={openModalDeletePost("delete_post_"+value.id)}><i className="fas fa-times"></i>Xóa</Link></li>
                                                </ul>
                                            </div>
                                            <Modal_Edit_Post props={{edit:"edit_post_"+value.id,id:value.id}}></Modal_Edit_Post>
                                            <Modal_Delete_Post props={{delete:"delete_post_"+value.id,id:value.id}}></Modal_Delete_Post>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p>{value.content}</p>
                                    </div>
                                    <div className="row">
                                        <img src={imgList[value.id]?.imgUrl} id="img_post" hidden={checkImage(value.id)}></img>
                                    </div>
                                    <div>
                                        <iframe id="youtube_post"  height="400"  src={value.video} hidden={hiddenVideo(value.video)} allowFullScreen></iframe>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-2 col-lg-1">
                                            <img src={getAvatarPostAndCmt()} id="avatar_comment"/>
                                        </div>
                                        <div className="col-10 col-lg-11" id="div_comment_post">
                                        <div className="input-group">
                                            <input id={value.id} type="text" className="form-control comment_post"
                                            placeholder="Viết bình luận..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                            <div className="input-group-append">
                                                <button onClick={addComment(value.id)} className="btn btn-primary" type="button">Bình luận</button>
                                            </div>  
                                        </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    {/* Comment */}
                                    {value.comments?.map((new_value,new_index)=>{
                                            return(
                                        <div key={'comment-'+new_index} className="row" id="div_cmt">   
                                            <div className="col-2 col-lg-1">
                                                <img src={checkAvatarEachPost(new_value.author.id)} id="avatar_comment"/>
                                            </div>
                                            <div className="col-10 col-lg-10">
                                                <strong>{new_value.author.name}</strong>
                                                <p id="comment">{new_value.content}</p>
                                                <button hidden={hiddenComment(new_value.author.id)} onClick={openModalEditComment("edit_cmt_"+new_value.id)}
                                                 className="edit_cmt">Chỉnh sửa</button>
                                                <button hidden={hiddenComment(new_value.author.id)} onClick={openModalDeleteComment("delete_cmt_"+new_value.id)}
                                                 className="edit_cmt">Xóa</button>
                                            </div>
                                            <Modal_Edit_Comment props={{edit:"edit_cmt_"+new_value.id,id:new_value.id,content:new_value.content,idPost:value.id}}></Modal_Edit_Comment>
                                            <Modal_Delete_Comment props={{delete:"delete_cmt_"+new_value.id,id:new_value.id,idPost:value.id}}></Modal_Delete_Comment>
                                            <div className="col-2 col-lg-1">
                                                <p>{fromatPostOn(new_value.createdAt)}</p>
                                            </div> 
                                        </div>
                                        )
                                    })}
                                    {/* ------ */}
                                </div>
                            </div> 
                        </div>
                            )
                        }
                        
                    })}
                    
                    {/* ----- */}
                </div>
                <div  className="col-lg-5" id="home_notification">
                    <div id="home_title_notification">
                        Thông báo mới
                    </div>
                    <div><Link to='/notification'>Xem tất cả thông báo</Link></div>
                    {notifications?.items?.map((value,index)=>{
                        if(index < 3){
                            return(
                            <div key={'notification-'+index} className="card home_notification_card">
                                <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                <p className="card-text home_notification_card_text">{value.content}</p>
                                <Link to={`/notification/`+value.id} className="btn btn-primary btn_home_detail_noti">Xem chi tiết</Link>
                                <p className="home_faculty_date">{value.department.name}|{formatDateFaculty(value.createdAt)}</p>
                                <div className="clear"></div>
                                </div>
                            </div>
                            )
                        }
                    })}
                </div>
            </div>
            {children}
        </div>
    )
}
export default Home_User