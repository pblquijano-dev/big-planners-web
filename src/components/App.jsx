import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Packages from './Packages.jsx';
import Authority from './Authority.jsx';
import Testimonials from './Testimonials.jsx';
import FAQ from './FAQ.jsx';
import Footer from './Footer.jsx';
import WhatsAppFAB from './WhatsAppFAB.jsx';

const App = () => {
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
    <div className="flex flex-col min-h-screen bg-m3-surface">
      <Navbar isScrolled={isScrolled} />

      <main className="flex-grow">
        <Hero isScrolled={isScrolled} />

        <Testimonials />

        <Packages />

        <Authority />

        <hr className="border-m3-outline w-[40%] mx-auto opacity-30" />

        <FAQ />
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default App;
