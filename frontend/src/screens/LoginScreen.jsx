import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCredentials } from '../slices/authSlice';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux स्टोर से यूजर की जानकारी लें
  const { userInfo } = useSelector((state) => state.auth);

  // यदि यूजर पहले से लॉगिन है, तो उसे होम पेज पर भेजें
  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // बैकएंड API को कॉल करें (सुनिश्चित करें कि आपका Proxy या Base URL सेट है)
      const { data } = await axios.post('/api/users/login', { email, password });
      
      // Redux स्टोर और LocalStorage में डेटा सेव करें
      dispatch(setCredentials({ ...data }));
      navigate('/');
    } catch (err) {
      // एरर मैसेज को बेहतर तरीके से दिखाएं
      alert(err.response?.data?.message || 'लॉगिन विफल रहा। कृपया पुनः प्रयास करें।');
    }
  };

  return (
    // 'min-h-screen' का उपयोग करें ताकि बैकग्राउंड पूरी स्क्रीन कवर करे
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form 
        onSubmit={submitHandler} 
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-gray-100"
      >
        <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-600 tracking-tight">
          लॉगिन करें
        </h2>
        
        <div className="mb-5">
          <label className="block text-gray-600 font-semibold mb-2 ml-1">ईमेल</label>
          <input
            type="email"
            required
            placeholder="अपना ईमेल यहाँ लिखें"
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-600 font-semibold mb-2 ml-1">पासवर्ड</label>
          <input
            type="password"
            required
            placeholder="अपना पासवर्ड दर्ज करें"
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-lg shadow-blue-200"
        >
          Sign In
        </button>

        <p className="mt-6 text-center text-gray-500 text-sm">
          खाता नहीं है? <span className="text-blue-600 cursor-pointer hover:underline">रजिस्टर करें</span>
        </p>
      </form>
    </div>
  );
};

export default LoginScreen;
