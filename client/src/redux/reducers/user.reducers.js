import userConstants from "../constants/user.constants"
import {setToken, getToken} from '../../cookie'
const initialState = {
    loggedIn: false,
    requesting: false,
    message: undefined,
    data: undefined,
    tokens: undefined,
    avatar: undefined,
}

export default (state = initialState, action)=>{
    switch(action.type){
        case userConstants.FETCH_USER:
            return{
                ...state,
                requesting: true,
            }
        case userConstants.FETCH_USER_SUCCESS:
            return{
                ...state,
                requesting:false,
                data: action.data,
                message: action.message
            }
        case userConstants.FETCH_USER_FAILURE:
            return{
                ...state,
                requesting:false,
                message: action.message
            }
        case userConstants.LOGIN:
            return{
                ...state,
                requesting: true
            }
        case userConstants.LOGIN_SUCCESS:
            return{
                ...state,
                loggedIn: true,
                requesting: false,
                message: action.message,
            }
        case userConstants.LOGIN_FAILURE:
            return{
                ...state,
                loggedIn: false,
                requesting: false,
                token: undefined,
                message: action.message
            }
        case userConstants.REGISTER:
            return {
                ...state,
                requesting: true,
            }
        case userConstants.REGISTER_SUCCESS:
            return {
                ...state,
                requesting: false,
                message: action.message
            }
        case userConstants.REGISTER_FAILURE:
            return {
                ...state,
                requesting: false,
                message: action.message
            }
        case userConstants.LOGOUT:
            return{
                ...state,
                loggedIn: false,
                token:undefined
            }
        case userConstants.FETCH_USER_AVATAR:
            return{
                ...state,
                requesting:true
            }
        case userConstants.FETCH_USER_AVATAR_SUCCESS:
            return{
                ...state,
                requesting: false,
                avatar: action.avatar
            }
        case userConstants.FETCH_USER_AVATAR_FAILURE:
            return{
                ...state,
                requesting: false,
                avatar: action.avatar
            }
        case userConstants.CHANGE_PASSWORD:
            return{
                ...state,
                requesting:true
            }
        case userConstants.CHANGE_PASSWORD_SUCCESS:
            return{
                ...state,
                requesting:false,
                message: action.message
            }
        case userConstants.CHANGE_PASSWORD_FAILURE:
            return{
                ...state,
                requesting:false,
                message: action.message
            }
        case userConstants.CHANGE_INFO:
            return{
                ...state,
                requesting:true
            }
        case userConstants.CHANGE_INFO_SUCCESS:
            return{
                ...state,
                requesting:false,
                message: action.message,

            }
        case userConstants.CHANGE_INFO_FAILURE:
            return{
                ...state,
                requesting:false,
                message: action.message
            }
        case userConstants.CHECK_LOGIN:
            if(action.token){
                return{
                    ...state,
                    loggedIn: true
                }
            }
            return state
        default:
            return state
    }
}