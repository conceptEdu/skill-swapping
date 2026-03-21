import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const DiscoverScreen = () => {
  const [users, setUsers] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchUsers = async () => {
      const config = {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      };
      const { data } = await axios.get('/api/users', config);
      setUsers(data);
    };
    fetchUsers();
  }, [userInfo]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">नये स्किल्स सीखें</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user._id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-blue-500">
            <div className="flex items-center mb-4">
              <img src={user.pic} alt={user.name} className="w-16 h-16 rounded-full border" />
              <div className="ml-4">
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-gray-500 text-sm">{user.city || 'Location N/A'}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold text-green-600 uppercase text-xs tracking-wider">सिखा सकते हैं:</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {user.teachSkills.map((s, i) => (
                  <span key={i} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {s.skillName}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              चैट शुरू करें
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverScreen;
