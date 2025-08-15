import React from 'react';

const StarField: React.FC = () => {
  const stars = Array.from({ length: 200 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 4,
    animationDuration: 1.5 + Math.random() * 2.5,
    size: Math.random() * 3 + 1,
    opacity: 0.3 + Math.random() * 0.7,
  }));

  const shootingStars = Array.from({ length: 3 }, (_, i) => ({
    id: i + 200,
    left: Math.random() * 100,
    top: Math.random() * 50,
    animationDelay: Math.random() * 10 + 5,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Regular twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-sparkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.size > 2 ? '#60a5fa' : '#ffffff',
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.animationDuration}s`,
            boxShadow: star.size > 2 ? '0 0 6px #60a5fa' : '0 0 3px #ffffff',
          }}
        />
      ))}
      
      {/* Constellation patterns */}
      {Array.from({ length: 15 }, (_, i) => ({
        id: i + 300,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 2,
      })).map((star) => (
        <div
          key={star.id}
          className="absolute bg-purple-300 rounded-full animate-pulse-slow"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: '0 0 8px #c084fc',
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}

      {/* Nebula effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/30 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-gradient-radial from-indigo-500/25 to-transparent rounded-full blur-3xl animate-float-slow"></div>
      </div>
    </div>
  );
};

export default StarField;