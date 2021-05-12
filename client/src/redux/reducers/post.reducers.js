import postConstants from "../constants/post.constants"

const initialState = {
    loggedIn: false,
    requesting: false,
    message: undefined,
    data: undefined,
}

export default (state = initialState , action)=>{
    switch(action.type){
        case postConstants.FETCH_POST:
            return{
                ...state,
                requesting:true,
            }
        case postConstants.FETCH_POST_SUCCESS:
            return{
                ...state,
                requesting:false,
                data: action.data,
                message: action.message,
            }
        case postConstants.FETCH_POST_FAILURE:
            return{
                ...state,
                requesting:false,
                message: action.message
            }
        case postConstants.ADD_POST:
            return{
                ...state,
                requesting: true,
            }
        case postConstants.ADD_POST_SUCCESS:
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
        case postConstants.ADD_POST_FAILURE:
            return{
                ...state,
                requesting:false,
                message: action.message
            }
        case postConstants.CHANGE_POST:
            return{
                ...state,
                requesting:true,
            }
        case postConstants.CHANGE_POST_SUCCESS:
            return{
                ...state,
                requesting:false,
                data:{
                    ...state.data,
                    items: state.data.items.reduce((value,item)=>{
                        if(item.id == action.data.id){
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
        case postConstants.CHANGE_POST_FAILURE:
            return{
                ...state,
                requesting:false,
                message: action.message
            }
        case postConstants.DELETE_POST:
            return{
                ...state,
                requesting: true,
            }
        case postConstants.DELETE_POST_SUCCESS:
            return{
                ...state,
                message: action.message,
                data:{
                    ...state.data,
                    items: state.data.items.reduce((value,item)=>{
                        if(item.id != action.id){
                            value.push(item)
                        }
                        return value
                    },[])
                }
            }
        case postConstants.DELETE_POST_FAILURE:
            return{
                ...state,
                message: action.message
            }
        default:
            return state
    }
}