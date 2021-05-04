import facultyConstants from "../constants/faculty.contans"

const initialState = {
    loggedIn: false,
    requesting: false,
    message: undefined,
    data: undefined,
}

export default (sate = initialState, action) =>{
    switch(action.type){
        case facultyConstants.FETCH_FACULTY:
            return{
                ...sate,
                requesting:true
            }
        case facultyConstants.FETCH_FACULTY_SUCCESS:
            return{
                ...state,
                requesting:false,
                data: action.data,
                message: action.message,
            }
        case facultyConstants.FETCH_FACULTY_FAILURE:
            return{
                ...state,
                requesting:false,
                message: action.message,
            }
        case facultyConstants.REGISTER_FACULTY:
            return{
                ...state,
                requesting:true,
            }
        case facultyConstants.REGISTER_FACULTY_SUCCESS:
            return{
                ...sate,
                requesting:false,
                message:action.message,
                data: "chưa biết là có trả về hay không",
            }
        case facultyConstants.REGISTER_FACULTY_FAILURE:
            return{
                ...sate,
                requesting:false,
                message:action.message
            }
        default:
            return state
    }
}