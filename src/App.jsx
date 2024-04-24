// IMPORTS HERE
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeMessage from './components/WelcomeMessage'
import SortFilterMenu from './components/SortFilterMenu'
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import './main.css';
import './login.css';
// import FetchAndDisplayFromQueue from './FetchAndDisplayFromQueue';

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><WelcomeMessage/><SortFilterMenu/></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* More routes can be added here */}
      </Routes>
    </Router>
  );
}

export default App;