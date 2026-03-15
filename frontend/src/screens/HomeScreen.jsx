import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="py-10 px-4 md:px-10">
      <div className="container mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800">SkillSync Dashboard</h1>
          <p className="text-gray-500 mt-2">आपकी प्रगति के लिए सभी जरूरी टूल्स</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          
          {/* 1. My Profile - [Blue Box] */}
          <Link to="/profile" className="bg-blue-600 p-8 rounded-3xl shadow-lg hover:shadow-blue-300 hover:scale-105 transition-all text-white flex flex-col h-full">
            <div className="text-4xl mb-4 text-blue-100">👤</div>
            <h3 className="text-2xl font-bold mb-3">My Profile</h3>
            <p className="text-blue-100 text-sm flex-grow">
              अपनी प्रोफाइल को कस्टमाइज़ करें। यहाँ आप अपनी फोटो, बायो और सिखाई जाने वाली स्किल्स को अपडेट कर सकते हैं।
            </p>
            <span className="mt-6 font-bold underline">Go to Profile</span>
          </Link>

          {/* 2. Discover - [Emerald Box] */}
          <Link to="/discover" className="bg-emerald-500 p-8 rounded-3xl shadow-lg hover:shadow-emerald-200 hover:scale-105 transition-all text-white flex flex-col h-full">
            <div className="text-4xl mb-4 text-emerald-100">🔍</div>
            <h3 className="text-2xl font-bold mb-3">Discover</h3>
            <p className="text-emerald-50 text-sm flex-grow">
              नए लोगों से मिलें! यहाँ आप अन्य यूजर्स की प्रोफाइल देख सकते हैं और अपनी पसंद की स्किल्स के एक्सपर्ट्स ढूंढ सकते हैं।
            </p>
            <span className="mt-6 font-bold underline">Explore Now</span>
          </Link>

          {/* 3. Chat Room - [Orange Box] */}
          <Link to="/chat/general" className="bg-orange-500 p-8 rounded-3xl shadow-lg hover:shadow-orange-200 hover:scale-105 transition-all text-white flex flex-col h-full">
            <div className="text-4xl mb-4 text-orange-100">💬</div>
            <h3 className="text-2xl font-bold mb-3">Chat Room</h3>
            <p className="text-orange-50 text-sm flex-grow">
              सीखना बातचीत से आसान होता है। रीयल-टाइम में चैट करें, मैसेज भेजें और अपने मेंटर्स के साथ सीधे संपर्क में रहें।
            </p>
            <span className="mt-6 font-bold underline">Start Chat</span>
          </Link>

          {/* 4. LogIn - [Dark Box] */}
          <Link to="/login" className="bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-gray-400 hover:scale-105 transition-all text-white flex flex-col h-full">
            <div className="text-4xl mb-4 text-gray-400">🔑</div>
            <h3 className="text-2xl font-bold mb-3">Log In</h3>
            <p className="text-gray-400 text-sm flex-grow">
              अपने अकाउंट को एक्सेस करें। लॉगिन करके आप अपनी पिछली चैट्स और सेव की हुई स्किल्स को फिर से देख सकते हैं।
            </p>
            <span className="mt-6 font-bold underline">Secure Login</span>
          </Link>

          {/* 5. Register Now (ReguNow) - [Full Width Purple Box] */}
          <Link to="/register" className="md:col-span-2 bg-gradient-to-r from-purple-600 to-indigo-600 p-10 rounded-3xl shadow-xl hover:shadow-purple-400 hover:scale-[1.02] transition-all text-white flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3">
              <h3 className="text-3xl font-black mb-2 italic">ReguNow</h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                क्या आप नए हैं? अभी रजिस्टर करें! SkillSync परिवार का हिस्सा बनकर अपनी स्किल्स को पूरी दुनिया के साथ साझा करने का मौका न चूकें।
              </p>
            </div>
            <button className="mt-6 md:mt-0 bg-white text-purple-600 px-10 py-4 rounded-full font-black shadow-lg">
              REGISTER NOW
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
