import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// अभी के लिए सिंपल कंपोनेंट्स (बाद में इन्हें अलग फाइल्स में बनाएंगे)
const HomeScreen = () => <div className="p-10 text-2xl">होम स्क्रीन पर आपका स्वागत है!</div>;
const LoginScreen = () => <div className="p-10 text-2xl">लॉगिन पेज</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

