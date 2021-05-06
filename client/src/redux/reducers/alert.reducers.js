import { alert } from '../constants/alert.constants'

const initialState = []

export default (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case alert.ALERT_SUCCESS:
      return [...state, payload]
    case alert.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload)
    default:
      return state
  }
}