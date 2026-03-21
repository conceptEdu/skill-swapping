import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const UserDetailScreen = () => {
  const { id } = useParams(); // URL से यूजर की ID लें
  const [user, setUser] = useState(null);
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
      const { data } = await axios.get(`/api/users/${id}`, config);
      setUser(data);
    };
    fetchUser();
  }, [id, userInfo.token]);

  if (!user) return <div className="p-10 text-center">लोड हो रहा है...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* बायां हिस्सा: फोटो और बेसिक जानकारी */}
        <div className="md:w-1/3 bg-blue-600 p-8 text-white flex flex-col items-center">
          <img src={user.pic} alt={user.name} className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-4" />
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="opacity-80">{user.city || 'शहर की जानकारी नहीं'}</p>
          <button 
            onClick={() => navigate(`/chat/${user._id}`)}
            className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition shadow-md"
          >
            मैसेज भेजें
          </button>
        </div>

        {/* दायां हिस्सा: स्किल्स और बायो */}
        <div className="md:w-2/3 p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-2">मेरे बारे में</h2>
          <p className="text-gray-600 mb-8">{user.bio || 'इस यूजर ने अभी कोई बायो नहीं लिखा है।'}</p>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-green-600 uppercase">विशेषज्ञता (Teaching Skills)</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {user.teachSkills.map((s, i) => (
                  <span key={i} className="bg-green-100 text-green-800 px-4 py-1 rounded-lg text-sm border border-green-200">
                    {s.skillName}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-blue-600 uppercase">सीखने की इच्छा (Learning Skills)</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {user.learnSkills.map((s, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 px-4 py-1 rounded-lg text-sm border border-blue-200">
                    {s.skillName}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailScreen;
