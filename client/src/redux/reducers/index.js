const {combineReducers} = Redux
import userReducer from './user.reducers'
import departmentReducer from './department.reducers'
import notificationReducer from './notification.reducers'
const rootReducer = combineReducers({
  user: userReducer,
  department: departmentReducer,
  notification: notificationReducer
})

export default rootReducer