import React, { useState, useEffect } from 'react';
import logo from '../assets/images/BigPlanners.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change state if scrolled down 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-m3-primary shadow-m3-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        {/* Logo */}
        <div className=" w-[164px]" />
        <img src={logo} className={`absolute rounded z-50 transition-all duration-300 shadow-m3-xl ${isScrolled ? 'left-0 top-0 h-[120px] w-[120px]' : 'left-1/2 -translate-x-1/2 top-[60px] h-[164px] w-[164px]'}`} alt="Logo" />


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-body font-medium text-white">
          <a href="#paquetes" className="hover:text-m3-primary-container transition-colors">Paquetes</a>
          <a href="#nosotros" className="hover:text-m3-primary-container transition-colors">Nosotros</a>
          <a href="#testimonios" className="hover:text-m3-primary-container transition-colors">Testimonios</a>
        </div>

        {/* Mobile menu button (Simplified for now) */}
        <div className="md:hidden flex items-center">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
