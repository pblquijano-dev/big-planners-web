import { useState, useEffect } from 'react';
import { cn } from '../utils.js';
import { BACKGROUNDS, TIME_TO_CHANGE_BACKGROUND } from '../constants.js';
import Button from './Button';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/BigPlanners.jpg';

const Hero = ({ isScrolled }) => {
  const { t } = useTranslation();
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg + 1) % BACKGROUNDS.length);
    }, TIME_TO_CHANGE_BACKGROUND);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Images for crossfade */}
      {BACKGROUNDS.map((bg, index) => (
        <div
          key={index}
          role="img"
          aria-label={bg.alt}
          className={cn(
            'absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ease-in-out',
            bg.bgPosition,
            index === currentBg ? 'opacity-100' : 'opacity-0'
          )}
          style={{ backgroundImage: `url(${bg.img})` }}
        />
      ))}

      {/* Dark overlay for text readability */}
      <div className={cn('absolute inset-0 z-0', BACKGROUNDS[currentBg].overlay)}></div>

      <div
        className={cn(
          'absolute border-b-2 md:border-b-4 border-m3-primary left-0 top-0 w-[180px] sm:w-[200px] md:w-[300px] h-[50px] md:h-[64px] xl:w-[420px] xl:h-[80px] bg-m3-primaryDark z-1 rounded-br-full transition-all duration-300 shadow-m3-lg',
          isScrolled ? 'opacity-0' : 'opacity-100'
        )}
      ></div>
      <img
        src={logo}
        className={cn(
          'absolute rounded-full border-2 md:border-4 border-m3-primary z-2 transition-all duration-300 shadow-m3-lg top-4 left-12 h-[80px] w-[80px] md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[240px] xl:w-[240px]',
          isScrolled ? 'opacity-0' : 'opacity-100'
        )}
        alt="Logo"
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="font-heading font-bold text-5xl md:text-7xl text-white mb-6 drop-shadow-lg">
          {t('hero.title_part1')}
          <br />
          <span className="text-m3-primary-container">{t('hero.title_part2')}</span>
        </h1>

        <p className="font-body text-xl md:text-2xl text-white/90 mb-10 max-w-2xl drop-shadow-md">
          {t('hero.subtitle')}
        </p>

        <Button
          variant="elevated"
          className="transition-all duration-300 shadow-m3-lg hover:shadow-m3-xl transform hover:-translate-y-1"
          size="large"
        >
          {t('hero.cta')}
        </Button>
      </div>
    </div>
  );
};

export default Hero;
