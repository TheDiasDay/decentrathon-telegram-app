import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HackathonCard from '../components/HackathonCard';

const MainPage = ({ user }) => {
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/hackathons`);
        setHackathons(response.data);
      } catch (error) {
        console.error('Error fetching hackathons:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHackathons();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* User Profile Header */}
      <div className="bg-white p-4 flex items-center space-x-3 shadow-sm mb-4">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
          {user?.telegramId?.slice(0, 2) || 'U'}
        </div>
        <div>
          <h3 className="font-medium">{user?.name || 'Кенжик'}</h3>
          <div className="flex items-center space-x-2">
            <span className="text-blue-500">3.27 $</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">{user?.city}</span>
          </div>
        </div>
      </div>

      {/* Hackathons Section */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Хакатоны</h2>
        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <div className="space-y-4">
            {hackathons.map((hackathon) => (
              <HackathonCard key={hackathon._id} hackathon={hackathon} />
            ))}
          </div>
        )}
      </div>

      {/* Webinars Section */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Вебинары</h2>
        <div className="bg-white rounded-lg p-6 text-center text-gray-500">
          Скоро
        </div>
      </div>
    </div>
  );
};

export default MainPage; 