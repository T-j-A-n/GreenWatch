import React, { useState } from 'react';
import axios from 'axios';
import RegisterForm from './LoginForm';
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
      await axios.post('http://localhost:5000/loggedin', form);
      navigate('/loggedin'); 
    } catch (err) {
      alert('Error logging in account');
    }
  };


  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>Login to your Account</h2>
      <RegisterForm
        username={form.username}
        password={form.password}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Login;
