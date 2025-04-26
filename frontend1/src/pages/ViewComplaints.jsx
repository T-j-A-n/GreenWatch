import React, { useState } from 'react';
import './App.css';

const dummyComplaints = [
  {
    id: 1,
    title: 'Garage',
    category: 'Garbage Disposal',
    status: 'Open',
    description: 'A pile of garbage is left uncollected near the park.',
    image: 'https://via.placeholder.com/400x200',
  },
  {
    id: 2,
    title: 'Street Light',
    category: 'Electricity',
    status: 'In-progress',
    description: 'Street light not working near school.',
    image: 'https://via.placeholder.com/400x200',
  },
];

export default function ViewComplaints() {
  const [complaints, setComplaints] = useState(dummyComplaints);
  const [expandedId, setExpandedId] = useState(null);
  const [filters, setFilters] = useState({ status: '', category: '' });

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusUpdate = (id, newStatus) => {
    setComplaints((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
    );
  };

  const filteredComplaints = complaints.filter((c) => {
    const statusMatch = filters.status ? c.status === filters.status : true;
    const categoryMatch = filters.category ? c.category === filters.category : true;
    return statusMatch && categoryMatch;
  });

  return (
    <div className="container">
      <h1>GreenWatch</h1>
      <h2>View Local Complaints</h2>

      <table className="complaint-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>
              Category
              <br />
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                style={{ width: '100%', marginTop: '5px' }}
              >
                <option value="">All</option>
                <option value="Electricity">Electricity</option>
                <option value="Road">Road</option>
                <option value="Water">Water</option>
                <option value="Garbage Disposal">Garbage Disposal</option>
                <option value="Noise">Noise</option>
                <option value="Other">Other</option>
              </select>
            </th>
            <th>
              Status
              <br />
              <select
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
                style={{ width: '100%', marginTop: '5px' }}
              >
                <option value="">All</option>
                <option value="Open">Open</option>
                <option value="In-progress">In-progress</option>
                <option value="Resolved">Resolved</option>
              </select>
            </th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {filteredComplaints.map((complaint) => (
            <React.Fragment key={complaint.id}>
              <tr>
                <td>{complaint.title}</td>
                <td>{complaint.category}</td>
                <td>{complaint.status}</td>
                <td>
                  <button onClick={() => toggleDetails(complaint.id)}>
                    {expandedId === complaint.id ? 'Hide' : 'View'}
                  </button>
                </td>
              </tr>

              {expandedId === complaint.id && (
                <tr>
                  <td colSpan="4">
                    <div className="details">
                      <p><strong>Description:</strong> {complaint.description}</p>
                      <img src={complaint.image} alt="Issue" style={{ maxWidth: '100%', borderRadius: '8px' }} />
                      <br /><br />
                      <label><strong>Update Status:</strong></label>
                      <select
                        value={complaint.status}
                        onChange={(e) => handleStatusUpdate(complaint.id, e.target.value)}
                        style={{ padding: '8px', marginTop: '8px' }}
                      >
                        <option value="Open">Open</option>
                        <option value="In-progress">In-progress</option>
                        <option value="Resolved">Resolved</option>
                      </select>
                      <br /><br />
                      <button onClick={() => alert('Upvoted!')} style={{ marginTop: '10px' }}>
                        🔼 Upvote
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
