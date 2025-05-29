import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import Home from './pages/Home';
import About from './pages/About';
import { useEffect } from 'react';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Experience from './pages/Experience';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;