const { Redirect, Route, BrowserRouter, Switch } = ReactRouterDOM
const { useDispatch,useSelector } = ReactRedux
const { useEffect } = React
import Student_Info from './page/Student_Info/index'
import Header from './page/Header/Header'
import Navigation from './page/Navigation/Navigation'
import Footer from './page/Footer/Footer'
import Modal_Change_Avatar from './page/Modal_Avatar/index'
import Admin from './page/Admin/Admin'
import Notification from './page/Notification/Notification'
import AddNotification from './page/Add_Notification/AddNotification'
import DetailNotification from './page/Detail_Notification/DetailNotification'
import FacultyHome from './page/FacultyHome/FacultyHome'
import FacultyInfo from './page/Faculty_Info/FacultyInfo'
import Home from './page/Home/Home'
import Login from './page/Login/Login'
import Modal_Post from './page/Modal_Post/index'
import EditNotification from './page/Edit_Notification/EditNotification'
import EditPost from './page/Edit_Post/index'
import { checkLogin, fetchUserById } from './redux/actions/user.actions'
import { getId, getToken } from './cookie'
import useSocket from './clientSocket'
const App = () =>{
    const loggedIn = useSelector(state => state.user.loggedIn)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(getToken()){
        dispatch(checkLogin())
        }
    }, [getToken()])

    useEffect(()=>{
        if(loggedIn){
        dispatch(fetchUserById(getId()))
        }
    }, [loggedIn])
    
    return (
        <div>
        <BrowserRouter>
            {!getToken() && <Redirect to="/login"/>}
            <Switch>
                <Route exact={true} path="/login" >
                    <Login></Login>
                </Route>
                <Route exact={true} path="/" >
                    {
                        console.log("Redirect to Home",window.location.pathname)
                    }
                    <Redirect to="/home"/>
                </Route>
                <Route path="/">
                    <Header/>
                    <Navigation>
                        <Switch>
                            <Route exact={true} path="/home" >
                                <Home>
                                <Modal_Post/>
                                </Home>
                            </Route>
                            <Route exact={true} path="/student" >
                                <Student_Info>
                                    <Modal_Change_Avatar/>
                                </Student_Info>
                            </Route>
                            <Route exact={true} path="/admin" >
                                <Admin></Admin>
                            </Route>
                            <Route exact={true} path="/notification" >
                                <Notification/>
                            </Route>
                            <Route exact={true} path="/notification/:id" >
                                <DetailNotification/>
                            </Route>
                            <Route exact={true} path="/faculty" >
                                <FacultyHome>
                                </FacultyHome>
                            </Route>
                            <Route exact={true} path="/facultyInfo" >
                                <FacultyInfo>
                                    <Modal_Change_Avatar/>
                                </FacultyInfo>
                            </Route>
                        </Switch>
                    </Navigation>
                    <Footer/>
                </Route>
            </Switch>
        </BrowserRouter>
        </div>
    )
}
export default App