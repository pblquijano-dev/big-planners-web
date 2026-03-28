import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Packages from './Packages.jsx';
import Authority from './Authority.jsx';
import Testimonials from './Testimonials.jsx';
import Footer from './Footer.jsx';
import WhatsAppFAB from './WhatsAppFAB.jsx';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-m3-surface">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <Packages />
        
        <Authority />
        <Testimonials />
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default App;
