import departmentConstants from "../constants/department.constants"

const initialState = {
    loggedIn: false,
    requesting: false,
    message: undefined,
    data: undefined,
}

export default (state = initialState , action)=>{
    switch(action.type){
        case departmentConstants.FETCH_DEPARTMENT:
            return{
                ...state,
                requesting:true,
            }
        case departmentConstants.FETCH_DEPARTMENT_SUCCESS:
            return{
                ...state,
                requesting:false,
                data: action.data,
                message: action.message,
            }
        case departmentConstants.FETCH_DEPARTMENT_FAILURE:
            return{
                ...state,
                requesting:false,
                message: action.message
            }
        default:
            return state
    }
}