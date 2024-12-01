import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  // State for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle login
  const handleLogin = () => {
    axios
      .post('http://localhost:3000/validate', { username, password })
      .then((res) => {
        if (res.data.validation) {
          alert('Your password is correct');
          navigate('/home');
        } else {
          alert('Your password is not correct');
        }
      })
      .catch((err) => {
        console.error('Error during API call:', err);
        alert('An error occurred. Please try again.');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-center text-2xl font-bold mb-8">Login</h1>

      <div className="bg-blue-200 rounded-3xl p-8 w-96 flex flex-col gap-6 items-center">
        {/* Username Input */}
        <input
          type="text"
          placeholder="Email"
          className="border-[2px] border-black rounded-2xl p-2 w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete='none'
        />
        {/* Password Input */}
        <input
          type="text"
          placeholder="Password"
          className="border-[2px] border-black rounded-2xl p-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default App;
