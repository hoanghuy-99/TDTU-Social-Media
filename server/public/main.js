
const {Link, Route, BrowserRouter, Switch} = ReactRouterDOM;
const {useState} = React

const App = () => {
    const [count, setCount] = useState(0)
    const click = ()=>{
        setCount(count + 1)
    }
    return (
        <BrowserRouter>
            <div>{count}</div>
            <button onClick={click}></button>

            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            </ul>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
)}

const Login = () => <h1>Login</h1>
const Register = () => <h1>Register</h1>

ReactDOM.render(<App />, document.querySelector('#root'));