import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Pages
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
// Dashboard Related
import DashboardLayout from './user/DashboardLayout';
import Dashboard from './user/Dashboard';
import Wallet from './user/Wallet';
import MyNFTs from './user/MyNFTs';
import MyProfile from './user/Profile'
import Settings from './user/Settings';
import Favorites from './user/Favorites'


function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected Dashboard Routes with Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />                    {/* Default: /dashboard */}
          <Route path="nfts" element={<MyNFTs />} />               {/* /dashboard/nfts */}
          <Route path="wallet" element={<Wallet />} />             {/* /dashboard/wallet */}
          
          {/* Add more dashboard pages here later */}
          <Route path="profile" element={<MyProfile />} />
          <Route path="favorites" element={<Favorites />} /> 
          <Route path="settings" element={<Settings/>} />
        </Route>

        {/* 404 Route (Optional) */}
        <Route path="*" element={<h1 className="text-white text-center mt-20">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;