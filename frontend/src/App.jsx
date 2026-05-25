import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Pages
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';   // ← Import your new signup page

function App() {
  return (
    <Router>
      <Routes>
        {/* Home / Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Sign Up Page */}
        <Route path="/signup" element={<SignupPage />} />

        {/* You can add more routes later */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/explore" element={<ExplorePage />} /> */}
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;