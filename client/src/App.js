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
            <Switch>
                <Route exact strict path="/login" >
                    {loggedIn && <Redirect to="/home"/>}
                    <Login></Login>
                </Route>
                <Redirect exact from="/" to="/home" />
                <Route path="/">
                    {!getToken() && <Redirect to="/login"/>}
                    <Header/>
                    <Navigation>
                        <Switch>
                            <Route exact strict path="/home" >
                                <Home>
                                <Modal_Post/>
                                </Home>
                            </Route>
                            <Route exact strict path="/student" >
                                <Student_Info>
                                    <Modal_Change_Avatar/>
                                </Student_Info>
                            </Route>
                            <Route exact strict path="/admin">
                                <Admin></Admin>
                            </Route>
                            <Route exact strict path="/notification">
                                <Notification/>
                            </Route>
                            <Route exact strict path="/addNotification/:id">
                                <AddNotification/>
                            </Route>
                            <Route exact strict path="/editPost/:id">
                                <EditPost></EditPost>
                            </Route>
                            <Route exact strict path="/editNotification/:id">
                                <EditNotification/>
                            </Route>
                            <Route exact strict path="/notification/:id">
                                <DetailNotification/>
                            </Route>
                            <Route exact strict path="/faculty">
                                <FacultyHome>
                                </FacultyHome>
                            </Route>
                            <Route exact strict path="/facultyInfo">
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