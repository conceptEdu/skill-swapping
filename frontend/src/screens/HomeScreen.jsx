import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  // नोट: असल प्रोजेक्ट में आप यहाँ Redux या Context API से 'isLoggedIn' चेक करेंगे
  const isLoggedIn = true; // इसे टेस्ट करने के लिए true/false करके देखें

  return (
    <div className="min-h-screen bg-white">
      {/* --- Hero Section --- */}
      <section className="pt-16 pb-12 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Connect. Learn. <span className="text-blue-600 font-serif italic">Succeed.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            SkillSync पर एक्सपर्ट्स से मिलें, अपनी प्रोफाइल बनाएं और रीयल-टाइम चैट के जरिए स्किल्स शेयर करें।
          </p>

          {!isLoggedIn ? (
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register" className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl hover:bg-blue-700 transition-all">
                Get Started Free
              </Link>
              <Link to="/login" className="px-10 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all">
                Login to Account
              </Link>
            </div>
          ) : (
            <div className="inline-flex items-center p-1 bg-gray-100 rounded-2xl">
              <span className="px-4 py-2 text-sm font-medium text-gray-500">Welcome back, User! 👋</span>
            </div>
          )}
        </div>
      </section>

      {/* --- Navigation Grid (The Functional Heart) --- */}
      <section className="py-16 px-6 container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
          <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
          Quick Access Dashboard
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Discover Screen Link */}
          <Link to="/discover" className="group p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-blue-100 hover:shadow-2xl transition-all border-b-4 border-b-blue-500">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔍</div>
            <h3 className="text-xl font-bold text-gray-800">Discover Skills</h3>
            <p className="text-gray-500 text-sm mt-2">नए मेंटर्स और स्किल्स को खोजें और उनसे जुड़ें।</p>
          </Link>

          {/* Profile Screen Link */}
          <Link to="/profile" className="group p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-indigo-100 hover:shadow-2xl transition-all border-b-4 border-b-indigo-500">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👤</div>
            <h3 className="text-xl font-bold text-gray-800">My Profile</h3>
            <p className="text-gray-500 text-sm mt-2">अपनी स्किल्स को अपडेट करें और पोर्टफोलियो मैनेज करें।</p>
          </Link>

          {/* Chat Screen Link */}
          <Link to="/chat/main-room" className="group p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-green-100 hover:shadow-2xl transition-all border-b-4 border-b-green-500">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💬</div>
            <h3 className="text-xl font-bold text-gray-800">Messages</h3>
            <p className="text-gray-500 text-sm mt-2">अपने कनेक्शन के साथ रीयल-टाइम चैट करें।</p>
          </Link>

          {/* User Detail (Mock) */}
          <Link to="/user/123" className="group p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-orange-100 hover:shadow-2xl transition-all border-b-4 border-b-orange-500">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌟</div>
            <h3 className="text-xl font-bold text-gray-800">Top Mentor</h3>
            <p className="text-gray-500 text-sm mt-2">महीने के सबसे बेहतरीन मेंटर की प्रोफाइल देखें।</p>
          </Link>

          {/* Registration (Only if not logged in) */}
          {!isLoggedIn && (
            <Link to="/register" className="group p-6 bg-blue-600 rounded-3xl shadow-xl hover:bg-blue-700 transition-all flex flex-col justify-center items-center text-white text-center">
              <h3 className="text-xl font-bold">New Here?</h3>
              <p className="text-blue-100 text-sm mt-2">आज ही अकाउंट बनाएं और सीखना शुरू करें!</p>
              <span className="mt-4 bg-white text-blue-600 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Register</span>
            </Link>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 py-8 bg-gray-50 text-center">
        <p className="text-gray-400 text-sm">© 2026 SkillSync • Designed for Excellence</p>
      </footer>
    </div>
  );
};

export default HomeScreen;
