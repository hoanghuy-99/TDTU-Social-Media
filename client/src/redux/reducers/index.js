const {combineReducers} = Redux
import userReducer from './user.reducers'
import alertReducer from './alert.reducers'

const rootReducer = combineReducers({
  alert: alertReducer,
  user: userReducer
})

export default rootReducer