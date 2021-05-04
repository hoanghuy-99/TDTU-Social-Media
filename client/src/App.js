const { Link, Redirect, Route, BrowserRouter, Switch } = ReactRouterDOM;
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

const App = () =>{
    return (
        <div>
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact>
                    <Login></Login>
                </Route>
                <Route path="/" exact>
                    <Redirect to="/home"/>
                </Route>
                <Route path="/">
                    <Header/>
                    <Navigation>
                        <Switch>
                            <Route path="/home" exact>
                                <Home></Home>
                            </Route>
                            <Route path="/student" exact>
                                <Student_Info>
                                    <Modal_Change_Avatar/>
                                </Student_Info>
                            </Route>
                            <Route path="/admin">
                                <Admin></Admin>
                            </Route>
                            <Route path="/notification" exact>
                                <Notification/>
                            </Route>
                            <Route path="/addNotification" exact>
                                <AddNotification/>
                            </Route>
                            <Route path="/detailNotification" exact>
                                <DetailNotification/>
                            </Route>
                            <Route path="/faculty" exact>
                                <FacultyHome/>
                            </Route>
                            <Route path="/facultyInfo" exact>
                                <FacultyInfo>
                                    <Modal_Change_Avatar/>
                                </FacultyInfo>
                            </Route>
                        </Switch>
                    </Navigation>
                </Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
        </div>
    )
}
export default App