import postConstants from '../constants/post.constants'
import setAlert  from './alert.actions'
import { requestPost, requestNewPost, requestDeletePost,
   requestPostById, requestChangePostById, requestNewCommentPost,
    requestDeleteComment,requestChangeComment } from '../../services/post.services'

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

const fetchPostById = (id) => {
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
    const res = await requestPostById(id)
    if(res.code === 0){
      dispatch(success(res.data, 'Lay du lieu thanh cong'))
    } else {
      dispatch(failure('Lay du lieu that bai'))
    }
  }
}

const newPost = (content, video) => {
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
function changeInfoPost(id,content,video){
  function request(){
    return { 
      type: postConstants.CHANGE_POST
    }
  }

  function success(data, message){
    return {
      type: postConstants.CHANGE_POST_SUCCESS,
      data,
      message
    }
  }

  function failure(message){
    return {
      type: postConstants.CHANGE_POST_FAILURE,
      message
    }
  }

  return async(dispatch) => {
    dispatch(request())
    const res = await requestChangePostById(id,content,video)
    if(res.code === 0){
      dispatch(success(res.data, 'Lay du lieu thanh cong'))
    } else {
      dispatch(failure('Lay du lieu that bai'))
    }
  }
}
function deletePost(id){
  function request(){
    return { 
      type: postConstants.DELETE_POST
    }
  }
  function success(message,id){
    return {
      type: postConstants.DELETE_POST_SUCCESS,
      message,
      id
    }
  }
  function failure(message){
    return {
      type: postConstants.DELETE_POST_FAILURE,
      message
    }
  }
  return async(dispatch) => {
    dispatch(request())
    const res = await requestDeletePost(id)
    if(res.code == 0){
      dispatch(success('Xóa thành công',id))
    }
    else{
      dispatch(failure('Xóa thất bại'))
    }
  }
}

const newCmtPost = (idPost,content) => {
  function request(){
    return { 
      type: postConstants.ADD_CMT_POST
    }
  }

  function success(data,idPost,message){
    return {
      type: postConstants.ADD_CMT_POST_SUCCESS,
      data,
      idPost,
      message
    }
  }

  function failure(message){
    return {
      type: postConstants.ADD_CMT_POST_FAILURE,
      message
    }
  }

  return async(dispatch) => {
    dispatch(request())
    const res = await requestNewCommentPost(idPost,content)
    if(res.code === 0){
      const message = res.message
      dispatch(success(res.data,idPost,message))
      dispatch(setAlert(message, 'success'))
    } else {
      const message = res.message
      dispatch(failure(message))
      dispatch(setAlert(message, 'danger'))
    }
  }
}

function deleteComment(idCmt,idPost){
  function request(){
    return { 
      type: postConstants.DELETE_CMT_POST
    }
  }
  function success(message,idCmt,idPost){
    return {
      type: postConstants.DELETE_CMT_POST_SUCCESS,
      message,
      idCmt,
      idPost,
    }
  }
  function failure(message){
    return {
      type: postConstants.DELETE_CMT_POST_FAILURE,
      message
    }
  }
  return async(dispatch) => {
    dispatch(request())
    const res = await requestDeleteComment(idCmt)
    if(res.code == 0){
      dispatch(success('Xóa thành công',idCmt,idPost))
    }
    else{
      dispatch(failure('Xóa thất bại'))
    }
  }
}

function changeComment(idCmt,idPost,content){
  function request(){
    return { 
      type: postConstants.CHANGE_CMT_POST
    }
  }

  function success(data,idPost,message){
    return {
      type: postConstants.CHANGE_CMT_POST_SUCCESS,
      data,
      idPost,
      message
    }
  }

  function failure(message){
    return {
      type: postConstants.CHANGE_CMT_POST_FAILURE,
      message
    }
  }

  return async(dispatch) => {
    dispatch(request())
    const res = await requestChangeComment(idCmt,content)
    if(res.code === 0){
      dispatch(success(res.data,idPost,'Lay du lieu thanh cong'))
    } else {
      dispatch(failure('Lay du lieu that bai'))
    }
  }
}
export {changeInfoPost,fetchPost, newPost,deletePost,fetchPostById,newCmtPost,deleteComment,changeComment}