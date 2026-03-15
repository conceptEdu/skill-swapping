import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  // ऑथेंटिकेशन चेक (इसे आप अपने लॉजिक के अनुसार बदल सकते हैं)
  const isLoggedIn = false; 

  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      {/* --- Hero Section (Clean Version) --- */}
      <section className="pt-20 pb-12 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            SkillSync <span className="text-blue-600">Dashboard</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            अपने हुनर को पहचानें और दुनिया के साथ साझा करें। यहाँ आपके सभी मुख्य फीचर्स एक ही जगह पर हैं।
          </p>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <section className="flex-grow py-10 px-6 container mx-auto">
        
        {/* 1. My Profile (सबसे ऊपर) */}
        <div className="mb-10">
          <Link to="/profile" className="group flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-[2rem] shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all text-white">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-4xl shadow-inner">
                👤
              </div>
              <div>
                <h2 className="text-3xl font-bold">My Profile</h2>
                <p className="text-blue-100 mt-1">अपनी स्किल्स, बायो और सेटिंग्स को मैनेज करें</p>
              </div>
            </div>
            <span className="mt-6 md:mt-0 bg-white text-blue-600 px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm group-hover:bg-blue-50 transition-colors">
              View Profile
            </span>
          </Link>
        </div>

        {/* 2. Secondary Grid (Discover & Chat) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Discover Card */}
          <Link to="/discover" className="group p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border-b-8 border-b-blue-500 flex items-center space-x-6">
            <div className="text-5xl group-hover:scale-110 transition-transform">🔍</div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Discover</h3>
              <p className="text-gray-500">नए मेंटर्स और स्किल्स खोजें</p>
            </div>
          </Link>

          {/* Chat Card */}
          <Link to="/chat/general" className="group p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border-b-8 border-b-green-500 flex items-center space-x-6">
            <div className="text-5xl group-hover:scale-110 transition-transform">💬</div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Chat Room</h3>
              <p className="text-gray-500">कम्युनिटी के साथ जुड़ें</p>
            </div>
          </Link>
        </div>

        {/* 3. Register Box (ReguNow - सबसे नीचे) */}
        {!isLoggedIn && (
          <div className="mt-12">
            <div className="relative p-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-[2.5rem] shadow-2xl">
              <div className="bg-white rounded-[2.4rem] p-10 text-center">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-4 italic">Register Yourself Now</h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                  क्या आप अभी तक SkillSync का हिस्सा नहीं बने? अभी रजिस्टर करें और अपनी लर्निंग जर्नी शुरू करें।
                </p>
                <Link to="/register" className="inline-block px-12 py-4 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-blue-600 hover:shadow-lg transition-all active:scale-95">
                  ReguNow
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* --- Footer --- */}
      <footer className="py-10 text-center border-t border-gray-50 bg-gray-50/50 mt-10">
        <p className="text-gray-500 font-medium">
          © {new Date().getFullYear()} SkillSync • All rights reserved to <span className="text-blue-600 font-bold">SSP Mishra</span>
        </p>
      </footer>
    </div>
  );
};

export default HomeScreen;
