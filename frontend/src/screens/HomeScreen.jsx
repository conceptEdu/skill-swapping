import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* --- Hero Section --- */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          
          <div className="md:w-1/2 text-left space-y-6 z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
              Master New Skills with <span className="text-blue-600">SkillSync</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              दुनिया भर के एक्सपर्ट्स से जुड़ें, नई स्किल सीखें और अपनी प्रतिभा को दूसरों के साथ साझा करें। सीखना कभी इतना आसान नहीं था।
            </p>
            <div className="flex space-x-4">
              <Link to="/discover" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 hover:scale-105 transition-all">
                Explore Skills
              </Link>
              <Link to="/register" className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all">
                Join Now
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            {/* सजावटी एलिमेंट्स */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            
            <img 
              src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" 
              alt="Learning Illustration" 
              className="relative w-full h-auto rounded-2xl shadow-2xl transform hover:-rotate-2 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">हमें क्यों चुनें?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* Card 1 */}
            <div className="p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-shadow bg-blue-50/30">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">🚀</div>
              <h3 className="text-xl font-bold mb-3">Fast Learning</h3>
              <p className="text-gray-600">प्रैक्टिकल प्रोजेक्ट्स के माध्यम से जल्दी और प्रभावी तरीके से सीखें।</p>
            </div>

            {/* Card 2 */}
            <div className="p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-shadow bg-indigo-50/30">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">🤝</div>
              <h3 className="text-xl font-bold mb-3">Expert Networking</h3>
              <p className="text-gray-600">दुनिया भर के मेंटर्स और स्किल्ड लोगों के साथ सीधा चैट और कोलैबोरेशन करें।</p>
            </div>

            {/* Card 3 */}
            <div className="p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-shadow bg-purple-50/30">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">💬</div>
              <h3 className="text-xl font-bold mb-3">Instant Chat</h3>
              <p className="text-gray-600">रीयल-टाइम चैट सिस्टम के साथ कभी भी मदद मांगें या अपनी राय दें।</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Call to Action (CTA) --- */}
      <section className="py-20 px-6">
        <div className="container mx-auto bg-blue-600 rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-blue-300">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">क्या आप अपनी स्किल शेयर करने के लिए तैयार हैं?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            आज ही रजिस्टर करें और SkillSync कम्युनिटी का हिस्सा बनें। सीखना और सिखाना, दोनों ही अब एक ही जगह पर।
          </p>
          <Link to="/register" className="bg-white text-blue-600 px-10 py-4 rounded-full font-extrabold text-lg hover:bg-gray-100 transition-colors inline-block">
            Start Your Journey
          </Link>
        </div>
      </section>
      
      {/* Footer (Mini) */}
      <footer className="py-10 border-t border-gray-100 text-center text-gray-500">
        <p>© 2026 SkillSync. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomeScreen;
