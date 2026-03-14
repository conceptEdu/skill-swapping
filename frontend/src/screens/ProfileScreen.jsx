import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCredentials } from '../slices/authSlice';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [teachSkill, setTeachSkill] = useState('');
  const [learnSkill, setLearnSkill] = useState('');
  const [bio, setBio] = useState('');

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setBio(userInfo.bio || '');
    }
  }, [userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`, // ✅ backticks का सही इस्तेमाल
        },
      };

      const { data } = await axios.put(
        '/api/users/profile',
        {
          name,
          bio,
          teachSkills: [{ skillName: teachSkill }],
          learnSkills: [{ skillName: learnSkill }],
        },
        config
      );

      dispatch(setCredentials({ ...data }));
      alert('प्रोफाइल अपडेट हो गई!');
    } catch (err) {
      alert(err.response?.data?.message || 'अपडेट विफल रहा');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-6">अपनी प्रोफाइल अपडेट करें</h1>
      <form onSubmit={submitHandler} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">नाम</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">बायो (अपने बारे में लिखें)</label>
          <textarea
            className="w-full border p-2 rounded"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-green-600">मैं क्या सिखा सकता हूँ?</label>
            <input
              type="text"
              placeholder="उदा: React, Cooking"
              className="w-full border p-2 rounded"
              value={teachSkill}
              onChange={(e) => setTeachSkill(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-600">मैं क्या सीखना चाहता हूँ?</label>
            <input
              type="text"
              placeholder="उदा: Python, Guitar"
              className="w-full border p-2 rounded"
              value={learnSkill}
              onChange={(e) => setLearnSkill(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition"
        >
          प्रोफाइल सेव करें
        </button>
      </form>
    </div>
  );
};

export default ProfileScreen;