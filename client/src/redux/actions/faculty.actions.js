import facultyConstants from "../constants/faculty.constants";

function fetchFaculty(){
    function request(){
        return{
            type:facultyConstants.FETCH_FACULTY
        }
    }
    function success(data,message){
        return{
            type: facultyConstants.FETCH_FACULTY_SUCCESS,
            data,
            message
        }
    }
    function failure(message){
        return{
            type: facultyConstants.REGISTER_FACULTY_FAILURE,
            message
        }
    }
    return async (dispatch) => {
        dispatch(request())
        const res = await requestFacutly()
        if(res.code == 0){
            dispatch(success(res.data,'Lấy dữ liệu thành công'))
        }
        else{
            dispatch(failure('Không lấy được dữ liệu'))
        }
    }
}

function fetchFacultyById(){
    function request(){
        return{
            type:facultyConstants.FETCH_FACULTY
        }
    }
    function success(data,message){
        return{
            type: facultyConstants.FETCH_FACULTY_SUCCESS,
            data,
            message
        }
    }
    function failure(message){
        return{
            type: facultyConstants.REGISTER_FACULTY_FAILURE,
            message
        }
    }
    return async (dispatch) => {
        dispatch(request())
        const res = await requestFacutlyById()
        if(res.code == 0){
            dispatch(success(res.data,'Lấy dữ liệu thành công'))
        }
        else{
            dispatch(failure('Không lấy được dữ liệu'))
        }
    }
}

