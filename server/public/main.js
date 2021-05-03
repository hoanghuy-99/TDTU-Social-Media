
const App = () => {
    return (
        <div>
        <BrowserRouter>
            <Header/>
            <Navigation>
                <Route path="/studentInfo">
                    <Student_Info>
                        <Modal_Change_Avatar/>
                    </Student_Info>
                </Route>
                <Route path="/addFaculty">
                    <Admin></Admin>
                </Route>
                <Route path="/noti">
                    <Notification/>
                </Route>
                <Route path="/addNoti">
                    <AddNotification/>
                </Route>
                <Route path="/detailNoti">
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
            </Navigation>
            <Footer/>
        </BrowserRouter>
        </div>
)}

ReactDOM.render(<App/>, document.querySelector('#root'));