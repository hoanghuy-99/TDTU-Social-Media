const { createStore, applyMiddleware, compose } = Redux
const thunk = ReduxThunk.default
import rootReducer from '../reducers/index.js'

const configureStore = () => {
  
  const middleware = [thunk]
  const store = createStore(rootReducer, compose(applyMiddleware(...middleware)))
  return store
}

export default configureStore