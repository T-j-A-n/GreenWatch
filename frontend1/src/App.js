import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AddComplaint from './pages/AddComplaint';
import ViewComplaints from './pages/ViewComplaints';
import Register from './pages/Register';
import Login from './pages/';


import './App.css'; // styling

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loggedin" element={<LandingPage />} />
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddComplaint />} />
        <Route path="/view" element={<ViewComplaints />} />
      </Routes>
    </Router>
  );
}

export default App;
