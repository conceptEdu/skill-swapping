import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  // नोट: असल प्रोजेक्ट में इसे आप Redux या localStorage से चेक करेंगे
  // अभी टेस्ट करने के लिए इसे true या false करके देखें
  const isLoggedIn = false; 

  return (
    <div className="min-h-screen bg-white">
      {/* --- Hero Section --- */}
      <section className="relative pt-20 pb-16 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        {/* सजावटी बैकग्राउंड ब्लब्स */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-100 rounded-full filter blur-3xl opacity-50"></div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
            SkillSync: <span className="text-blue-600">सीखें और सिखाएं</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            भारत का उभरता हुआ स्किल-शेयरिंग प्लेटफॉर्म। अपनी प्रोफाइल बनाएं, मेंटर्स खोजें और रीयल-टाइम चैट के जरिए अपने ज्ञान को बढ़ाएं।
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            {!isLoggedIn ? (
              <>
                <Link to="/register" className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-2xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300">
                  Join SkillSync Now
                </Link>
                <Link to="/login" className="px-10 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300">
                  Member Login
                </Link>
              </>
            ) : (
              <Link to="/discover" className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl hover:bg-blue-700 transition-all">
                Go to Dashboard
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* --- Main Navigation Grid --- */}
      <section className="py-20 px-6 container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
            Quick Actions
          </h2>
          <div className="h-1 flex-grow ml-6 bg-gray-100 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Register Card (Highlighted for New Users) */}
          {!isLoggedIn && (
            <Link to="/register" className="group p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] shadow-2xl hover:scale-[1.02] transition-all relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:rotate-12 transition-transform">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Create Account</h3>
              <p className="text-blue-100 mb-6">आज ही हमसे जुड़ें और अपनी पहली स्किल शेयर करना शुरू करें।</p>
              <span className="bg-white text-blue-600 px-6 py-2 rounded-full font-extrabold text-sm uppercase">Register Now</span>
            </Link>
          )}

          {/* 2. Discover Card */}
          <Link to="/discover" className="group p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all border-b-8 border-b-blue-500">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800">Discover</h3>
            <p className="text-gray-500 mt-2 italic">नए मेंटर्स और स्किल्स को एक्सप्लोर करें।</p>
          </Link>

          {/* 3. Profile Card */}
          <Link to="/profile" className="group p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-indigo-100 transition-all border-b-8 border-b-indigo-500">
            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">👤</div>
            <h3 className="text-2xl font-bold text-gray-800">My Profile</h3>
            <p className="text-gray-500 mt-2 italic">अपनी जानकारी और स्किल्स को मैनेज करें।</p>
          </Link>

          {/* 4. Chat Card */}
          <Link to="/chat/general" className="group p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-green-100 transition-all border-b-8 border-b-green-500">
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">💬</div>
            <h3 className="text-2xl font-bold text-gray-800">Chat Room</h3>
            <p className="text-gray-500 mt-2 italic">रीयल-टाइम में दूसरों से बात करें।</p>
          </Link>

          {/* 5. Login Card (If not logged in) */}
          {!isLoggedIn && (
            <Link to="/login" className="group p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-gray-200 transition-all border-b-8 border-b-gray-800">
              <div className="w-16 h-16 bg-gray-100 text-gray-800 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">🔑</div>
              <h3 className="text-2xl font-bold text-gray-800">Login</h3>
              <p className="text-gray-500 mt-2 italic">अपने अकाउंट में वापस आएं।</p>
            </Link>
          )}

        </div>
      </section>

      {/* Footer (SSP Mishra Credit) */}
      <footer className="py-12 bg-gray-50 text-center border-t border-gray-100">
        <p className="text-gray-500 font-medium">
          © {new Date().getFullYear()} SkillSync • All rights reserved to <span className="text-blue-600 font-bold">SSP Mishra</span>
        </p>
      </footer>
    </div>
  );
};

export default HomeScreen;
