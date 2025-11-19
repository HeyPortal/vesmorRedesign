import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden font-['Outfit'] pointer-events-none z-20">
      {/* Content Overlay */}
      <div className="absolute bottom-20 left-10 md:left-20 z-10 text-left pointer-events-auto">
        <h1 className="text-8xl md:text-9xl font-bold text-white tracking-tighter mb-2 drop-shadow-2xl opacity-90">
          SEV
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 tracking-[0.3em] uppercase font-light drop-shadow-md ml-2">
          Portfolio
        </p>
      </div>

      <div className="absolute bottom-20 right-10 md:right-20 pointer-events-auto z-10">
        <button 
          onClick={() => navigate('/projects')}
          className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-none transition-all duration-300"
        >
          <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
          <div className="absolute inset-0 border border-white/30"></div>
          <span className="relative text-white font-light tracking-[0.2em] uppercase text-sm group-hover:text-white transition-colors">
            Enter System
          </span>
        </button>
      </div>
    </div>
  );
};

export default Landing;
