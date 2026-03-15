import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  // ऑथेंटिकेशन चेक (प्रोजेक्ट के हिसाब से बदलें)
  const isLoggedIn = false; 

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* --- Header Section --- */}
      <section className="pt-16 pb-8 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Welcome to <span className="text-blue-600">SkillSync</span>
          </h1>
          <p className="text-gray-500 text-lg">आपके विकास के लिए सभी टूल्स एक ही जगह पर।</p>
        </div>
      </section>

      {/* --- Dashboard Grid --- */}
      <section className="flex-grow py-6 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. My Profile - [Royal Blue & Indigo] */}
          <Link to="/profile" className="group relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[2.5rem] shadow-xl hover:shadow-blue-200 transition-all hover:-translate-y-2">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-white/20 p-4 rounded-2xl text-4xl">👤</div>
              <span className="text-white/50 font-bold text-xs uppercase tracking-widest">Priority</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">My Profile</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              अपनी पहचान बनाएं! यहाँ आप अपना बायो अपडेट कर सकते हैं, अपनी स्किल्स लिस्ट कर सकते हैं और अपना पोर्टफोलियो मैनेज कर सकते हैं।
            </p>
            <div className="mt-6 text-white font-bold flex items-center text-sm">
              Manage Profile <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </Link>

          {/* 2. Discover - [Emerald Green] */}
          <Link to="/discover" className="group bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-[2.5rem] shadow-xl hover:shadow-emerald-200 transition-all hover:-translate-y-2">
            <div className="mb-6 bg-white/20 w-fit p-4 rounded-2xl text-4xl">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">Discover</h3>
            <p className="text-emerald-50 text-sm leading-relaxed">
              दुनिया को एक्सप्लोर करें! नए मेंटर्स खोजें, ट्रेंडिंग स्किल्स देखें और अपनी पसंद के अनुसार सीखने वाले पार्टनर्स ढूंढें।
            </p>
            <div className="mt-6 text-white font-bold flex items-center text-sm">
              Explore Now <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </Link>

          {/* 3. Chat Room - [Vibrant Orange/Amber] */}
          <Link to="/chat/general" className="group bg-gradient-to-br from-orange-500 to-red-500 p-8 rounded-[2.5rem] shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-2">
            <div className="mb-6 bg-white/20 w-fit p-4 rounded-2xl text-4xl">💬</div>
            <h3 className="text-2xl font-bold text-white mb-2">Chat Room</h3>
            <p className="text-orange-50 text-sm leading-relaxed">
              बातचीत शुरू करें! रीयल-टाइम में एक्सपर्ट्स के साथ चैट करें, ग्रुप डिस्कशन में हिस्सा लें और अपने डाउट्स तुरंत क्लियर करें।
            </p>
            <div className="mt-6 text-white font-bold flex items-center text-sm">
              Enter Chat <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </Link>

          {/* 4. LogIn - [Sleek Dark/Modern Gray] */}
          <Link to="/login" className="group bg-gradient-to-br from-gray-800 to-black p-8 rounded-[2.5rem] shadow-xl hover:shadow-gray-400 transition-all hover:-translate-y-2">
            <div className="mb-6 bg-white/10 w-fit p-4 rounded-2xl text-4xl">🔑</div>
            <h3 className="text-2xl font-bold text-white mb-2">Log In</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              वापस आएं! अपने अकाउंट में सुरक्षित तरीके से लॉगिन करें और वहीं से शुरू करें जहाँ आपने छोड़ा था।
            </p>
            <div className="mt-6 text-white font-bold flex items-center text-sm">
              Access Account <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </Link>

          {/* 5. Register Now (ReguNow) - [Royal Purple/Pink] */}
          {!isLoggedIn && (
            <Link to="/register" className="group lg:col-span-2 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 p-8 rounded-[2.5rem] shadow-2xl hover:shadow-purple-300 transition-all hover:-translate-y-2 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
              {/* Decorative Circle */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="md:w-2/3 relative z-10">
                <div className="mb-4 bg-white/20 w-fit p-3 rounded-xl text-3xl">✨</div>
                <h3 className="text-3xl font-black text-white mb-2 italic">ReguNow - Register Yourself</h3>
                <p className="text-purple-50 text-sm leading-relaxed">
                  अभी तक शामिल नहीं हुए? SkillSync कम्युनिटी का हिस्सा बनें और आज ही अपनी स्किल्स को पूरी दुनिया के सामने पेश करें।
                </p>
              </div>
              <div className="mt-8 md:mt-0 relative z-10">
                <span className="bg-white text-purple-600 px-10 py-4 rounded-full font-black text-lg shadow-lg group-hover:scale-110 transition-transform inline-block">
                  JOIN NOW
                </span>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 text-center mt-10">
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full opacity-30"></div>
        <p className="text-gray-500 font-semibold tracking-wide uppercase text-xs mb-2">
          Made with ❤️ for Community
        </p>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} SkillSync • All rights reserved to <span className="text-blue-600 font-black">SSP Mishra</span>
        </p>
      </footer>
    </div>
  );
};

export default HomeScreen;
