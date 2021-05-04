const {createStore,applyMiddleware,compose} = redux
const thunk = redux-thunk
import rootReducer from './reducers/index.js'

const configureStore = () => {
    const middleware = [thunk]
    const store = createStore(rootReducer, compose(
      applyMiddleware(...middleware)))
    return store
}

export default configureStore