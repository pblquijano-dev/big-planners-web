import { useState, useEffect } from 'react';
import { cn } from '../utils.js';
import { BACKGROUNDS, TIME_TO_CHANGE_BACKGROUND } from '../constants.js';
import Button from './Button';
import { useTranslation } from 'react-i18next';
import ScrollReveal from './ScrollReveal.jsx';

const Hero = ({ isScrolled }) => {
  const { t } = useTranslation();
  const [currentBg, setCurrentBg] = useState(0);
  const [prevBg, setPrevBg] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prevBgIndex) => {
        setPrevBg(prevBgIndex);
        return (prevBgIndex + 1) % BACKGROUNDS.length;
      });
    }, TIME_TO_CHANGE_BACKGROUND);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Images for crossfade */}
      {BACKGROUNDS.map((bg, index) => {
        let opacity = 0;
        let transform = 'scale(1) translateY(0)';
        let transition = 'opacity 1000ms ease-in-out';

        if (index === currentBg) {
          opacity = 1;
          transform = 'scale(1.08) translateY(-10px)';
          transition = 'opacity 1000ms ease-in-out, transform 9200ms linear';
        } else if (index === prevBg) {
          opacity = 0;
          transform = 'scale(1.08) translateY(-10px)';
          transition = 'opacity 1000ms ease-in-out, transform 9200ms linear'; // keep identical transform transition during fadeout
        } else {
          opacity = 0;
          transform = 'scale(1) translateY(0)';
          transition = 'none';
        }

        return (
          <div
            key={index}
            role="img"
            aria-label={bg.alt}
            className={cn('absolute inset-0 bg-cover bg-no-repeat', bg.bgPosition)}
            style={{
              backgroundImage: `url(${bg.img})`,
              opacity,
              transform,
              transition,
            }}
          />
        );
      })}

      {/* Dark overlay for text readability */}
      <div className={cn('absolute inset-0 z-0', BACKGROUNDS[currentBg].overlay)}></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <ScrollReveal animation="fade-up" delay={100} duration={900}>
          <h1 className="font-heading font-bold text-5xl md:text-7xl text-white mb-6 drop-shadow-lg">
            {t('hero.title_part1')}
            <br />
            <span className="text-m3-primary-container">{t('hero.title_part2')}</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={300} duration={900}>
          <p className="font-body text-xl md:text-2xl text-white/90 mb-10 max-w-2xl drop-shadow-md">
            {t('hero.subtitle')}
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={500} duration={900}>
          <Button
            variant="tertiary"
            className="transition-all duration-300 shadow-m3-lg hover:shadow-m3-xl transform hover:-translate-y-1"
            size="large"
            onClick={() => {
              const el = document.getElementById('paquetes');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('hero.cta')}
          </Button>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Hero;
