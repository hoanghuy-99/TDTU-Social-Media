// LẤY NGÀY
d = new Date().toDateString()
t = new Date().toLocaleTimeString()
document.getElementById("date").innerHTML = d+","+t;
// -----
// Modal change Avatar
function openModal(){
    document.getElementById('modal_change_avatar').style.display='block'
}
function closeModal(){
    document.getElementById('modal_change_avatar').style.display='none'
}
// Upload Image Avatar
const uploadAvatarFile = document.getElementById("avatar_file")
const btnUploadAvatar = document.getElementById("btn_up_avatar")
const avatar = document.getElementById("change_avatar_img")

btnUploadAvatar.addEventListener("click",function(){
    uploadAvatarFile.click();
})
uploadAvatarFile.addEventListener("change",function(){
    if(uploadAvatarFile.value){
        const img = event.target.files[0];
        const imgUrl = URL.createObjectURL(img);
        avatar.src =imgUrl
    }
})
