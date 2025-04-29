import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';
import MainPage from './pages/MainPage';
import Navbar from './components/Navbar';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const telegram = window.Telegram.WebApp;
    telegram.ready();
    
    // Get user data if available
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/${telegram.initDataUnsafe.user.id}`);
        setUser(response.data);
      } catch (error) {
        console.log('New user or error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route
            path="/"
            element={
              user?.onboardingCompleted ? (
                <Navigate to="/main" replace />
              ) : (
                <OnboardingPage setUser={setUser} />
              )
            }
          />
          <Route path="/main" element={<MainPage user={user} />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
};

export default App; 