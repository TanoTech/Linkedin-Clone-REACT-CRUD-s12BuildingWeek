
import React from "react";
import NavbarTop from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DettaglioInteressi from "./components/DettaglioInteressi";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <div className="App">
        <NavbarTop />
        <UserProfile />
        <Routes>
          <Route path="/risultati/:sezione" element={<DettaglioInteressi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;