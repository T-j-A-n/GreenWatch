import React, { useState } from 'react';

export default function ViewComplaints() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="container" id="view">
      <h1>GreenWatch</h1>
      <h2>View Local Complaints</h2>

      <table className="complaint-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Garage</td>
            <td>Garbage Disposal</td>
            <td>Open</td>
            <td>
              <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide' : 'View'}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {showDetails && (
        <div className="details">
          <p><strong>Description:</strong> A pile of garbage left uncollected near the park for 5 days.</p>
          <img src="https://via.placeholder.com/400x200" alt="Garbage" />
          <br /><br />
          <button onClick={() => alert('Upvoted!')}>
            🔼 Upvote
          </button>
        </div>
      )}
    </div>
  );
}
