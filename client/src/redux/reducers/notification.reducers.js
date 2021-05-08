import notificationConstants from "../constants/notification.constants"


const initialState = {
    loggedIn: false,
    requesting: false,
    message: undefined,
    data: undefined,
}

export default (state = initialState , action)=>{
    switch(action.type){
        case notificationConstants.FETCH_NOTIFICATION:
            return{
                ...state,
                requesting:true,
            }
        case notificationConstants.FETCH_NOTIFICATION_SUCCESS:
            return{
                ...state,
                requesting:false,
                data: action.data,
                message: action.message,
            }
        case notificationConstants.FETCH_NOTIFICATION_FAILURE:
            return{
                ...state,
                requesting:false,
                message: action.message
            }
        case notificationConstants.ADD_NOTIFICATION:
            return{
                ...state,
                requesting: true,
            }
        case notificationConstants.ADD_NOTIFICATION_SUCCESS:
            return{
                ...state,
                requesting:false,
                message:action.message,
                data: "chưa biết là có trả gì không"
            }
        case notificationConstants.ADD_NOTIFICATION_FAILURE:
            return{
                ...state,
                requesting:false,
                message: action.message
            }
        default:
            return state
    }
}