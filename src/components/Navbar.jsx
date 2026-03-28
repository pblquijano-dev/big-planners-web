import React, { useState, useEffect } from 'react';

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
          ? 'bg-m3-surface shadow-m3-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className={`text-2xl font-heading font-bold ${isScrolled ? 'text-m3-primary' : 'text-white'}`}>
            Big Planners
          </div>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex gap-8 font-body font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
          <a href="#paquetes" className="hover:text-m3-secondary transition-colors">Paquetes</a>
          <a href="#nosotros" className="hover:text-m3-secondary transition-colors">Nosotros</a>
          <a href="#testimonios" className="hover:text-m3-secondary transition-colors">Testimonios</a>
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <a 
            href="#paquetes"
            className={`px-6 py-2.5 rounded-full font-body font-medium transition-all duration-300 ${
              isScrolled 
                ? 'bg-m3-primary text-white hover:bg-[#8A0027] shadow-m3-sm' 
                : 'bg-white text-m3-primary hover:bg-gray-100'
            }`}
          >
            Ver Viajes
          </a>
        </div>

        {/* Mobile menu button (Simplified for now) */}
        <div className="md:hidden">
          <button className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}>
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
