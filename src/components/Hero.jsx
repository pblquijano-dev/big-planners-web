import React from 'react';
import bgImage from '../assets/images/hero-bg.jpg';
import Button from './Button';

const Hero = () => {
  return (
    <div 
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-bottom bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="font-heading font-bold text-5xl md:text-7xl text-white mb-6 drop-shadow-lg">
          Tus próximas vacaciones<br/>
          <span className="text-m3-primary-container">comienzan aquí</span>
        </h1>
        
        <p className="font-body text-xl md:text-2xl text-white/90 mb-10 max-w-2xl drop-shadow-md">
          Experiencias inolvidables, destinos exóticos y el mejor servicio para tu viaje ideal.
        </p>
        
        <Button
          variant="elevated"
          className="transition-all duration-300 shadow-m3-lg hover:shadow-m3-xl transform hover:-translate-y-1"
          size="large"
        >
          Explorar Destinos
        </Button>
      </div>
    </div>
  );
};

export default Hero;
