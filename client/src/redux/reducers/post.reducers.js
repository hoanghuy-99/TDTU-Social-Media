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
                data: "chưa biết là có trả gì không"
            }
        case postConstants.ADD_POST_FAILURE:
            return{
                ...state,
                requesting:false,
                message: action.message
            }
        default:
            return state
    }
}