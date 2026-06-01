import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import SpecialService from './components/SpecialService';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-fan-black min-h-screen">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Experience />
      <Contact />
      <SpecialService />
      <Footer />
    </div>
  );
}
