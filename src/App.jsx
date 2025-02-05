import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Navbar from './components/navbar/Navbar';
import Projects from './components/project/Projects';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <footer>
        <p className='text-center'>© 2025 Sanjay. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
