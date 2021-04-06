const Header = () =>{
    return(
        <>
        <header>
            <div id="header_logo_div">
                <img src="../public/img/logoTDT.png" id="logo"/>
            </div>
            <div id="title_header">
                <p>HỆ THỐNG THÔNG BÁO/MẠNG XÃ HỘI SINH VIÊN</p>
            </div>
            <div id="info">
                <div id="info_div">
                    <p id="info_name">Đoàn Tuấn Kiệt</p>
                    <a class="button" id="btn_logout" ref="#"><i class="fas fa-sign-out-alt"></i>Thoát</a>
                </div>
                <div id="info_avatar_div">
                    <img src="../public/img/avatar.jpg" id="info_avatar"/>
                </div>
            </div>
            <div>
                <p id="date"></p>
            </div>
            <div id="search_contain">
            <input type="text" id="search" placeholder="Tìm Kiếm..."/><a href="" class="button" id="btn_search"><i class="fas fa-search" id="img_search"></i></a>
            </div>
            <div class="clear"></div>
        </header>
        </>
    )
}
export default Header