import { requestDepartment } from "../../services/department.services";

import departmentConstants from "../constants/department.constants"

function fetchDepartment(){
    function request(){
        return {
            type: departmentConstants.FETCH_DEPARTMENT
        }
    }
    function success(data,message){
        return{
            type: departmentConstants.FETCH_DEPARTMENT_SUCCESS,
            data,
            message
        }
    }
    function failure(message){
        return{
            type: departmentConstants.FETCH_DEPARTMENT_FAILURE,
            message
        }
    }
    return async (dispatch) => {
        dispatch(request())
        const res = await requestDepartment()
        if(res.code == 0){
            dispatch(success(res.data,'Lấy dữ liệu thành công'))
        }
        else{
            dispatch(failure('Không lấy được dữ liệu'))
        }
    }
}
export {fetchDepartment}