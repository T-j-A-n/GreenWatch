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
}
