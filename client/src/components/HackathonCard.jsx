import React from 'react';

const HackathonCard = ({ hackathon }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
    });
  };

  const formatPrizeFund = (amount) => {
    return new Intl.NumberFormat('ru-RU').format(amount);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      {/* Status Badge */}
      <div className="p-2 bg-gray-100">
        <span className="text-sm text-gray-600">
          {hackathon.status === 'upcoming' ? 'Скоро' : hackathon.status}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{hackathon.title}</h3>
        
        <div className="flex items-center space-x-2 mb-3">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-gray-600">{formatDate(hackathon.date)}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600">{hackathon.participants} участников</span>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {hackathon.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Prize Fund */}
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.616a1 1 0 01.894-1.79l1.599.8L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          <span className="font-semibold">{formatPrizeFund(hackathon.prizeFund)} ₸</span>
        </div>
      </div>
    </div>
  );
};

export default HackathonCard; 