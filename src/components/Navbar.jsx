import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full px-6 py-4 bg-black text-white flex justify-between items-center shadow-md fixed top-0 z-50">
      <Link to="/" className="text-xl font-bold tracking-widest">
        ROBERT OMEGA
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-6 text-sm">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
        <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-6 shadow-md md:hidden">
          <Link to="/" onClick={closeMenu} className="hover:text-gray-400">Home</Link>
          <Link to="/about" onClick={closeMenu} className="hover:text-gray-400">About</Link>
          <Link to="/projects" onClick={closeMenu} className="hover:text-gray-400">Projects</Link>
          <Link to="/contact" onClick={closeMenu} className="hover:text-gray-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;