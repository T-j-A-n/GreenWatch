/*import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', gap: '20px', padding: '20px', background: '#e0f2f1' }}>
      <Link to="/upload">Add Complaint</Link>
      <Link to="/view">View Complaints</Link>
    </nav>
  );
}

export default Navbar;
*/
/*
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="container" id="land">
      <h1>GreenWatch</h1>
      <p className="subtitle">Take action for a cleaner world 🌍</p>
      <div className="buttons">
        <button onClick={() => navigate('/add')} className="btn">Add Complaint</button>
        <button onClick={() => navigate('/view')} className="btn">View Complaints</button>
      </div>
    </div>
  );
}*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="container" id="land">
      <h1>GreenWatch</h1>
      <p className="subtitle">Take action for a cleaner world 🌍</p>
      <div className="buttons">
        <button onClick={() => navigate('/add')} className="btn">Add Complaint</button>
        <button onClick={() => navigate('/view')} className="btn">View Complaints</button>
      </div>
    </div>
  );
}
