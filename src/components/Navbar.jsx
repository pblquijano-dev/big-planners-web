import { useState } from 'react';
import logo from '../assets/images/big-planners.png';
import { useTranslation } from 'react-i18next';
import { cn } from '../utils';

const Navbar = ({ isScrolled }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled
          ? 'bg-m3-surface/85 backdrop-blur-[12px] shadow-m3-md py-4 border-b border-m3-outline/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div
        className={cn(
          'container mx-auto px-6 flex justify-between items-center relative',
          !isScrolled && 'md:flex-col gap-2'
        )}
      >
        {/* Logo */}
        <img
          src={logo}
          className={cn(isScrolled ? 'h-[48px] lg:h-[64px]' : 'h-[48px] md:h-[64px] md:mt-2')}
          style={
            isScrolled
              ? {
                  filter:
                    'brightness(0) saturate(100%) invert(38%) sepia(21%) saturate(543%) hue-rotate(145deg) brightness(91%) contrast(85%)',
                }
              : { filter: 'invert(100%)' }
          }
          alt="Logo"
        />

        <div className="flex items-center gap-4 lg:gap-8 z-50">
          {/* Desktop Menu */}
          <div
            className={cn(
              'hidden md:flex items-center gap-4 lg:gap-8 font-body font-medium transition-colors duration-300',
              isScrolled ? 'text-m3-on-surface' : 'text-white'
            )}
          >
            <a
              href="#paquetes"
              className={cn(
                'transition-colors',
                isScrolled ? 'hover:text-m3-primary' : 'hover:text-m3-primary-container'
              )}
            >
              {t('navbar.packages')}
            </a>
            <a
              href="#nosotros"
              className={cn(
                'transition-colors',
                isScrolled ? 'hover:text-m3-primary' : 'hover:text-m3-primary-container'
              )}
            >
              {t('navbar.about')}
            </a>
            <a
              href="#testimonios"
              className={cn(
                'transition-colors',
                isScrolled ? 'hover:text-m3-primary' : 'hover:text-m3-primary-container'
              )}
            >
              {t('navbar.testimonials')}
            </a>
            <a
              href="#faq"
              className={cn(
                'transition-colors',
                isScrolled ? 'hover:text-m3-primary' : 'hover:text-m3-primary-container'
              )}
            >
              {t('navbar.faq')}
            </a>
          </div>

          {/* Language Switcher */}
          <div
            className={cn(
              'hidden md:flex gap-2 text-sm font-bold font-heading px-3 py-1 rounded-full border transition-all duration-300',
              isScrolled
                ? 'bg-m3-primary-container/20 text-m3-primary border-m3-primary/30'
                : 'bg-transparent text-white border-white/40'
            )}
          >
            <button
              onClick={() => i18n.changeLanguage('es')}
              className={`transition-colors ${i18n.resolvedLanguage?.startsWith('es') ? 'opacity-100 font-extrabold' : 'opacity-50 hover:opacity-80'}`}
            >
              ES
            </button>
            <span
              className={cn(
                'opacity-30 leading-snug',
                isScrolled ? 'text-m3-primary' : 'text-white'
              )}
            >
              |
            </span>
            <button
              onClick={() => i18n.changeLanguage('en')}
              className={`transition-colors ${i18n.resolvedLanguage?.startsWith('en') ? 'opacity-100 font-extrabold' : 'opacity-50 hover:opacity-80'}`}
            >
              EN
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? 'text-m3-on-surface' : 'text-white'}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          'absolute top-full left-0 w-full bg-m3-surface/95 backdrop-blur-[12px] shadow-m3-md border-b border-m3-outline/10 flex flex-col p-6 gap-6 md:hidden transition-all duration-300 ease-in-out origin-top',
          isMenuOpen
            ? 'opacity-100 translate-y-0 scale-y-100'
            : 'opacity-0 -translate-y-4 scale-y-95 pointer-events-none'
        )}
      >
        <div className="flex flex-col gap-4 font-body font-medium text-lg text-m3-on-surface">
          <a
            href="#paquetes"
            className="hover:text-m3-primary py-2 transition-colors border-b border-m3-outline/5 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navbar.packages')}
          </a>
          <a
            href="#nosotros"
            className="hover:text-m3-primary py-2 transition-colors border-b border-m3-outline/5 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navbar.about')}
          </a>
          <a
            href="#testimonios"
            className="hover:text-m3-primary py-2 transition-colors border-b border-m3-outline/5 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navbar.testimonials')}
          </a>
          <a
            href="#faq"
            className="hover:text-m3-primary py-2 transition-colors border-b border-m3-outline/5 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navbar.faq')}
          </a>
        </div>

        {/* Mobile Language Switcher */}
        <div className="flex flex-col items-center gap-2 pt-2 border-t border-m3-outline/10">
          <span className="text-xs font-heading font-semibold text-m3-outline uppercase tracking-wider">
            {t('navbar.language') || 'Language / Idioma'}
          </span>
          <div className="flex gap-4 text-base font-bold font-heading">
            <button
              onClick={() => {
                i18n.changeLanguage('es');
                setIsMenuOpen(false);
              }}
              className={cn(
                'py-2 px-4 rounded-full border transition-all duration-300 text-sm',
                i18n.resolvedLanguage?.startsWith('es')
                  ? 'bg-m3-primary text-white border-m3-primary shadow-m3-sm'
                  : 'bg-transparent text-m3-primary border-m3-primary/30'
              )}
            >
              Español (ES)
            </button>
            <button
              onClick={() => {
                i18n.changeLanguage('en');
                setIsMenuOpen(false);
              }}
              className={cn(
                'py-2 px-4 rounded-full border transition-all duration-300 text-sm',
                i18n.resolvedLanguage?.startsWith('en')
                  ? 'bg-m3-primary text-white border-m3-primary shadow-m3-sm'
                  : 'bg-transparent text-m3-primary border-m3-primary/30'
              )}
            >
              English (EN)
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
