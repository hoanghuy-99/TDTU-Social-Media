import { requestNewNotification, requestNotification } from "../../services/notification.services"
import notificationConstants from "../constants/notification.constants"


function fetchNotification(){
    function request(){
        return {
            type: notificationConstants.FETCH_NOTIFICATION
        }
    }
    function success(data,message){
        return{
            type: notificationConstants.FETCH_NOTIFICATION_SUCCESS,
            data,
            message
        }
    }
    function failure(message){
        return{
            type: notificationConstants.FETCH_NOTIFICATION_FAILURE,
            message
        }
    }
    return async (dispatch) => {
        dispatch(request())
        const res = await requestNotification()
        if(res.code == 0){
            dispatch(success(res.data,'Lấy dữ liệu thành công'))
        }
        else{
            dispatch(failure('Không lấy được dữ liệu'))
        }
    }
}

function fetchNotificationById(id){
    function request(){
        return {
            type: notificationConstants.FETCH_NOTIFICATION
        }
    }
    function success(data,message){
        return{
            type: notificationConstants.FETCH_NOTIFICATION_SUCCESS,
            data,
            message
        }
    }
    function failure(message){
        return{
            type: notificationConstants.FETCH_NOTIFICATION_FAILURE,
            message
        }
    }
    return async (dispatch) => {
        dispatch(request())
        const res = await requestNotificationById(id)
        if(res.code == 0){
            dispatch(success(res.data,'Lấy dữ liệu thành công'))
        }
        else{
            dispatch(failure('Không lấy được dữ liệu'))
        }
    }
}

function newNotification(title,content,departmentId){
    function request(){
        return {
            type: notificationConstants.ADD_NOTIFICATION
        }
    }
    function success(data,message){
        return{
            type: notificationConstants.ADD_NOTIFICATION_SUCCESS,
            data,
            message
        }
    }
    function failure(message){
        return{
            type: notificationConstants.ADD_NOTIFICATION_FAILURE,
            message
        }
    }
    return async (dispatch) => {
        dispatch(request())
        const res = await requestNewNotification(title,content,departmentId)
        if(res.code == 0){
            dispatch(success(res.data,'Lấy dữ liệu thành công'))
        }
        else{
            dispatch(failure('Không lấy được dữ liệu'))
        }
    }
}
export {fetchNotification,newNotification}