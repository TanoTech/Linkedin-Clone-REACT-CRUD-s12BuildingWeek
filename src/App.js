import React from "react";
import NavbarTop from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import DettaglioInteressi from "./components/DettaglioInteressi";
import MayKnow from "./components/MayKnow";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProfileProvider } from "./redux/contexts/ProfileContext";
import { Container } from "react-bootstrap";
import './App.css';
import Jobs from "./components/Jobs";
import News from "./components/News";
import Home from "./components/Home";

function App() {
    return (
        <ProfileProvider>
            <Router>
                <header>
                    <NavbarTop />
                </header>
                <Container className="App">
                        <main>
                            <div>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/user-profile" element={<UserProfile />} />
                                    <Route path="/jobs" element={<Jobs />} />
                                    <Route
                                        path="/risultati/:sezione"
                                        element={<DettaglioInteressi />}
                                    />
                                </Routes>
                            </div>
                        </main>
                </Container>
            </Router>
        </ProfileProvider>
    );
}

export default App;