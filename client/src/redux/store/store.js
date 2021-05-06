const { createStore, applyMiddleware, compose } = Redux
const thunk = ReduxThunk
import rootReducer from '../reducers/index.js'

const configureStore = () => {
  const middleware = []
  const store = createStore(rootReducer)
  return store
}

export default configureStore