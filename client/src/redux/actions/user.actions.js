import userConstants from "../constants/user.constants"
import setAlert  from './alert.actions'
import { removeToken } from '../../cookie'

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

const fetchUserById = () => {
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
        const res = await requestUserById()
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
            dispatch(success(token, ''))
        } else {
            const message = res.message
            dispatch(failure(message))
            dispatch(setAlert(message, 'danger'))
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

function logout(){
    removeToken()
    return {
        type: userConstants.LOGOUT
    }
}

export { login, logout, register }