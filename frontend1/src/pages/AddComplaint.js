/*import React, { useState } from 'react';

const UploadComplaint = () => {
  const [formData, setFormData] = useState({
    userName: '',
    title: '',
    description: '',
    category: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const complaintData = {
      ...formData,
      image: "sample.jpg", // Placeholder for now
    };

    try {
      const response = await fetch('http://localhost:8000/complaints', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(complaintData)
      });

      if (response.ok) {
        alert('Complaint submitted successfully!');
        setFormData({
          userName: '',
          title: '',
          description: '',
          category: '',
          location: '',
        });
      } else {
        const errorText = await response.text();
        alert('Error: ' + errorText);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      alert('Network error!');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f8f5', padding: '40px' }}>
      <div style={{ maxWidth: '600px', margin: 'auto', backgroundColor: '#ffffff', padding: '30px', borderRadius: '10px', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#2e8b57' }}>GreenWatch</h1>
        <h2 style={{ textAlign: 'center', fontWeight: 'normal' }}>Add complaint</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="userName" placeholder="Your Name" value={formData.userName} onChange={handleChange} required /><br /><br />
          <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required /><br /><br />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} style={{height: '200px', width: '100%'}} required /><br /><br />
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Electricity">Electricity</option>
            <option value="Road">Road</option>
            <option value="Water">Water</option>
            <option value="Garbage">Garbage Disposal</option>
            <option value="Noise">Noise</option>
            <option value="Other">Other</option>
          </select><br /><br />
          <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required /><br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UploadComplaint;*/

/*import React, { useState } from 'react';

function UploadComplaint() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: fileReader.result }));
      };
      fileReader.readAsDataURL(files[0]);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:8000/complaints', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...formData, priority: 0 }) // setting initial upvotes as 0
    });
    alert('Complaint submitted!');
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', backgroundColor: '#ffffff', padding: '30px', borderRadius: '10px', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#2e8b57' }}>GreenWatch</h1>
      <h2 style={{ textAlign: 'center', fontWeight: 'normal' }}>Add Complaint</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required/><br/><br/>

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} style={{ width: '100%', height: '100px' }} required/><br/><br/>

        <label>Category:</label>
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Electricity">Electricity</option>
          <option value="Road">Road</option>
          <option value="Water">Water</option>
          <option value="Garbage">Garbage Disposal</option>
          <option value="Noise">Noise</option>
          <option value="Other">Other</option>
        </select><br/><br/>

        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required/><br/><br/>

        <label>Upload Image:</label>
        <input type="file" name="image" accept="image/*" onChange={handleChange}/><br/><br/>

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}

export default UploadComplaint;
*//*
import React, { useState } from 'react';
import './App.css'; // if you want

export default function AddComplaint() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: '',
    category: '',
    location: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Complaint submitted:', form);
  };

  return (
    <div className="container" id="add">
      <h1>GreenWatch</h1>
      <h2>Add Complaint</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" value={form.title} onChange={handleChange} required />

        <label htmlFor="description">Description:</label>
        <textarea name="description" value={form.description} onChange={handleChange} required />

        <label>Status:</label>
        <div className="radio-group">
          <label><input type="radio" name="status" value="open" onChange={handleChange}/> Open</label>
          <label><input type="radio" name="status" value="inprogress" onChange={handleChange}/> In-progress</label>
        </div>

        <label>Category:</label>
        <select name="category" value={form.category} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Electricity">Electricity</option>
          <option value="Road">Road</option>
          <option value="Water">Water</option>
          <option value="Garbage">Garbage Disposal</option>
          <option value="Noise">Noise</option>
          <option value="Other">Other</option>
        </select>

        <label>Upload Image:</label>
        <input type="file" name="image" onChange={handleChange} accept="image/*" />

        <label>Location:</label>
        <input type="text" name="location" value={form.location} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}*/

import React, { useState } from 'react';

export default function UploadComplaint() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'open',
    category: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/complaints', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Complaint submitted successfully!');
        setFormData({
          title: '',
          description: '',
          status: 'open',
          category: '',
          location: '',
        });
      } else {
        alert('Failed to submit complaint');
      }
    } catch (error) {
      console.error('Error submitting complaint:', error);
      alert('Error submitting complaint');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f8f5', padding: '40px' }}>
      <div style={{ maxWidth: '600px', margin: 'auto', backgroundColor: '#ffffff', padding: '30px', borderRadius: '10px', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#2e8b57' }}>GreenWatch</h1>
        <h2 style={{ textAlign: 'center', fontWeight: 'normal' }}>Add Complaint</h2>
        <form onSubmit={handleSubmit}>
          <label>Title:</label><br />
          <input type="text" name="title" value={formData.title} onChange={handleChange} required /><br /><br />

          <label>Description:</label><br />
          <textarea name="description" value={formData.description} onChange={handleChange} rows="6" cols="50" required /><br /><br />

          <label>Status:</label><br />
          <input type="radio" name="status" value="open" checked={formData.status === 'open'} onChange={handleChange} /> Open
          <input type="radio" name="status" value="inprogress" checked={formData.status === 'inprogress'} onChange={handleChange} style={{ marginLeft: '15px' }} /> In-progress
          <br /><br />

          <label>Category:</label><br />
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Electricity">Electricity</option>
            <option value="Road">Road</option>
            <option value="Water">Water</option>
            <option value="Garbage Disposal">Garbage Disposal</option>
            <option value="Noise">Noise</option>
            <option value="Other">Other</option>
          </select><br /><br />

          <label>Location:</label><br />
          <input type="text" name="location" value={formData.location} onChange={handleChange} required /><br /><br />
          <input type="submit" value="Submit" style={{ backgroundColor: '#2e8b57', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} />
          
        </form>
      </div>
    </div>
  );
}

