import React from "react";
import NavbarTop from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import DettaglioInteressi from "./components/DettaglioInteressi";
import MayKnow from './components/MayKnow';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProfileProvider } from './redux/contexts/ProfileContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <ProfileProvider>
            <Router>
                <div className="App">
                    <header>
                        <NavbarTop />
                    </header>
                    <main>
                        <div>
                            <Routes>
                                <Route path="/user-profile" element={<UserProfile />} />
                                <Route path="/risultati/:sezione" element={<DettaglioInteressi />} />
                            </Routes>
                        </div>
                        <section> <MayKnow /></section>
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </Router>
        </ProfileProvider>
    );
}

export default App;