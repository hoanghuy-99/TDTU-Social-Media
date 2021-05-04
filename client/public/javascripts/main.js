(()=>{"use strict";var e=ReactRouterDOM,t=e.Link;e.Route,e.BrowserRouter,e.Switch;const a=function(e){var a=e.children;return React.createElement("div",null,React.createElement("div",null,React.createElement("nav",{id:"nav_breadcrumb","aria-label":"breadcrumb"},React.createElement("ol",{className:"breadcrumb",id:"ol_breadcrumb"},React.createElement("li",{className:"breadcrumb-item"},"Trang chủ"),React.createElement("li",{className:"breadcrumb-item"},"Thông tin tài khoản")))),React.createElement("div",{className:"last_component"},React.createElement("form",null,React.createElement("div",{className:"row justify-content-center"},React.createElement("div",{id:"student_info_div"},React.createElement("div",{className:"row justify-content-center"},React.createElement("div",{className:"col-lg-6",id:"student_info_avatar_div"},React.createElement("img",{src:"/img/avatar.jpg",id:"student_info_avatar",alt:""}),React.createElement("br",null),React.createElement(t,{to:"#",onClick:function(){document.getElementById("modal_change_avatar").style.display="block"},id:"btn_student_info_avatar"},"Thay đổi ảnh đại diện")),React.createElement("div",{className:"col-lg-6"},React.createElement("div",{className:"form-group"},React.createElement("label",{htmlFor:"name"},React.createElement("strong",null,"Tên:")),React.createElement("input",{type:"text",className:"form-control",id:"student_name",placeholder:"Nhập họ tên"})),React.createElement("div",{className:"form-group"},React.createElement("label",{htmlFor:"className"},React.createElement("strong",null,"Lớp:")),React.createElement("input",{type:"text",className:"form-control",id:"student_className",placeholder:"Nhập lớp"})),React.createElement("div",{className:"form-group"},React.createElement("label",{htmlFor:"faculty"},React.createElement("strong",null,"Khoa:")),React.createElement("input",{type:"text",className:"form-control",id:"student_faculty",placeholder:"Nhập khoa"})),React.createElement("div",{className:"row space_btn"},React.createElement("div",{className:"col-lg-4"},React.createElement("button",{type:"button",className:"btn btn-primary form-control"},"Chỉnh sửa")),React.createElement("div",{className:"col-lg-4"},React.createElement("button",{type:"button",className:"btn btn-success form-control",disabled:!0},"Lưu"))))))))),a)};function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,c=new Array(t);a<t;a++)c[a]=e[a];return c}var n=React,l=n.useEffect,r=n.useState,m=ReactRouterDOM,i=m.Link;m.Route,m.BrowserRouter,m.Switch;const o=function(){l((function(){var e=(new Date).toDateString(),t=(new Date).toLocaleTimeString();m(e+","+t),setInterval((function(){var e=(new Date).toDateString(),t=(new Date).toLocaleTimeString();m(e+", "+t)}),1e3)}),[]);var e,t,a=(e=r(""),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=a){var c,n,l=[],r=!0,m=!1;try{for(a=a.call(e);!(r=(c=a.next()).done)&&(l.push(c.value),!t||l.length!==t);r=!0);}catch(e){m=!0,n=e}finally{try{r||null==a.return||a.return()}finally{if(m)throw n}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=a[0],m=a[1];return React.createElement("header",null,React.createElement("div",{id:"header_logo_div"},React.createElement("img",{src:"/img/logoTDT.png",id:"logo"})),React.createElement("div",{id:"title_header"},React.createElement("div",null,"HỆ THỐNG THÔNG BÁO"),React.createElement("div",null,"MẠNG XÃ HỘI SINH VIÊN")),React.createElement("div",{id:"info"},React.createElement("div",{id:"info_div"},React.createElement("p",{id:"info_name"},"Đoàn Tuấn Kiệt"),React.createElement(i,{className:"button",id:"btn_logout",to:"#"},React.createElement("i",{className:"fas fa-sign-out-alt"}),"Thoát")),React.createElement("div",{id:"info_avatar_div"},React.createElement("img",{src:"/img/avatar.jpg",id:"info_avatar"}))),React.createElement("div",null,React.createElement("p",{id:"date"},n)),React.createElement("div",{id:"search_contain"},React.createElement("input",{type:"text",id:"search",placeholder:"Tìm Kiếm..."}),React.createElement(i,{to:"#",className:"button",id:"btn_search"},React.createElement("i",{className:"fas fa-search",id:"img_search"}))),React.createElement("div",{className:"clear"}))};var s=ReactRouterDOM,u=s.Link;s.Route,s.BrowserRouter,s.Switch;const d=function(e){var t=e.children;return React.createElement("div",{className:"row"},React.createElement("div",{className:"col-12 col-lg-2",id:"navigation_div"},React.createElement("div",{id:"navigation_title"},"Navigation"),React.createElement("div",{className:"list-group"},React.createElement(u,{to:"#",className:"list-group-item list-group-item-action"},React.createElement("i",{className:"fas fa-home"}),"Trang chủ"),React.createElement(u,{to:"#",className:"list-group-item list-group-item-action"},React.createElement("i",{className:"fas fa-bell"}),"Thông báo"),React.createElement(u,{to:"#",className:"list-group-item list-group-item-action"},React.createElement("i",{className:"fas fa-key"}),"Đổi mật khẩu"),React.createElement(u,{to:"#",className:"list-group-item list-group-item-action"},React.createElement("i",{className:"fas fa-user"}),"Đổi thông tin"),React.createElement(u,{to:"#",className:"list-group-item list-group-item-action"},React.createElement("i",{className:"fas fa-tasks-alt"}),"Quản lý thông báo"),React.createElement(u,{to:"#",className:"list-group-item list-group-item-action"},React.createElement("i",{className:"fas fa-user-plus"}),"Tạo tài khoản Phòng/Ban"))),React.createElement("div",{className:" col-12 col-lg-10",id:"body_div"},t))},R=function(){return React.createElement("footer",null,React.createElement("div",null,"©2021 Đại học Tôn Đức Thắng ",React.createElement("br",null),"Ứng dụng được phát triển bởi Vũ Hoàng Huy, Đoàn Tuấn Kiệt, Dương Hữu Nguyên"))},E=function(){return React.createElement("div",{id:"modal_change_avatar",className:"w3-modal w3-animate-opacity"},React.createElement("div",{className:"w3-modal-content"},React.createElement("div",{className:"w3-container w3-teal"},React.createElement("span",{onClick:function(){document.getElementById("modal_change_avatar").style.display="none"},className:"w3-button w3-display-topright"},React.createElement("i",{className:"fas fa-times",id:"btn_close_modal"})),React.createElement("h2",null,"Thay đổi ảnh đại diện")),React.createElement("div",{className:"w3-container"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-lg-12",id:"change_avatar_div"},React.createElement("div",null,React.createElement("img",{src:"/img/avatar.jpg",id:"change_avatar_img"})),React.createElement("div",null,React.createElement("input",{onChange:function(){var e=document.getElementById("avatar_file"),t=document.getElementById("change_avatar_img");if(e.value){var a=event.target.files[0],c=URL.createObjectURL(a);t.src=c}},type:"file",id:"avatar_file"}),React.createElement("button",{onClick:function(){document.getElementById("avatar_file").click()},id:"btn_up_avatar",className:"btn btn-danger"},React.createElement("i",{className:"fas fa-images"}),"Chọn ảnh"))),React.createElement("div",{className:"col-lg-12",id:"confirm_avatar_div"},React.createElement("button",{className:"btn btn-danger"},"Hủy"),React.createElement("button",{className:"btn btn-success",id:"btn_confirm_avatar"},"Xác nhận"))))))},h=function(){return React.createElement("div",null,React.createElement("div",null,React.createElement("nav",{id:"nav_breadcrumb","aria-label":"breadcrumb"},React.createElement("ol",{className:"breadcrumb",id:"ol_breadcrumb"},React.createElement("li",{className:"breadcrumb-item"},"Admin"),React.createElement("li",{className:"breadcrumb-item","aria-current":"page"},"Thêm Phòng/Ban")))),React.createElement("div",{className:"row justify-content-center"},React.createElement("div",{id:"registerFaculty"},React.createElement("div",{className:"row justify-content-center"},React.createElement("div",{className:"col-lg-10"},React.createElement("form",null,React.createElement("div",{className:"form-group"},React.createElement("label",{htmlFor:"exampleInputEmail1"},React.createElement("strong",null,"Tài khoản:")),React.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Nhập tài khoản"})),React.createElement("div",{className:"form-group"},React.createElement("label",{htmlFor:"exampleInputPassword1"},React.createElement("strong",null,"Mật khẩu:")),React.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Nhập mật khẩu"})),React.createElement("div",{className:"form-group"},React.createElement("label",{htmlFor:"exampleInputPassword1"},React.createElement("strong",null,"Xác nhận mật khẩu:")),React.createElement("input",{type:"password",className:"form-control",id:"re_password",placeholder:"Nhập lại mật khẩu"})),React.createElement("div",{className:"form-check"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-lg-12"},React.createElement("label",{htmlFor:"exampleInputPassword1"},React.createElement("strong",null,"Chọn phòng ban quản lý:")),React.createElement("ul",{className:"list_checkbox",id:"list_checkbox"},React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"CTHSSV"}),"Phòng CTHSSV"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"UniRoom"}),"Phòng Đại học"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"AfterUniRoom"}),"Phòng Sau đại học"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"ComputerRoom"}),"Phòng Điện toán và máy tính"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"SurveyRoom"}),"Phòng khảo khí và kiểm định chất lượng"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"EnterpriseRoom"}),"Doanh nghiệp, cựu sinh viên"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"FinanceRoom"}),"Phòng tài chính"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"CLCRoom"}),"TDT Creative Language Center"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"ITRoom"}),"Trung tâm tin học"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"SDTC"}),"Đào tạo phát triển xã hội"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"ATEM"}),"Khoa học quản lý, Ứng dụng công nghệ"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"Law"}),"Khoa Luật"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"EIF"}),"Ngoại ngữ-Tin học-Bồi dưỡng"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"EB"}),"Kinh tế và Kinh doanh"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"MTCN"}),"Khoa Mỹ thuật công nghiệp"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"Electrical"}),"Khoa Điện-Điện tử"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"CNTT"}),"Khoa Công nghệ thông tin"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"QTKD"}),"Khoa Quản trị kinh doanh"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"MT_BHLD"}),"Môi trường và bảo hộ lao động"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"LDCD"}),"Khoa Lao động công đoàn"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"TCNH"}),"Khoa Tài chính ngân hàng"),React.createElement("li",null,React.createElement("input",{type:"checkbox",className:"form-check-input",id:"QDQT"}),"Khoa Giáo dục quốc tế"))))),React.createElement("button",{type:"button",className:"btn btn-danger",id:"btn_registerFaculty"},"Tạo tài khoản")))))))};var p=ReactRouterDOM,v=p.Link;p.Route,p.BrowserRouter,p.Switch;const g=function(){return React.createElement("div",null,React.createElement("div",null,React.createElement("nav",{id:"nav_breadcrumb","aria-label":"breadcrumb"},React.createElement("ol",{className:"breadcrumb",id:"ol_breadcrumb"},React.createElement("li",{className:"breadcrumb-item"},"Trang chủ"),React.createElement("li",{className:"breadcrumb-item"},"Thông báo")))),React.createElement("div",null,React.createElement("form",null,React.createElement("div",{className:"row justify-content-center"},React.createElement("div",{id:"noti_search_div"},React.createElement("div",{className:"row justify-content-center"},React.createElement("div",{className:"col-lg-6"},React.createElement("input",{type:"text",className:"form-control",placeholder:"Tìm kiếm chủ đề"})),React.createElement("div",{className:"col-lg-6"},React.createElement("select",{id:"select_facutly",className:"form-select","aria-label":"Default select example"},React.createElement("option",{value:"",selected:!0},"Chọn Phòng/Khoa"),React.createElement("option",{value:"CTHSSV"},"Phòng CTHSSV"),React.createElement("option",{value:"UniRoom"},"Phòng Đại học"),React.createElement("option",{value:"AfterUniRoom"},"Phòng Sau đại học"),React.createElement("option",{value:"ComputerRoom"},"Phòng Điện toán và máy tính"),React.createElement("option",{value:"SurveyRoom"},"Phòng khảo khí và kiểm định chất lượng"),React.createElement("option",{value:"EnterpriseRoom"}," Doanh nghiệp, cựu sinh viên"),React.createElement("option",{value:"FinanceRoom"},"Phòng tài chính"),React.createElement("option",{value:"CLCRoom"},"TDT Creative Language Center"),React.createElement("option",{value:"SDTC"},"Đào tạo phát triển xã hội"),React.createElement("option",{value:"ATEM"},"Khoa học quản lý, Ứng dụng công nghệ"),React.createElement("option",{value:"Law"},"Khoa Luật"),React.createElement("option",{value:"EIF"},"Ngoại ngữ-Tin học-Bồi dưỡng"),React.createElement("option",{value:"EB"}," Kinh tế và Kinh doanh"),React.createElement("option",{value:"MTCN"}," Khoa Mỹ thuật công nghiệp"),React.createElement("option",{value:"Electrical"},"Khoa Điện-Điện tử"),React.createElement("option",{value:"CNTT"},"Khoa Công nghệ thông tin"),React.createElement("option",{value:"QTKD"},"Khoa Quản trị kinh doanh"),React.createElement("option",{value:"MT_BHLD"},"Môi trường và bảo hộ lao động"),React.createElement("option",{value:"MTCN"},"Khoa Lao động công đoàn"),React.createElement("option",{value:"TCNH"},"Khoa Tài chính ngân hàng"),React.createElement("option",{value:"QDQT"},"Khoa Giáo dục quốc tế"),React.createElement("option",{value:"ITRoom"},"Trung tâm tin học")))),React.createElement("div",{className:"row justify-content-center"},React.createElement("div",{className:"col-lg-6"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-lg-6"},React.createElement("label",{htmlFor:"begin_date"},React.createElement("strong",null,"Từ ngày:")),React.createElement("input",{type:"date",className:"form-control"})),React.createElement("div",{className:"col-lg-6"},React.createElement("label",{htmlFor:"end_date"},React.createElement("strong",null,"Đến ngày:")),React.createElement("input",{type:"date",className:"form-control"})))),React.createElement("div",{className:"col-lg-6"},React.createElement("div",{className:"row space_btn"},React.createElement("div",{className:"col-lg-4"},React.createElement("button",{type:"button",className:"btn btn-primary form-control"},"Làm mới")),React.createElement("div",{className:"col-lg-4"},React.createElement("button",{type:"button",className:"btn btn-success form-control"},"Tìm kiếm"))))))))),React.createElement("div",{className:"last_component"},React.createElement("div",{className:"row justify-content-center"},React.createElement("div",{id:"noti_list_div"},React.createElement("div",{className:"row justify-content-center"},React.createElement("div",{className:"card"},React.createElement("div",{className:"card-body"},React.createElement("h5",{className:"card-title"},React.createElement("strong",null,"Tiêu đề")),React.createElement("p",{className:"card-text noti_text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),React.createElement(v,{to:"#",className:"btn btn-danger"},"Xem chi tiết thông báo"),React.createElement("p",{id:"faculty_time"},"Công nghệ thông tin | Ngày đăng: 02/04/2021"),React.createElement("div",{className:"clear"}))))))))},b=function(){return React.createElement("div",null,React.createElement("div",null,React.createElement("nav",{id:"nav_breadcrumb","aria-label":"breadcrumb"},React.createElement("ol",{className:"breadcrumb",id:"ol_breadcrumb"},React.createElement("li",{className:"breadcrumb-item"},"Trang chủ"),React.createElement("li",{className:"breadcrumb-item"},"Thêm thông báo")))),React.createElement("div",null,React.createElement("form",null,React.createElement("div",{className:"row justify-content-center"},React.createElement("div",{id:"faculty_noti_home_div"},React.createElement("div",{className:"row justify-content-center"},React.createElement("div",{className:"col-lg-8",id:"select_facutly_home_div"},React.createElement("h2",null,"Phòng/Khoa:"),React.createElement("select",{id:"select_facutly_home",className:"form-select",disabled:!0,"aria-label":"Default select example"},React.createElement("option",{value:"CTHSSV",selected:!0},"Phòng CTHSSV")))))))),React.createElement("div",{className:"last_component"},React.createElement("div",{className:"row justify-content-center"},React.createElement("div",{id:"noti_list_div"},React.createElement("div",{className:"row justify-content-center"},React.createElement("form",null,React.createElement("div",{className:"form-group"},React.createElement("label",{htmlFor:"title"},React.createElement("strong",null,"Tiêu đề:")),React.createElement("input",{type:"text",className:"form-control",id:"noti_add_title",placeholder:"Nhập Tiêu đề"})),React.createElement("div",{className:"form-group"},React.createElement("label",{htmlFor:"className"},React.createElement("strong",null,"Nội dung:")),React.createElement("textarea",{type:"text",className:"form-control",id:"student_class",placeholder:"Nhập nội dung"})),React.createElement("div",{className:"row",id:"cancel_post_noti_div"},React.createElement("div",{className:"col-lg-2"},React.createElement("button",{type:"button",className:"btn btn-danger form-control"},"Hủy")),React.createElement("div",{className:"col-lg-2"},React.createElement("button",{type:"button",className:"btn btn-success form-control",id:"post_noti_btn"},"Đăng")))))))))},f=function(){return React.createElement("div",null,React.createElement("div",null,React.createElement("nav",{id:"nav_breadcrumb","aria-label":"breadcrumb"},React.createElement("ol",{className:"breadcrumb",id:"ol_breadcrumb"},React.createElement("li",{className:"breadcrumb-item"},"Trang chủ"),React.createElement("li",{className:"breadcrumb-item"},"Chi thiết thông báo")))),React.createElement("div",{className:"last_component"},React.createElement("div",{className:"row justify-content-center"},React.createElement("div",{id:"noti_list_div"},React.createElement("div",{className:"row justify-content-center"},React.createElement("div",{id:"detai_noti_title"},React.createElement("h2",null,"Tiêu đề")),React.createElement("div",null,React.createElement("p",{id:"faculty_time"},"Công nghệ thông tin | Ngày đăng: 02/04/2021")),React.createElement("div",{className:"clear"}),React.createElement("div",null,React.createElement("p",null,"Nội dung")))))))};var N=ReactRouterDOM,_=N.Link;N.Route,N.BrowserRouter,N.Switch;const y=function(){return React.createElement("div",null,React.createElement("div",null,React.createElement("nav",{id:"nav_breadcrumb","aria-label":"breadcrumb"},React.createElement("ol",{className:"breadcrumb",id:"ol_breadcrumb"},React.createElement("li",{className:"breadcrumb-item"},"Trang chủ"),React.createElement("li",{className:"breadcrumb-item"},"Quản lý thông báo")))),React.createElement("div",null,React.createElement("form",null,React.createElement("div",{className:"row justify-content-center"},React.createElement("div",{id:"faculty_noti_home_div"},React.createElement("div",{className:"row justify-content-center"},React.createElement("div",{className:"col-lg-8",id:"select_facutly_home_div"},React.createElement("h2",null,"Phòng/Khoa:"),React.createElement("select",{id:"select_facutly_home",className:"form-select","aria-label":"Default select example"},React.createElement("option",{value:"",selected:!0},"Chọn Phòng/Khoa"),React.createElement("option",{value:"CTHSSV"},"Phòng CTHSSV"),React.createElement("option",{value:"UniRoom"},"Phòng Đại học"),React.createElement("option",{value:"AfterUniRoom"},"Phòng Sau đại học")))))))),React.createElement("div",{className:"last_component"},React.createElement("div",{className:"row justify-content-center"},React.createElement("div",{id:"noti_list_div"},React.createElement("div",{className:"row justify-content-center"},React.createElement("div",null,React.createElement("button",{className:"btn btn-primary",id:"btn_add_noti"},"Thêm thông báo")),React.createElement("div",{className:"card"},React.createElement("div",{className:"card-body"},React.createElement("h5",{className:"card-title",id:"noti_title"},React.createElement("strong",null,"Tiêu đề")),React.createElement("div",{id:"fix_delete_noti"},React.createElement(_,{to:"#"},React.createElement("i",{className:"fas fa-wrench"})),React.createElement(_,{to:"#",id:"btn_delete_noti"},React.createElement("i",{className:"fas fa-times"}))),React.createElement("div",{className:"clear"}),React.createElement("p",{className:"card-text noti_text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),React.createElement(_,{to:"#",className:"btn btn-danger"},"Xem chi tiết thông báo"),React.createElement("p",{id:"faculty_time"},"Công nghệ thông tin | Ngày đăng: 02/04/2021"),React.createElement("div",{className:"clear"}))))))))};var k=ReactRouterDOM,T=k.Link;k.Route,k.BrowserRouter,k.Switch;const w=function(e){var t=e.children;return React.createElement("div",null,React.createElement("div",null,React.createElement("nav",{id:"nav_breadcrumb","aria-label":"breadcrumb"},React.createElement("ol",{className:"breadcrumb",id:"ol_breadcrumb"},React.createElement("li",{className:"breadcrumb-item"},"Trang chủ"),React.createElement("li",{className:"breadcrumb-item"},"Đổi mật khẩu")))),React.createElement("div",null,React.createElement("form",null,React.createElement("div",{className:"row justify-content-center"},React.createElement("div",{id:"student_info_div"},React.createElement("div",{className:"row justify-content-center"},React.createElement("h3",null,React.createElement("strong",null,"Ảnh đại diện:")),React.createElement("div",{className:"col-lg-12",id:"student_info_avatar_div"},React.createElement("img",{src:"/img/avatar.jpg",id:"student_info_avatar",alt:""}),React.createElement("br",null),React.createElement(T,{to:"#",onClick:function(){document.getElementById("modal_change_avatar").style.display="block"},id:"btn_student_info_avatar"},"Thay đổi ảnh đại diện")),React.createElement("h3",null,React.createElement("strong",null,"Đổi mật khẩu:")),React.createElement("div",{className:"col-lg-12"},React.createElement("div",{className:"form-group"},React.createElement("label",{htmlFor:"new_password"},React.createElement("strong",null,"Mật khẩu mới:")),React.createElement("input",{type:"password",className:"form-control",id:"new_username",placeholder:"Nhập mật khẩu"})),React.createElement("div",{className:"form-group"},React.createElement("label",{htmlFor:"re_new_password"},React.createElement("strong",null,"Nhập lại mật khẩu mới:")),React.createElement("input",{type:"password",className:"form-control",id:"re_new_password",placeholder:"Nhập lại mật khẩu"})),React.createElement("div",{className:"row space_btn"},React.createElement("div",{className:"col-lg-4"},React.createElement("label",{htmlFor:""}),React.createElement("button",{type:"button",className:"btn btn-success form-control"},"Xác nhận"))))))))),t)};var x=ReactRouterDOM,S=x.Link;x.Route,x.BrowserRouter,x.Switch;const C=function(){return React.createElement("div",{class:" col-12 col-lg-10",id:"body_div"},React.createElement("div",{class:"row"},React.createElement("div",{id:"xahoi",class:"col-lg-7"},"Đây là chổ làm Mạng xã hội"),React.createElement("div",{class:"col-lg-5",id:"home_notification"},React.createElement("div",{id:"home_title_notification"},"Thông báo mới"),React.createElement("div",null,React.createElement(S,{to:"#"},"Xem tất cả thông báo")),React.createElement("div",{class:"card home_notification_card"},React.createElement("div",{class:"card-body"},React.createElement("h5",{class:"card-title"},"Tiêu đề"),React.createElement("p",{class:"card-text home_notification_card_text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),React.createElement(S,{to:"#",class:"btn btn-primary btn_home_detail_noti"},"Xem chi tiết"),React.createElement("p",{class:"home_faculty_date"},"Công nghệ thông tin|31/03/2021"),React.createElement("div",{class:"clear"}))),React.createElement("div",{class:"card home_notification_card"},React.createElement("div",{class:"card-body"},React.createElement("h5",{class:"card-title"},"Tiêu đề"),React.createElement("p",{class:"card-text home_notification_card_text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),React.createElement(S,{to:"#",class:"btn btn-primary btn_home_detail_noti"},"Xem chi tiết"),React.createElement("p",{class:"home_faculty_date"},"Công nghệ thông tin|31/03/2021"),React.createElement("div",{class:"clear"}))),React.createElement("div",{class:"card home_notification_card"},React.createElement("div",{class:"card-body"},React.createElement("h5",{class:"card-title"},"Tiêu đề"),React.createElement("p",{class:"card-text home_notification_card_text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),React.createElement(S,{to:"#",class:"btn btn-primary btn_home_detail_noti"},"Xem chi tiết"),React.createElement("p",{class:"home_faculty_date"},"Công nghệ thông tin|31/03/2021"),React.createElement("div",{class:"clear"}))))))},D=function(){return React.createElement("div",{class:"container"},React.createElement("div",{class:"forms-container"},React.createElement("div",{class:"signin-signup"},React.createElement("form",{class:"sign-in-form"},React.createElement("h2",{class:"title"},"ĐĂNG NHẬP"),React.createElement("div",{class:"input-field"},React.createElement("i",{class:"fas fa-user"}),React.createElement("input",{type:"text",placeholder:"Tài Khoản"})),React.createElement("div",{class:"input-field"},React.createElement("i",{class:"fas fa-lock"}),React.createElement("input",{type:"password",placeholder:"Mật Khẩu"})),React.createElement("input",{type:"submit",value:"Đăng Nhập",class:"btn solid"}),React.createElement("p",{class:"social-text"},"Hoặc đăng nhập với tài khoản Google"),React.createElement("div",{class:"google-login"},React.createElement("button",{class:"google-login-button"},React.createElement("i",{class:"fas fa-google"}),"Đăng Nhập với Google"))))),React.createElement("div",{class:"panels-container"},React.createElement("div",{class:"panel left-panel"},React.createElement("div",{class:"content"},React.createElement("h3",null,"Trường Đại học Tôn Đức Thắng"),React.createElement("p",null,"Hệ Thông Thông Báo")),React.createElement("img",{src:"https://raw.githubusercontent.com/sefyudem/Sliding-Sign-In-Sign-Up-Form/955c6482aeeb2f0e77c1f3c66354da3bc4d7a72d/img/log.svg",class:"image",alt:""}))))};var K=ReactRouterDOM,j=(K.Link,K.Redirect),L=K.Route,H=K.BrowserRouter,M=K.Switch;const P=function(){return React.createElement("div",null,React.createElement(H,null,React.createElement(M,null,React.createElement(L,{path:"/login",exact:!0},React.createElement(D,null)),React.createElement(L,{path:"/",exact:!0},React.createElement(j,{to:"/home"})),React.createElement(L,{path:"/"},React.createElement(o,null),React.createElement(d,null,React.createElement(M,null,React.createElement(L,{path:"/home",exact:!0},React.createElement(C,null)),React.createElement(L,{path:"/student",exact:!0},React.createElement(a,null,React.createElement(E,null))),React.createElement(L,{path:"/admin"},React.createElement(h,null)),React.createElement(L,{path:"/notification",exact:!0},React.createElement(g,null)),React.createElement(L,{path:"/addNotification",exact:!0},React.createElement(b,null)),React.createElement(L,{path:"/detailNotification",exact:!0},React.createElement(f,null)),React.createElement(L,{path:"/faculty",exact:!0},React.createElement(y,null)),React.createElement(L,{path:"/facultyInfo",exact:!0},React.createElement(w,null,React.createElement(E,null))))))),React.createElement(R,null)))};ReactDOM.render(React.createElement(P,null),document.getElementById("root"))})();