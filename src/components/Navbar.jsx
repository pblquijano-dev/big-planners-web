import logo from '../assets/images/BigPlanners.jpg';

const Navbar = ({isScrolled}) => {
  
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-m3-primaryDark border-b-2 md:border-b-4 border-m3-primary shadow-m3-lg py-4 rounded-br-0 md:rounded-br-3xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        {/* Logo */}
        <div className="w-[164px]" />
        <img src={logo} className={`absolute rounded-full border-2 md:border-4 border-m3-primary z-50 transition-all duration-300 shadow-m3-xl top-[-8px] left-1/2 translate-x-[-50%] h-[80px] w-[80px] md:left-0 md:translate-x-0 md:h-[120px] md:w-[120px] ${isScrolled ? 'opacity-100' : 'opacity-0'}`} alt="Logo" />


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-body font-medium text-white">
          <a href="#paquetes" className="hover:text-m3-primary-container transition-colors">Paquetes</a>
          <a href="#nosotros" className="hover:text-m3-primary-container transition-colors">Nosotros</a>
          <a href="#testimonios" className="hover:text-m3-primary-container transition-colors">Testimonios</a>
          <a href="#faq" className="hover:text-m3-primary-container transition-colors">FAQ</a>
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
