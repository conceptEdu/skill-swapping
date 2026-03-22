import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setCredentials } from '../slices/authSlice';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("पासवर्ड मैच नहीं हो रहे हैं");
      return;
    }

    try {
      // ✅ Render backend URL from .env
      const baseURL = import.meta.env.VITE_API_URL?.replace(/\/$/, "");
      if (!baseURL) {
        alert("Frontend .env में VITE_API_URL missing है");
        return;
      }

      const endpoint = `${baseURL}/api/users/register`;

      const { data } = await axios.post(endpoint, { name, email, password });
      dispatch(setCredentials({ ...data }));

      // ✅ Success message दिखाओ
      setSuccessMessage("🎉 अकाउंट सफलतापूर्वक बना लिया गया है! अब लॉगिन करें।");

      // ✅ 2 सेकंड बाद LoginScreen पर redirect
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      alert(`Error: ${err.response?.data?.message || err.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
          अकाउंट बनाएं
        </h2>

        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center font-medium">
            {successMessage}
          </div>
        )}

        <div className="mb-4">
          <input
            type="text"
            placeholder="नाम"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="ईमेल"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="पासवर्ड"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="पासवर्ड की पुष्टि करें"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* ✅ Buttons in two columns */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Register
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="bg-gray-200 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>

        <p className="mt-4 text-center text-gray-600">
          पहले से अकाउंट है?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            लॉगिन करें
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterScreen;