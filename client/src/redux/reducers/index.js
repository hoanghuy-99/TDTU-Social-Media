const {combineReducers} = Redux
import userReducer from './user.reducers'
import departmentReducer from './department.reducers'
const rootReducer = combineReducers({
  user: userReducer,
  department: departmentReducer
})

export default rootReducer