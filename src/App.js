import Formation from './components/Formation';
import Activity from './components/Activity';
import NavbarTop from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Formation/>
      <Activity />
    </div>
  );
}

export default App;