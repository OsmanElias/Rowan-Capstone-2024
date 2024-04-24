// // IMPORTS HERE
// import './main.css';
// import './login.css';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import WelcomeMessage from './components/WelcomeMessage'
// import SortFilterMenu from './components/SortFilterMenu'
// import Login from '../src/pages/Login';
// // import FetchAndDisplayFromQueue from './FetchAndDisplayFromQueue';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<><WelcomeMessage/><SortFilterMenu/></>} />
//         <Route path="/login" element={<Login />} />
//         {/* More routes can be added here */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// IMPORTS HERE
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import SortFilterMenu from './components/SortFilterMenu';
// import FetchAndDisplayFromQueue from './FetchAndDisplayFromQueue';

function App () {
  return (
  // { /*CALL COMPONENTS/FUNCTIONS HERE*/ }
    <>
    <WelcomeMessage/>
    <SortFilterMenu/>
    {/* <FetchAndDisplayFromQueue/> */}
    </>
  )
}

export default App;