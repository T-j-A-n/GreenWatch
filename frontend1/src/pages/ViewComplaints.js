/*import React, { useEffect, useState } from 'react';

const ViewComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await fetch('http://localhost:8000/complaints');
        const data = await response.json();
        setComplaints(data);
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
    };

    fetchComplaints();
  }, []);

  const viewDetails = (complaint) => {
    setSelectedComplaint(complaint);
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 15px rgba(0,0,0,0.1)', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#2e8b57' }}>GreenWatch</h1>
      <h2 style={{ textAlign: 'center', fontWeight: 'normal', marginBottom: '30px' }}>View Local Complaints</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead>
          <tr style={{ backgroundColor: '#2e8b57', color: 'white' }}>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Title</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Category</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>View</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint._id}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{complaint.title}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{complaint.category}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <button onClick={() => viewDetails(complaint)} style={{ padding: '6px 12px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedComplaint && (
        <div style={{ display: 'block', marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#fff' }}>
          <p><strong>Description:</strong> {selectedComplaint.description}</p>
          <img src={selectedComplaint.image} alt="Complaint" style={{ width: '100%', maxWidth: '400px', borderRadius: '10px', margin: '15px 0' }} />
        </div>
      )}
    </div>
  );
};

export default ViewComplaints;*/

/*import React, { useState, useEffect } from 'react';

function ViewComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    const res = await fetch('http://localhost:8000/complaints');
    const data = await res.json();
    const sortedData = data.sort((a, b) => b.priority - a.priority);
    setComplaints(sortedData);
  };

  const handleUpvote = async (id) => {
    await fetch(`http://localhost:5000/complaints/${id}/upvote`, {
      method: 'PATCH',
    });
    fetchComplaints();
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#2e8b57' }}>GreenWatch</h1>
      <h2 style={{ textAlign: 'center', fontWeight: 'normal', marginBottom: '30px' }}>View Complaints</h2>

      {complaints.map((comp) => (
        <div key={comp._id} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
          <h3>{comp.title}</h3>
          <p><strong>Category:</strong> {comp.category}</p>
          <p><strong>Description:</strong> {comp.description}</p>
          <p><strong>Location:</strong> {comp.location}</p>
          {comp.image && <img src={comp.image} alt="Complaint" style={{ width: '100%', maxWidth: '400px', borderRadius: '10px', marginTop: '10px' }} />}
          <div style={{ marginTop: '10px' }}>
            <button onClick={() => handleUpvote(comp._id)} style={{ background: 'green', color: 'white', padding: '5px 10px', borderRadius: '5px', border: 'none' }}>
              Upvote ({comp.priority})
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewComplaints;
*/

/*import React, { useState, useEffect } from 'react';
import './App.css';

export default function ViewComplaints() {
  const [complaints, setComplaints] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [filters, setFilters] = useState({ status: '', category: '' });

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await fetch('http://localhost:8000/complaints');
      const data = await res.json();
      // Sort by priority (upvotes) descending
      const sorted = data.sort((a, b) => b.priority - a.priority);
      setComplaints(sorted);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await fetch(`http://localhost:8000/complaints/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      fetchComplaints();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpvote = async (id) => {
    try {
      await fetch(`http://localhost:8000/complaints/${id}/upvote`, {
        method: 'PATCH',
      });
      fetchComplaints();
    } catch (err) {
      console.error(err);
    }
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
            <React.Fragment key={complaint._id}>
              <tr>
                <td>{complaint.title}</td>
                <td>{complaint.category}</td>
                <td>{complaint.status}</td>
                <td>
                  <button onClick={() => toggleDetails(complaint._id)}>
                    {expandedId === complaint._id ? 'Hide' : 'View'}
                  </button>
                </td>
              </tr>

              {expandedId === complaint._id && (
                <tr>
                  <td colSpan="4">
                    <div className="details">
                      <p><strong>Description:</strong> {complaint.description}</p>
                      {complaint.image && (
                        <img
                          src={complaint.image}
                          alt="Complaint"
                          style={{ maxWidth: '100%', borderRadius: '8px' }}
                        />
                      )}
                      <br /><br />
                      <label><strong>Update Status:</strong></label>
                      <select
                        value={complaint.status}
                        onChange={(e) => handleStatusUpdate(complaint._id, e.target.value)}
                        style={{ padding: '8px', marginTop: '8px' }}
                      >
                        <option value="Open">Open</option>
                        <option value="In-progress">In-progress</option>
                        <option value="Resolved">Resolved</option>
                      </select>
                      <br /><br />
                      <button
                        onClick={() => handleUpvote(complaint._id)}
                        style={{ marginTop: '10px' }}
                      >
                        🔼 Upvote ({complaint.priority})
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
}*/

/*

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
}*/

import React, { useEffect, useState } from 'react';
import './App.css';

export default function ViewComplaints() {
  const [complaints, setComplaints] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [filters, setFilters] = useState({ status: '', category: '' });

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await fetch('http://localhost:8000/complaints');
      const data = await response.json();
      setComplaints(data);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  };

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await fetch(`http://localhost:8000/complaints/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      fetchComplaints(); // Refresh after update
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleUpvote = async (id) => {
    try {
      await fetch(`http://localhost:8000/complaints/${id}/upvote`, {
        method: 'POST',
      });
      fetchComplaints(); // Refresh after upvote
    } catch (error) {
      console.error('Error upvoting:', error);
    }
  };

  const filteredComplaints = complaints
    .filter((c) => {
      const statusMatch = filters.status ? c.status === filters.status : true;
      const categoryMatch = filters.category ? c.category === filters.category : true;
      return statusMatch && categoryMatch;
    })
    .sort((a, b) => b.upvotes - a.upvotes); // Sort by upvotes descending

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
                <option value="open">Open</option>
                <option value="inprogress">In-progress</option>
                <option value="resolved">Resolved</option>
              </select>
            </th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {filteredComplaints.map((complaint) => (
            <React.Fragment key={complaint._id}>
              <tr>
                <td>{complaint.title}</td>
                <td>{complaint.category}</td>
                <td>{complaint.status}</td>
                <td>
                  <button onClick={() => toggleDetails(complaint._id)}>
                    {expandedId === complaint._id ? 'Hide' : 'View'}
                  </button>
                </td>
              </tr>

              {expandedId === complaint._id && (
                <tr>
                  <td colSpan="4">
                    <div className="details">
                      <p><strong>Description:</strong> {complaint.description}</p>
                      <p><strong>Location:</strong> {complaint.location}</p>
                      <p><strong>Upvotes:</strong> {complaint.upvotes}</p>

                      <br />

                      <label><strong>Update Status:</strong></label>
                      <select
                        value={complaint.status}
                        onChange={(e) => handleStatusUpdate(complaint._id, e.target.value)}
                        style={{ padding: '8px', marginTop: '8px' }}
                      >
                        <option value="open">Open</option>
                        <option value="inprogress">In-progress</option>
                        <option value="resolved">Resolved</option>
                      </select>

                      <br /><br />
                      <button onClick={() => handleUpvote(complaint._id)} style={{ marginTop: '10px' }}>
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
