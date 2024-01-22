import Formation from './components/Formation';
import Activity from './components/Activity';
import NavbarTop from './components/Navbar';
import UserProfile from './components/UserProfile';
import Interessi from './components/Interessi';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavbarTop />
      <UserProfile />
    </div>

  );
}

export default App;