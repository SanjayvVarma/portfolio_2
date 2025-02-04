import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
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
