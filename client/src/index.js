import App from './App.js'
const { Provider } = Redux
import configureStore from './redux/store/store'
const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('root')
);
