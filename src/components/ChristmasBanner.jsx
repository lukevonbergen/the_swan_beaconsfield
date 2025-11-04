import React from 'react';
import { Link } from 'react-router-dom';

const ChristmasBanner = () => {
  return (
    <Link
      to="/christmas"
      className="fixed top-0 left-0 right-0 z-[60] block w-full bg-red-700 hover:bg-red-800 transition-colors duration-300 overflow-hidden cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, #991b1b 0%, #b91c1c 50%, #991b1b 100%)'
      }}
    >
      {/* Snowflakes animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="snowflake" style={{ left: '10%', animationDelay: '0s', animationDuration: '10s' }}>❄</div>
        <div className="snowflake" style={{ left: '20%', animationDelay: '2s', animationDuration: '12s' }}>❄</div>
        <div className="snowflake" style={{ left: '30%', animationDelay: '4s', animationDuration: '14s' }}>❅</div>
        <div className="snowflake" style={{ left: '40%', animationDelay: '1s', animationDuration: '11s' }}>❄</div>
        <div className="snowflake" style={{ left: '50%', animationDelay: '3s', animationDuration: '13s' }}>❅</div>
        <div className="snowflake" style={{ left: '60%', animationDelay: '5s', animationDuration: '15s' }}>❄</div>
        <div className="snowflake" style={{ left: '70%', animationDelay: '2.5s', animationDuration: '12s' }}>❅</div>
        <div className="snowflake" style={{ left: '80%', animationDelay: '4.5s', animationDuration: '14s' }}>❄</div>
        <div className="snowflake" style={{ left: '90%', animationDelay: '1.5s', animationDuration: '11s' }}>❅</div>
      </div>

      {/* Banner content */}
      <div className="relative z-10 py-2 px-3 md:py-3 md:px-4 text-center">
        <p className="text-white font-serif text-sm md:text-lg lg:text-xl font-semibold tracking-wide flex flex-col md:block items-center">
          <span>🎄 Celebrate Christmas at The Old Swan •{' '}</span>
          <span>View Our Festive Menu & Book Your Table 🎄</span>
        </p>
      </div>

      <style jsx>{`
        .snowflake {
          position: absolute;
          top: -10px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.5em;
          animation: fall linear infinite;
        }

        @keyframes fall {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0.5;
          }
        }

        @media (max-width: 768px) {
          .snowflake {
            font-size: 1em;
          }
        }
      `}</style>
    </Link>
  );
};

export default ChristmasBanner;
