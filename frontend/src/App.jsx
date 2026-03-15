      import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // नया इम्पोर्ट

// Screens
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import UserDetailScreen from './screens/UserDetailScreen';
import ChatScreen from "./screens/ChatScreen";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/discover" element={<DiscoverScreen />} />
            <Route path="/user/:id" element={<UserDetailScreen />} />
            <Route path="/chat/:roomId" element={<ChatScreen />} />
          </Routes>
        </main>

        {/* Footer यहाँ आएगा */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
