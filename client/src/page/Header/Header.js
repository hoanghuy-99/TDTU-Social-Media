const {useEffect,useState} = React
const { Link,Redirect } = ReactRouterDOM
import { getId, getRole, getToken } from '../../cookie'
const { useDispatch,useSelector } = ReactRedux
import { getAvatar, logout } from '../../redux/actions/user.actions'
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
    useEffect(()=>{
        dispatch(fetchUserById(getId()))
        dispatch(getAvatar())
    },[])
    const users = useSelector(state => state?.user?.data)
    const avatar = useSelector(state => state?.user?.avatar)
    const getAvatarPostAndCmt = (role)=>{
        if(getRole() == "student"){
            return avatar
        }
        else{
            return '/img/avatar_mac_dinh.jpg'
        }
    }
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
                    <img src={getAvatarPostAndCmt()} id="info_avatar"/>
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