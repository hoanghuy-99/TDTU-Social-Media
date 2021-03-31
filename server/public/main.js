

const App = () => {
    const [count, setCount] = useState(0)
    const click = ()=>{
        setCount(c => c + 1)
    }
    return (
        <BrowserRouter>
            <div>{count}</div>
            <button onClick={click}>Add count 2</button>
            <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            </ul>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
)}

const Login = () => <h1>Login</h1>
const Register = () => <h1>Register</h1>

ReactDOM.render(<App/>, document.querySelector('#root'));