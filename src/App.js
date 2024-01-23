import React from "react";
import NavbarTop from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import DettaglioInteressi from "./components/DettaglioInteressi";
import MayKnow from './components/MayKnow';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarTop />
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/risultati/:sezione" element={<DettaglioInteressi />} />
        </Routes>
        <MayKnow />
        <Footer />
      </div>
    </Router>
  );
}

export default App;