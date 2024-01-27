import React, { useState } from "react";
import NavbarTop from "./components/Global/Navbar";
import UserProfile from "./components/YourProfile/UserProfile";
import DettaglioInteressi from "./components/YourProfile/DettaglioInteressi";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProfileProvider } from "./redux/contexts/ProfileContext";
import { Container } from "react-bootstrap";
import Jobs from "./components/Jobs/Jobs";
import Home from "./components/Home/Home";
import UserDetail from "./components/YourProfile/UserDetails";
import SingleJob from "./components/Jobs/SingleJob";
import Login from "./components/Global/Login";
import Error404 from './components/Global/Error404'
import MyNetwork from "./components/Connection/MyConnection";
import "./App.css";

function App() {
    const [showNavbar, setShowNavbar] = useState(true);

    return (
        <ProfileProvider>
            <Router>
                <header>
                    {showNavbar && <NavbarTop />}
                </header>
                <Container className="App">
                    <>
                        <Routes>
                            <Route path="/" element={<Login setShowNavbar={setShowNavbar} />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/user-profile" element={<UserProfile />} />
                            <Route path="/user/:userId" element={<UserDetail />} />
                            <Route path="/jobs" element={<Jobs />} />
                            <Route path="/jobs/:jobId" element={<SingleJob />} />
                            <Route path='/my-network' element={<MyNetwork />} />
                            <Route
                                path="/risultati/:sezione"
                                element={<DettaglioInteressi />}
                            />
                            <Route path="*" element={<Error404 /> } />
                        </Routes>
                    </>
                </Container>
            </Router>
        </ProfileProvider>
    );
}

export default App;