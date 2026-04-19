import logo from '../assets/images/BigPlanners.jpg';
import { useTranslation } from 'react-i18next';

const Navbar = ({ isScrolled }) => {
  const { t, i18n } = useTranslation();

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b-2 md:border-b-4 border-m3-primary rounded-br-0 md:rounded-br-3xl transition-all duration-300 ${
        isScrolled ? 'bg-m3-primaryDark shadow-m3-lg py-4' : 'bg-transparent border-none py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        {/* Logo */}
        <div className="w-[164px]" />
        <img
          src={logo}
          className={`absolute rounded-full border-2 md:border-4 border-m3-primary z-50 transition-all duration-300 shadow-m3-xl top-[-8px] left-1/2 translate-x-[-50%] h-[80px] w-[80px] md:left-0 md:translate-x-0 md:h-[120px] md:w-[120px] ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
          alt="Logo"
        />

        <div className="flex items-center gap-4 md:gap-8 z-50">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-body font-medium text-white">
            <a href="#paquetes" className="hover:text-m3-primary-container transition-colors">
              {t('navbar.packages')}
            </a>
            <a href="#nosotros" className="hover:text-m3-primary-container transition-colors">
              {t('navbar.about')}
            </a>
            <a href="#testimonios" className="hover:text-m3-primary-container transition-colors">
              {t('navbar.testimonials')}
            </a>
            <a href="#faq" className="hover:text-m3-primary-container transition-colors">
              {t('navbar.faq')}
            </a>
          </div>

          {/* Language Switcher */}
          <div className="flex gap-2 text-sm font-bold font-heading bg-m3-surface text-m3-primary px-2 rounded-full">
            <button
              onClick={() => i18n.changeLanguage('es')}
              className={`transition-colors ${i18n.resolvedLanguage?.startsWith('es') ? 'opacity-100 drop-shadow-md' : 'opacity-60 hover:opacity-80'}`}
            >
              ES
            </button>
            <span className="text-m3-primary opacity-60">|</span>
            <button
              onClick={() => i18n.changeLanguage('en')}
              className={`transition-colors ${i18n.resolvedLanguage?.startsWith('en') ? 'opacity-100 drop-shadow-md' : 'opacity-60 hover:opacity-80'}`}
            >
              EN
            </button>
          </div>

          {/* Mobile menu button (Simplified for now) */}
          <div className="md:hidden flex items-center">
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
