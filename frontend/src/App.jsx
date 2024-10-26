import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedPage from './pages/ProtectedPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<ProtectedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
