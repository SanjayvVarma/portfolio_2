import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import './navbar.css';

const Navbar = () => {

  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon)
  };

  const closeMenu = () => {
    setToggleIcon(false);
  };

  return (
    <>
      <div className='container nav_bar' data-aos='fade-down' data-aos-duration='1000'>
        <div className='left nav_items'>🌞𝒥𝒜𝒴 ❤️</div>
        <div className='right'>
          <a href="#home" className="nav_items">Home</a>
          <a href="#about" className="nav_items">About Me</a>
          <a href="#skills" className="nav_items">Skills</a>
          <a href="#projects" className="nav_items">Project</a>
          <a href="#exprience" className="nav_items">Exprience</a>
          <a href="#contact" className="nav_items">Contact</a>
        </div>
        <div className='nav-icon' onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>

        {toggleIcon && (
        <div className="mobile-menu">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Me</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Project</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      )}
      
      </div>
    </>
  )
}

export default Navbar