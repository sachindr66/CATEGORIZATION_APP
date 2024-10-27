import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
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
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', response.data.token);
      setMessage('Login successful!'); 
      console.log('Login successful!')  
      setIsError(false);
      setTimeout(() => {
        navigate('/protected');           
      }, 1000);                           
    } catch (error) {
      setMessage('Password is incorrect or user not found'); 
      setIsError(true);
    }
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      
      {message && (
        <div className={`mb-4 text-center ${isError ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="bg-white shadow-lg p-8 rounded-md w-80">
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
          Login
        </button>

        <p className="text-center mt-4 text-gray-600">
          Don’t have an account?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
