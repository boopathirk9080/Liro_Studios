import React, { useState } from 'react';
import Logo from '../assets/logo_white.png';

export const A1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="py-6 bg-gradient-to-r from-fuchsia-600 to-blue-600">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <img className="w-auto h-8" src={Logo} alt="Logo" />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-opacity-80 transition-all duration-200">Home</a>
            <a href="#" className="text-white hover:text-opacity-80 transition-all duration-200">About</a>
            <a href="#" className="text-white hover:text-opacity-80 transition-all duration-200">Testimonials</a>

            <div className="relative group">
              <button className="text-white hover:text-opacity-80 transition-all duration-200">Services</button>
              <div className="absolute left-0 hidden mt-2 bg-white text-black py-2 px-4 group-hover:block">
                <a href="#" className="block py-1">Graphical Design</a>
                <a href="#" className="block py-1">Digital Marketing</a>
                <a href="#" className="block py-1">Web Development</a>
                <a href="#" className="block py-1">Multimedia</a>
              </div>
            </div>

            <a href="#" className="text-white hover:text-opacity-80 transition-all duration-200">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 space-y-2">
            <a href="#" className="block text-white hover:text-opacity-80">Home</a>
            <a href="#" className="block text-white hover:text-opacity-80">About</a>
            <a href="#" className="block text-white hover:text-opacity-80">Testimonials</a>

            <div className="block text-white">Services</div>
            <div className="ml-4 space-y-1">
              <a href="#" className="block text-white hover:text-opacity-80">Graphical Design</a>
              <a href="#" className="block text-white hover:text-opacity-80">Digital Marketing</a>
              <a href="#" className="block text-white hover:text-opacity-80">Web Development</a>
              <a href="#" className="block text-white hover:text-opacity-80">Multimedia</a>
            </div>

            <a href="#" className="block text-white hover:text-opacity-80">Contact</a>
          </div>
        )}
      </div>
    </section>
  );
}

export default A1;
