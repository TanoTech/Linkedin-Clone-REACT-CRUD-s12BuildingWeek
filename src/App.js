import NavbarTop from './components/Navbar';
import UserProfile from './components/UserProfile';
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