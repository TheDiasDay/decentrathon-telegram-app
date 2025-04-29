import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';
import MainPage from './pages/MainPage';
import Navbar from './components/Navbar';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const telegram = window.Telegram.WebApp;
        telegram.ready();
        
        // Show loading state
        telegram.showPopup({
          title: 'Loading',
          message: 'Please wait while we load your data...',
          buttons: [{ type: 'close' }]
        });

        // Get user data if available
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/${telegram.initDataUnsafe.user.id}`);
        setUser(response.data);
        
        // Hide loading popup
        telegram.closePopup();
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to load user data. Please try again later.');
        
        // Show error popup
        const telegram = window.Telegram.WebApp;
        telegram.showPopup({
          title: 'Error',
          message: 'Failed to load user data. Please try again later.',
          buttons: [{ type: 'close' }]
        });
      } finally {
        setLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-gray-600">Loading your profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Try Again
        </button>
      </div>
    );
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