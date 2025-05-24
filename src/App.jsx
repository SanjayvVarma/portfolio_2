import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Projects from './components/project/Projects';
import Experience from './components/experience/Experience';

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
        <p className='text-center'>© {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()} Sanjay. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App