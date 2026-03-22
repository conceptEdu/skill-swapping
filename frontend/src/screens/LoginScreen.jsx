import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setCredentials } from '../slices/authSlice';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // ✅ Render backend URL from .env
      const baseURL = import.meta.env.VITE_API_URL?.replace(/\/$/, "");
      if (!baseURL) {
        alert("Frontend .env में VITE_API_URL missing है");
        return;
      }

      const endpoint = `${baseURL}/api/users/login`;

      const { data } = await axios.post(endpoint, { email, password });
      dispatch(setCredentials({ ...data }));

      // ✅ Success message दिखाओ
      setSuccessMessage("🎉 लॉगिन सफल हुआ! Discover पेज पर जा रहे हैं...");

      // ✅ 2 सेकंड बाद DiscoverScreen पर redirect
      setTimeout(() => {
        navigate('/discover');
      }, 2000);
    } catch (err) {
      alert(err.response?.data?.message || 'लॉगिन विफल रहा');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
          लॉगिन करें
        </h2>

        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center font-medium">
            {successMessage}
          </div>
        )}

        <div className="mb-4">
          <input
            type="email"
            placeholder="ईमेल"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="पासवर्ड"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* ✅ Buttons in two columns */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => navigate('/register')}
            className="bg-gray-200 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-300 transition"
          >
            Register
          </button>
        </div>

        <p className="mt-4 text-center text-gray-600">
          पासवर्ड भूल गए?{" "}
          <Link to="/forgot" className="text-blue-600 hover:underline">
            Reset करें
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginScreen;