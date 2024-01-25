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
import "./App.css";

function App() {
    const [isLoginVisible, setLoginVisibility] = useState(true);
    
    const handleLogout = () => {
        setLoginVisibility(true);
    };

    return (
        <ProfileProvider>
            <Router>
            {isLoginVisible && <Login />}
                        <header>
                            <NavbarTop onLogout={handleLogout} />
                        </header>
                <Container className="App">
                    <>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/user-profile" element={<UserProfile />} />
                            <Route path="/user/:userId" element={<UserDetail />} />
                            <Route path="/jobs" element={<Jobs />} />
                            <Route path="/jobs/:jobId" element={<SingleJob />} />
                            <Route
                                path="/risultati/:sezione"
                                element={<DettaglioInteressi />}
                            />
                        </Routes>
                    </>
                </Container>
            </Router>
        </ProfileProvider>
    );
}

export default App;