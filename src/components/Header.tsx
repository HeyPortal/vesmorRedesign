import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm uppercase tracking-widest transition-colors duration-300 hover:text-white ${
      isActive ? 'text-white font-bold' : 'text-gray-400'
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center pointer-events-auto">
      {/* Logo / Name */}
      <div className="flex items-center">
        <NavLink to="/" className="text-2xl font-bold text-white tracking-tighter hover:opacity-80 transition-opacity">
          SEV
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-12 backdrop-blur-md bg-white/5 px-8 py-3 rounded-full border border-white/10 shadow-lg">
        <NavLink to="/projects" className={navLinkClasses}>
          Projects
        </NavLink>
        <NavLink to="/about" className={navLinkClasses}>
          About
        </NavLink>
        <a href="mailto:romsev.charles@gmail.com" className="text-sm uppercase tracking-widest text-gray-400 transition-colors duration-300 hover:text-white">
          Contact
        </a>
      </nav>

      {/* Mobile Menu Button (Placeholder for now, can be expanded) */}
      <div className="md:hidden">
        {/* You can reuse the hamburger menu logic here if needed, or keep it simple */}
      </div>
    </header>
  );
};

export default Header;
