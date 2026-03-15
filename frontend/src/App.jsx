import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import UserDetailScreen from './screens/UserDetailScreen';
import ChatScreen from "./screens/ChatScreen"; // आपका ChatScreen component
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/discover" element={<DiscoverScreen />} />
          <Route path="/user/:id" element={<UserDetailScreen />} /> {/* ✅ नया route */}
          <Route path="/chat/:roomId" element={<ChatScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
