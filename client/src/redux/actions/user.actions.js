import userConstants from "../constants/user.constants"
import setAlert  from './alert.actions'
import { getToken, removeToken, setToken } from '../../cookie'
import { requestToken, putToken } from '../../services/token.services'
import { requestChangeAvatarById, requestChangeInfoById, requestChangePassword, requestImageById, requestUserById } from "../../services/user.services"
import { requestNewTeacher } from "../../services/teacher.services"

const fetchUser = () => {
    function request(){
        return { type: userConstants.FETCH_USER }
    }

    function success(data, message){
        return { 
            type: userConstants.FETCH_USER_SUCCESS,
            data,
            message
        }
    }

    function failure(message){
        return {
            type: userConstants.FETCH_USER_FAILURE,
            message
        }
    }

    return async (dispatch) => {
        dispatch(request())
        const res = await requestGetUser()
        if(res.code === 0)
        {
            dispatch(success(res.data, 'Lấy dữ liệu thành công'))  
        }
        else
        {
            dispatch(failure('Lấy dữ liệu thất bại'))
        }
    }
}

const fetchUserById = (id) => {
    function request(){
        return { type: userConstants.FETCH_USER }
    }

    function success(data, message){
        return { 
            type: userConstants.FETCH_USER_SUCCESS,
            data,
            message
        }
    }

    function failure(message){
        return {
            type: userConstants.FETCH_USER_FAILURE,
            message
        }
    }

    return async (dispatch) => {
        dispatch(request())
        const res = await requestUserById(id)
        console.log(res)
        if(res.code === 0)
        {
            dispatch(success(res.data, 'Lấy dữ liệu thành công'))  
        }
        else
        {
            dispatch(failure('Lấy dữ liệu thất bại'))
        }
    }
}

function login(username, password){
    function request(){
        return {type: userConstants.LOGIN}
    }
    function success(token,message){
        return {
            type: userConstants.LOGIN_SUCCESS,
            token,
            message
        }
    }
    function failure(message){
        return{
            type: userConstants.LOGIN_FAILURE,
            message
        }
    }
    return async (dispatch) =>{
        dispatch(request())
        const res = await requestToken(username,password)
        if(res.code === 0){
            const token = res.data.token
            setToken(token)
            dispatch(success(token, ''))
        } else {
            const message = res.message
            dispatch(failure(message))
            dispatch(setAlert(message, 'danger'))
        }
    }
}

function loginGoogleAPI(tokenId){
    function request(){
        return {type: userConstants.LOGIN}
    }
    function success(message){
        return {
            type: userConstants.LOGIN_SUCCESS,
            message
        }
    }
    function failure(message){
        return{
            type: userConstants.LOGIN_FAILURE,
            message
        }
    }
    return async (dispatch) =>{
        dispatch(request())
        const res = await putToken(tokenId)
        if(res.code === 0){
            const token = res.data.token
            setToken(token)
            dispatch(success('Đăng Nhập Thành Công'))
        } else {
            const message = res.message
            dispatch(failure(message))
        }
    }
}

function register(username, password, email, name, department){
    function request(){
        return { 
            type: userConstants.REGISTER
        }
    }

    function success(message,data){
        return {
            type: userConstants.REGISTER_SUCCESS,
            data,
            message
        }
    }

    function failure(message){
        return {
            type: userConstants.REGISTER_FAILURE,
            message
        }
    }

    return async (dispatch) => {
        dispatch(request())
        const res = await requestNewTeacher(username, password, email, name, department)
        if(res.code === 0){
            const message = res.message
            dispatch(success(message,res.data))
        }
        else if(res.code == 20){
            dispatch(failure(res.message))
        } 
        else {
            const message = res.message
            dispatch(failure(message))
        }
    }
}

function changePassword(oldPassword,newPassword){
    function request(){
        return { 
            type: userConstants.CHANGE_PASSWORD
        }
    }

    function success(message){
        return {
            type: userConstants.CHANGE_PASSWORD_SUCCESS,
            message
        }
    }

    function failure(message){
        return {
            type: userConstants.CHANGE_PASSWORD_FAILURE,
            message
        }
    }

    return async (dispatch) => {
        dispatch(request())
        const res = await requestChangePassword(oldPassword,newPassword)
        if(res.code === 0){
            const message = res.message
            dispatch(success(message))
        } else {
            const message = res.message
            dispatch(failure(message))
        }
    }
}

function changeInfoStudent(name,classRoom,faculty){
    function request(){
        return { 
            type: userConstants.CHANGE_INFO
        }
    }

    function success(data,message){
        return {
            type: userConstants.CHANGE_INFO_SUCCESS,
            data,
            message
        }
    }

    function failure(message){
        return {
            type: userConstants.CHANGE_INFO_FAILURE,
            message
        }
    }

    return async (dispatch) => {
        dispatch(request())
        const res = await requestChangeInfoById(name,classRoom,faculty)
        if(res.code === 0){
            const message = res.message
            dispatch(success(res.data,message))
        } else {
            const message = res.message
            dispatch(failure(message))
        }
    }
}

function logout(){
    removeToken()
    return {
        type: userConstants.LOGOUT
    }
}

function checkLogin(){
    return {
        type: userConstants.CHECK_LOGIN,
        token: getToken()
    }
}

function getAvatar(){
    function request(){
        return { 
            type: userConstants.FETCH_USER_AVATAR
        }
    }

    function success(avatar){
        return {
            type: userConstants.FETCH_USER_AVATAR_SUCCESS,
            avatar
        }
    }

    function failure(avatar){
        return {
            type: userConstants.FETCH_USER_AVATAR_FAILURE,
            avatar
        }
    }

    return async (dispatch) => {
        dispatch(request())
        const res = await requestImageById()
        if(res.type == "image/jpeg"){
            dispatch(success(URL.createObjectURL(res)))
        } else {
            let mac_dinh = await fetch('/img/avatar_mac_dinh.jpg')
            mac_dinh = await mac_dinh.blob()
            dispatch(failure(URL.createObjectURL(mac_dinh)))
        }
    }
}

function changeAvatarUser(imgAvatar){
    function request(){
        return { 
            type: userConstants.CHANGE_USER_AVATAR
        }
    }

    function success(message){
        return {
            type: userConstants.CHANGE_USER_AVATAR_SUCCESS,
            message
        }
    }

    function failure(message){
        return {
            type: userConstants.CHANGE_USER_AVATAR_FAILURE,
            message
        }
    }

    return async (dispatch) => {
        var dataAvatar = new FormData()
        dataAvatar.append('image',imgAvatar,'fileName')
        console.log(imgAvatar);
        dispatch(request())
        const res = await requestChangeAvatarById(dataAvatar)
        if(res.code === 0){
            const message = res.message
            dispatch(success(message))
            dispatch(getAvatar())
        } else {
            const message = res.message
            dispatch(failure(message))
        }
    }
}

export { login, loginGoogleAPI, logout, register, fetchUserById, checkLogin,changePassword,changeInfoStudent,getAvatar,
changeAvatarUser}
