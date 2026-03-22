import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomeScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const baseURL = import.meta.env.VITE_API_URL.replace(/\/$/, "");
        const { data } = await axios.get(`${baseURL}/api/users`);
        setUsers(data);
      } catch (error) {
        console.error("यूजर डेटा लोड करने में समस्या:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <div className="text-center mt-10">लोड हो रहा है...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">स्किल्स शेयर करने वाले लोग</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user._id} className="border rounded-lg p-6 shadow-lg bg-white">
              <h2 className="text-xl font-semibold text-blue-600">{user.name}</h2>
              <p className="text-gray-600 mt-2">
                <strong>सिखा सकते हैं:</strong> {Array.isArray(user.skillsToTeach) ? user.skillsToTeach.join(', ') : 'N/A'}
              </p>
              <p className="text-gray-600">
                <strong>सीखना चाहते हैं:</strong> {Array.isArray(user.skillsToLearn) ? user.skillsToLearn.join(', ') : 'N/A'}
              </p>
              <button 
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={() => window.location.href = `/chat/${user._id}`}
              >
                चैट शुरू करें
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">अभी कोई अन्य यूजर नहीं मिला।</p>
        )}
      </div>
    </div>
  );
};

// ✅ सिर्फ़ एक default export रखें
export default HomeScreen;