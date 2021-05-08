import commentConstants from "../constants/comment.constants"

const initialState = {
    loggedIn: false,
    requesting: false,
    message: undefined,
    data: undefined,
}

export default (state = initialState , action)=>{
    switch(action.type){
        case commentConstants.FETCH_COMMENT:
            return{
                ...state,
                requesting:true,
            }
        case commentConstants.FETCH_COMMENT_SUCCESS:
            return{
                ...state,
                requesting:false,
                data: action.data,
                message: action.message,
            }
        case commentConstants.FETCH_COMMENT_FAILURE:
            return{
                ...state,
                requesting:false,
                message: action.message
            }
        case commentConstants.ADD_COMMENT:
            return{
                ...state,
                requesting: true,
            }
        case commentConstants.ADD_COMMENT_SUCCESS:
            return{
                ...state,
                requesting:false,
                message:action.message,
                data: "chưa biết là có trả gì không"
            }
        case commentConstants.ADD_COMMENT_FAILURE:
            return{
                ...state,
                requesting:false,
                message: action.message
            }
        default:
            return state
    }
}