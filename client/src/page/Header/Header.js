const {useEffect,useState} = React
const { Link,Redirect } = ReactRouterDOM
import { getId, getRole, getToken } from '../../cookie'
const { useDispatch,useSelector } = ReactRedux
import { logout } from '../../redux/actions/user.actions'
import {fetchUserById} from '../../redux/actions/user.actions'
import { requestImageById } from '../../services/user.services'
const DateAndTime = () =>{
    const [date,setDate] = useState('')
    useEffect(()=>{
        var d = new Date().toDateString()
        var t = new Date().toLocaleTimeString()
        setDate(d+","+t)
        setInterval(() => {
            var d = new Date().toDateString()
            var t = new Date().toLocaleTimeString()
            setDate(d + ", " + t)
        }, 1000);
    },[])
    return(
        <p id="date">{date}</p>
    )
}
const Header = () =>{
    const dispatch = useDispatch()
    const handleImageAvatar = async ()=>{
        const img = await requestImageById()
        console.log("img",img);
        const imgUrl = URL.createObjectURL(img)
        setImgAvatar(imgUrl)
    }
    const [imgAvatar,setImgAvatar] = useState()
    console.log("avatar",imgAvatar);
    useEffect(()=>{
        dispatch(fetchUserById(getId()))
        handleImageAvatar()
    },[])
    const users = useSelector(state => state?.user?.data)
    function handleLogout(){
        dispatch(logout())
    }
    return(
        <>
        <header>
            <div id="header_logo_div">
                <img src="/img/logoTDT.png" id="logo"/>
            </div>
            <div id="title_header">
                <div>HỆ THỐNG THÔNG BÁO</div>
                <div>MẠNG XÃ HỘI SINH VIÊN</div>
            </div>
            <div id="info">
                <div id="info_div">
                    <p id="info_name">{users?.name}</p>
                    <Link className="button" id="btn_logout" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i>Thoát</Link>
                </div>
                <div id="info_avatar_div">
                    <img src={imgAvatar} id="info_avatar"/>
                </div>
            </div>
            <div>
                <DateAndTime></DateAndTime>
            </div>
            <div id="search_contain">
            <input type="text" id="search" placeholder="Tìm Kiếm..."/><Link to="#" className="button" id="btn_search"><i className="fas fa-search" id="img_search"></i></Link>
            </div>
            <div className="clear"></div>
        </header>
        </>
    )
}
export default Header