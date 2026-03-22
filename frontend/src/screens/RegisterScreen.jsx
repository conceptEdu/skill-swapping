import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCredentials } from '../slices/authSlice';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      console.log("✅ Already logged in, redirecting...");
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("➡️ Step 1: Form submitted", { name, email, password, confirmPassword });

    if (password !== confirmPassword) {
      console.error("❌ Step 2: Passwords do not match");
      alert("पासवर्ड मैच नहीं हो रहे हैं");
      return;
    }

    try {
      const baseURL = import.meta.env.VITE_API_URL?.replace(/\/$/, "");
      if (!baseURL) {
        console.error("❌ Step 3: VITE_API_URL missing");
        alert("Frontend .env में VITE_API_URL missing है");
        return;
      }
      console.log("✅ Step 3: Base URL =", baseURL);

      const endpoint = `${baseURL}/api/users/register`;
      console.log("➡️ Step 4: Sending request to", endpoint);

      const { data } = await axios.post(endpoint, { name, email, password });
      console.log("✅ Step 5: Response received", data);

      dispatch(setCredentials({ ...data }));
      console.log("✅ Step 6: Credentials saved in Redux");

      navigate('/');
      console.log("✅ Step 7: Redirected to home");
    } catch (err) {
      console.error("❌ Step 4 Error:", err.response?.status, err.response?.data || err.message);
      alert(`Error: ${err.response?.data?.message || err.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      <form onSubmit={submitHandler} className="bg-white p-8 rounded-2xl shadow-xl w-96 border border-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">अकाउंट बनाएं</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">नाम</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">ईमेल</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">पासवर्ड</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">पासवर्ड की पुष्टि करें</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
          Register
        </button>

        <p className="mt-4 text-center text-gray-600">
          पहले से अकाउंट है? <Link to="/login" className="text-blue-600 hover:underline">लॉगिन करें</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterScreen;