import React, { useState } from 'react';
import axios from 'axios';
import RegisterForm from './RegisterForm';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', form);
      navigate('/loggedin'); 
    } catch (err) {
      alert('Error creating account');
    }
  };


  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>Create an Account</h2>
      <RegisterForm
        username={form.username}
        password={form.password}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Register;
