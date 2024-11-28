import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(null);
  const [credentials, setCredentials] = useState({ id: '', password: '' });
  const [emergencyDetails, setEmergencyDetails] = useState({ description: '', location: '' });

  const handleOptionSelect = (option) => {
    setIsAdmin(option === 'admin');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isAdmin) {
      setCredentials({ ...credentials, [name]: value });
    } else {
      setEmergencyDetails({ ...emergencyDetails, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAdmin) {
      // Replace this with your actual login logic
      if (credentials.id === 'admin' && credentials.password === 'password') {
        // Redirect to Kumbh dashboard
        navigate('/kumbh-dashboard');
      } else {
        alert('Invalid credentials');
      }
    } else {
      // Handle user emergency details submission
      console.log('Emergency details submitted:', emergencyDetails);
      // Here you can send the emergency details to your backend
      // After submission, you might want to redirect or show a success message
      alert('Emergency details submitted successfully');
      // Optionally reset the form or redirect
      setEmergencyDetails({ description: '', location: '' });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      {!isAdmin && !emergencyDetails.description && !emergencyDetails.location && (
        <div className="flex space-x-4">
          <button onClick={() => handleOptionSelect('admin')} className="p-4 bg-blue-500 text-white rounded">
            Admin Login
          </button>
          <button onClick={() => handleOptionSelect('user')} className="p-4 bg-green-500 text-white rounded">
            User Emergency Form
          </button>
        </div>
      )}
      {isAdmin !== null && (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-4">
          {isAdmin ? (
            <>
              <input
                type="text"
                name="id"
                placeholder="Admin ID"
                value={credentials.id}
                onChange={handleChange}
                required
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                required
                className="p-2 border border-gray-300 rounded"
              />
            </>
          ) : (
            <>
              <input
                type="text"
                name="description"
                placeholder="Emergency Description"
                value={emergencyDetails.description}
                onChange={handleChange}
                required
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={emergencyDetails.location}
                onChange={handleChange}
                required
                className="p-2 border border-gray-300 rounded"
              />
            </>
          )}
          <button type="submit" className="p-2 bg-blue-600 text-white rounded">
            {isAdmin ? 'Login' : 'Submit Emergency'}
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
