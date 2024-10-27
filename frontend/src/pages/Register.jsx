import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');       
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');  
  
    try {
      const apiBaseUrl = import.meta.env.VITE_API_URL;
      await axios.post(`${apiBaseUrl}/api/auth/register`, formData);
      setMessage('Account successfully created!');
      console.log('Account successfully created!');
      setIsError(false);
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setMessage('This email is already registered');
      } else {
        setMessage('Failed to create account. Please try again.');
      }
      setIsError(true);
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Create your account</h1>

      {message && (
        <div className={`mb-4 text-center ${isError ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow-lg p-8 rounded-md w-80">
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border mb-4 rounded-md"
          required
        />

        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border mb-4 rounded-md"
          required
        />

        <label className="block text-sm font-medium mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border mb-6 rounded-md"
          required
        />

        <button type="submit" className="w-full p-2 bg-black text-white font-semibold rounded-md">
          Create Account
        </button>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
