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
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    
    // पासवर्ड मैचिंग चेक करें
    if (password !== confirmPassword) {
      alert('पासवर्ड मैच नहीं हो रहे हैं');
      return;
    }

    try {
      const { data } = await axios.post('/api/users', { name, email, password });
      dispatch(setCredentials({ ...data }));
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'रजिस्ट्रेशन विफल रहा');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      <form onSubmit={submitHandler} className="bg-white p-8 rounded-2xl shadow-xl w-96 border border-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">अकाउंट बनाएं</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">नाम</label>
          <input
            type="text"
            placeholder="अपना पूरा नाम लिखें"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">ईमेल</label>
          <input
            type="email"
            placeholder="अपना ईमेल डालें"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">पासवर्ड</label>
          <input
            type="password"
            placeholder="पासवर्ड चुनें"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">पासवर्ड की पुष्टि करें</label>
          <input
            type="password"
            placeholder="दोबारा पासवर्ड लिखें"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
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
