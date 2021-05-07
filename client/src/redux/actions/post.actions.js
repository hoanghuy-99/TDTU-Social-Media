import postConstants from '../constants/post.constants'
import setAlert  from './alert.actions'
import { requestPost, requestNewPost } from '../../services/post.services'

const fetchPost = () => {
  function request(){
    return { 
      type: postConstants.FETCH_POST
    }
  }

  function success(data, message){
    return {
      type: postConstants.FETCH_POST_SUCCESS,
      data,
      message
    }
  }

  function failure(message){
    return {
      type: postConstants.FETCH_POST_FAILURE,
      message
    }
  }

  return async(dispatch) => {
    dispatch(request())
    const res = await requestPost()
    if(res.code === 0){
      dispatch(success(res.data, 'Lay du lieu thanh cong'))
    } else {
      dispatch(failure('Lay du lieu that bai'))
    }
  }
}

const addPost = (content, video) => {
  function request(){
    return { 
      type: postConstants.ADD_POST
    }
  }

  function success(data, message){
    return {
      type: postConstants.ADD_POST_SUCCESS,
      data,
      message
    }
  }

  function failure(message){
    return {
      type: postConstants.ADD_POST_FAILURE,
      message
    }
  }

  return async(dispatch) => {
    dispatch(request())
    const res = await requestNewPost(content,video)
    if(res.code === 0){
      const message = res.message
      dispatch(success(res.data, message))
      dispatch(setAlert(message, 'success'))
    } else {
      const message = res.message
      dispatch(failure(message))
      dispatch(setAlert(message, 'danger'))
    }
  }
}

export {fetchPost, addPost}