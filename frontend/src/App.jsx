import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';



// अभी के लिए सिंपल कंपोनेंट्स (बाद में इन्हें अलग फाइल्स में बनाएंगे)
const HomeScreen = () => <div className="p-10 text-2xl text-green-500">होम स्क्रीन पर आपका स्वागत है!</div>;


function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

