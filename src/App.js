import React, { useState } from "react";
import NavbarTop from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import DettaglioInteressi from "./components/DettaglioInteressi";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProfileProvider } from "./redux/contexts/ProfileContext";
import { Container } from "react-bootstrap";
import Jobs from "./components/Jobs";
import Home from "./components/Home";
import UserDetail from "./components/UserDetails";
import SingleJob from "./components/SingleJob";
import Login from "./components/Login";
import Error404 from './components/Error404'
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