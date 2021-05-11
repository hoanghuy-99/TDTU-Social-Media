const {combineReducers} = Redux
import userReducer from './user.reducers'
import departmentReducer from './department.reducers'
import notificationReducer from './notification.reducers'
import facultyReducer from './faculty.reducers'
import postReducer from './post.reducers'
const rootReducer = combineReducers({
  user: userReducer,
  department: departmentReducer,
  notification: notificationReducer,
  faculty: facultyReducer,
  post: postReducer
})

export default rootReducer