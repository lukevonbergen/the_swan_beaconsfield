import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path || (location.pathname === '/' && path === '/');
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50 font-serif">
      <nav className="flex justify-between items-center h-20 px-10 md:px-16">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="text-2xl font-normal text-brand-dark no-underline hover:no-underline">
            The Swan Beaconsfield
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/menu" 
              className={`nav-link ${isActive('/menu') ? 'active' : ''}`}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link 
              to="/events" 
              className={`nav-link ${isActive('/events') ? 'active' : ''}`}
            >
              Events
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="/book" 
              className={`nav-link ${isActive('/book') ? 'active' : ''}`}
            >
              Book a Table
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`mobile-menu-toggle flex flex-col cursor-pointer p-2 z-50 ${isMobileMenuOpen ? 'active' : ''}`}
          >
            <span className={`w-6 h-0.5 bg-brand-dark mb-1 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-brand-dark mb-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-40"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-24 px-10">
          <ul className="space-y-6">
            <li>
              <Link 
                to="/" 
                className={`nav-link block text-lg border-b border-gray-200 pb-4 ${isActive('/') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`nav-link block text-lg border-b border-gray-200 pb-4 ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/menu" 
                className={`nav-link block text-lg border-b border-gray-200 pb-4 ${isActive('/menu') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link 
                to="/events" 
                className={`nav-link block text-lg border-b border-gray-200 pb-4 ${isActive('/events') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`nav-link block text-lg border-b border-gray-200 pb-4 ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/book" 
                className={`nav-link block text-lg ${isActive('/book') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Book a Table
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;