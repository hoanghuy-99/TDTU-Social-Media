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
                data: {
                    ...state.data,
                    items: [
                        ...state.data.items,
                        action.data
                    ]
                }
            }
        case notificationConstants.ADD_NOTIFICATION_FAILURE:
            return{
                ...state,
                requesting:false,
                message: action.message
            }
        case notificationConstants.EDIT_NOTIFICATION:
            return{
                ...state,
                requesting: true,
            }
        case notificationConstants.EDIT_NOTIFICATION_SUCCESS:
            return{
                ...state,
                requesting:false,
                message:action.message,
                data:{
                    ...state.data,
                    items: state.data.items.reduce((value,item)=>{
                        if(item.id == action.idNoti){
                            item = action.data
                            value.push(item)
                        }
                        else{
                            value.push(item)
                        }
                        return value
                    },[])
                }
            }
        case notificationConstants.EDIT_NOTIFICATION_FAILURE:
            return{
                ...state,
                requesting:false,
                message: action.message
            }
        case notificationConstants.DELETE_NOTIFICATION:
            return{
                ...state,
                requesting:true
            }
        case notificationConstants.DELETE_NOTIFICATION_SUCCESS:
            return{
                ...state,
                requesting:false,
                message:action.message,
                data:{
                    ...state.data,
                    items: state.data.items.reduce((value,item)=>{
                        if(item.id != action.idPost){
                            value.push(item)
                        }
                        return value
                    },[])
                }
            }
        case notificationConstants.DELETE_NOTIFICATION_FAILURE:
            return{
                ...state,
                requesting:false,
                message:action.message
            }
        default:
            return state
    }
}