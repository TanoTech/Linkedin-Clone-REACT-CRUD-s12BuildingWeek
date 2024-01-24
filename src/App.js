import React from "react";
import NavbarTop from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import DettaglioInteressi from "./components/DettaglioInteressi";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProfileProvider } from "./redux/contexts/ProfileContext";
import { Container } from "react-bootstrap";
import './App.css';
import Jobs from "./components/Jobs";
import Home from "./components/Home";
import UserDetail from "./components/UserDetails";

function App() {
    return (
        <ProfileProvider>
            <Router>
                <Container className="App">
                        <>
                        <header>
                    <NavbarTop />
                </header>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/user-profile" element={<UserProfile />} />
                                    <Route path="/jobs" element={<Jobs />} />
                                    <Route path="/user/:userId" element={<UserDetail />} />
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