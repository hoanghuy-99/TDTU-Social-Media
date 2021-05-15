const {combineReducers} = Redux
import userReducer from './user.reducers'
import departmentReducer from './department.reducers'
import notificationReducer from './notification.reducers'
import facultyReducer from './faculty.reducers'
import postReducer from './post.reducers'
import alertReducer from './alert.reducers'

const rootReducer = combineReducers({
  alert: alertReducer,
  user: userReducer,
  department: departmentReducer,
  notification: notificationReducer,
  faculty: facultyReducer,
  post: postReducer
})

export default rootReducer