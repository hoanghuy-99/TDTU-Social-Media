import postConstants from '../constants/post.constants'
import setAlert  from './alert.actions'
import { requestPost, requestNewPost, requestDeletePost,
   requestPostById, requestChangePostById, requestNewCommentPost,
    requestDeleteComment,requestChangeComment, requestImagePost } from '../../services/post.services'

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

const newPost = (content,video,imgPost) => {
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
    content = content || undefined
    video = video || undefined
    imgPost = imgPost || undefined
    console.log("imgPost:123",imgPost);
    const res = await requestNewPost(content,video)
    if(res.code === 0){
      const message = res.message
      dispatch(success(res.data, message))
      if(imgPost){
        dispatch(addImagePost(res.data.id,imgPost))
      }
    } else {
      const message = res.message
      dispatch(failure(message))
    }
  }
}
function changeInfoPost(id,content,video,imgPost){
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
    content = content || undefined
    video = video || undefined
    imgPost = imgPost || undefined
    dispatch(request())
    const res = await requestChangePostById(id,content,video)
    if(res.code === 0){
      dispatch(success(res.data, 'Lay du lieu thanh cong'))
      if(imgPost){
        dispatch(addImagePost(res.data.id,imgPost))
      }
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
      dispatch(success('X??a th??nh c??ng',id))
    }
    else{
      dispatch(failure('X??a th???t b???i'))
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
      dispatch(success('X??a th??nh c??ng',idCmt,idPost))
    }
    else{
      dispatch(failure('X??a th???t b???i'))
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

const addImagePost = (idPost,image) => {
  function request(){
    return { 
      type: postConstants.ADD_CMT_POST
    }
  }

  function success(message){
    return {
      type: postConstants.ADD_CMT_POST_SUCCESS,
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
    console.log("image123",image);
    var dataImg = new FormData()
    dataImg.append('image',image,'fileName')
    console.log("dataImg",dataImg);
    dispatch(request())
    const res = await requestImagePost(idPost,dataImg)
    if(res.code === 0){
      const message = res.message
      dispatch(success(message))
    } else {
      const message = res.message
      dispatch(failure(message))
    }
  }
}
export {changeInfoPost,fetchPost, newPost,deletePost,fetchPostById,newCmtPost,deleteComment,changeComment}