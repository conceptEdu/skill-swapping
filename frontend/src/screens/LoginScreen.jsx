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

  const { userInfo } = useSelector((state) => state.auth);

  // अगर यूजर पहले से लॉगिन है, तो उसे होम पेज पर भेजें
  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // बैकएंड API को कॉल करें
      const { data } = await axios.post('/api/users/login', { email, password });
      
      // Redux स्टोर और LocalStorage में डेटा सेव करें
      dispatch(setCredentials({ ...data }));
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'लॉगिन विफल रहा');
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={submitHandler} className="bg-white p-8 rounded-2xl shadow-xl w-96 border border-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">लॉगिन करें</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">ईमेल</label>
          <input
            type="email"
            placeholder="अपना ईमेल डालें"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">पासवर्ड</label>
          <input
            type="password"
            placeholder="अपना पासवर्ड डालें"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
