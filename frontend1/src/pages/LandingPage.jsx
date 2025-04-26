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
}
