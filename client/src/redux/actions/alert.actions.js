import alert  from '../constants/alert.constants'
const uuid = uuidv4

const setAlert = (message, alertType, timeout = 5000) => dispatch => {
  const id = uuid
  dispatch({
    type: alert.ALERT_SUCCESS,
    payload: {message, alertType, id}
  })
  setTimeout(() => {
    dispatch({
      type: alert.REMOVE_ALERT,
      payload: id
    }),
    timeout
  })
}

export default setAlert