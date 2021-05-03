const Header = () =>{   
    useEffect(()=>{
        var d = new Date().toDateString()
        var t = new Date().toLocaleTimeString()
        setDate(d+","+t)
        setInterval(() => {
            var d = new Date().toDateString()
            var t = new Date().toLocaleTimeString()
            setDate(d+","+t)
        }, 1000);
    },[])
    const [date,setDate] = useState('')
    return(
        <header>
            <div id="header_logo_div">
                <img src="/img/logoTDT.png" id="logo"/>
            </div>
            <div id="title_header">
                <p>HỆ THỐNG THÔNG BÁO/MẠNG XÃ HỘI SINH VIÊN</p>
            </div>
            <div id="info">
                <div id="info_div">
                    <p id="info_name">Đoàn Tuấn Kiệt</p>
                    <Link className="button" id="btn_logout" to="#"><i className="fas fa-sign-out-alt"></i>Thoát</Link>
                </div>
                <div id="info_avatar_div">
                    <img src="/img/avatar.jpg" id="info_avatar"/>
                </div>
            </div>
            <div>
                <p id="date">{date}</p>
            </div>
            <div id="search_contain">
            <input type="text" id="search" placeholder="Tìm Kiếm..."/><Link to="#" className="button" id="btn_search"><i className="fas fa-search" id="img_search"></i></Link>
            </div>
            <div className="clear"></div>
        </header>
    )
}