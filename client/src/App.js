const { Link, Route, BrowserRouter, Switch } = ReactRouterDOM;
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
const App = () =>{
    return (
        <div>
        <BrowserRouter>
            <Header/>
            <Navigation>
                <Switch>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/student">
                        <Student_Info>
                            <Modal_Change_Avatar/>
                        </Student_Info>
                    </Route>
                    <Route path="/admin">
                        <Admin></Admin>
                    </Route>
                    <Route path="/notification">
                        <Notification/>
                    </Route>
                    <Route path="/addNotification">
                        <AddNotification/>
                    </Route>
                    <Route path="/detailNotification">
                        <DetailNotification/>
                    </Route>
                    <Route path="/faculty">
                        <FacultyHome/>
                    </Route>
                    <Route path="/facultyInfo">
                        <FacultyInfo>
                            <Modal_Change_Avatar/>
                        </FacultyInfo>
                    </Route>
                </Switch>
            </Navigation>
            <Footer/>
        </BrowserRouter>
        </div>
    )
}
export default App