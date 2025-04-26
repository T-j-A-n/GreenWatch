import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AddComplaint from './pages/AddComplaint';
import ViewComplaints from './pages/ViewComplaints';
import './App.css'; // styling

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add" element={<AddComplaint />} />
        <Route path="/view" element={<ViewComplaints />} />
      </Routes>
    </Router>
  );
}

export default App;
