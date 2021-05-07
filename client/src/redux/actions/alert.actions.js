import alert  from '../constants/alert.constants'
import { v4 as uuidv4 } from 'uuid'

const setAlert = (message, alertType, timeout = 5000) => dispatch => {
  const id = uuidv4()
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