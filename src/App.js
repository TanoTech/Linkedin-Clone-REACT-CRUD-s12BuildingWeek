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

function App() {
    return (
        <ProfileProvider>
            <Router>
                <header>
                    <NavbarTop />
                </header>
                <Container>
                    <div className="App">
                        <main>
                            <div>
                                <Routes>
                                    <Route path="/user-profile" element={<UserProfile />} />
                                    <Route
                                        path="/risultati/:sezione"
                                        element={<DettaglioInteressi />}
                                    />
                                </Routes>
                            </div>
                            <section>
                                {" "}
                                <MayKnow />
                                <News />
                            </section>
                        </main>
                    </div>
                </Container>
                <Footer />
            </Router>
        </ProfileProvider>
    );
}

export default App;