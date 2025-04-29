import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    {
      name: 'Home',
      path: '/main',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      name: 'Hackathons',
      path: '/hackathons',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      name: 'Rating',
      path: '/rating',
      soon: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      name: 'Shop',
      path: '/shop',
      soon: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      name: 'Profile',
      path: '/profile',
      soon: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="grid grid-cols-5">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.soon ? '#' : item.path}
            className={`flex flex-col items-center justify-center p-2 text-sm transition-all duration-200 ease-in-out transform hover:scale-110 ${
              location.pathname === item.path
                ? 'text-blue-600'
                : 'text-gray-500 hover:text-blue-500'
            }`}
            onClick={(e) => {
              if (item.soon) {
                e.preventDefault();
                const telegram = window.Telegram.WebApp;
                telegram.showPopup({
                  title: 'Coming Soon!',
                  message: `${item.name} feature will be available soon. Stay tuned!`,
                  buttons: [{ type: 'close' }]
                });
              }
            }}
          >
            <div className={`p-2 rounded-full ${
              location.pathname === item.path
                ? 'bg-blue-100'
                : 'hover:bg-gray-100'
            }`}>
              {item.icon}
            </div>
            <span className="mt-1 font-medium">{item.name}</span>
            {item.soon && (
              <span className="absolute top-1 right-1 bg-blue-500 text-white text-xs px-1 rounded-full animate-pulse">
                SOON
              </span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar; 