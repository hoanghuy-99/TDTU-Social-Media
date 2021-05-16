import userConstants from "../constants/user.constants"
import setAlert  from './alert.actions'
import { getToken, removeToken, setToken } from '../../cookie'
import { requestToken, putToken } from '../../services/token.services'
import { requestChangeInfoById, requestChangePassword, requestUserById } from "../../services/user.services"

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

    function success(message){
        return {
            type: userConstants.REGISTER_SUCCESS,
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
            dispatch(success(message))
            dispatch(setAlert(message, 'success'))
        } else {
            const message = res.message
            dispatch(failure(message))
            dispatch(setAlert(message, 'danger'))
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

export { login, loginGoogleAPI, logout, register, fetchUserById, checkLogin,changePassword,changeInfoStudent }
