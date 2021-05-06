import userConstants from "../constants/user.constants"
import setAlert  from './alert.actions'

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
        const res = await requestToken(username, password)
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

const logout = () => ({
    type: userConstants.LOGOUT
})

export { login }