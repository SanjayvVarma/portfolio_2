import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import './navbar.css';

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const closeMenu = () => {
    setToggleIcon(false);
  };

  const handleActiveSection = (section) => {
    setActiveSection(section);
    closeMenu();
  };

  return (
    <>
      <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
        <div className="left nav_items">🌞𝒥𝒜𝒴 ❤️</div>
        <div className="right">
          <a
            href="#home"
            className={`nav_items ${activeSection === "#home" ? "active" : ""}`}
            onClick={() => handleActiveSection("#home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={`nav_items ${activeSection === "#about" ? "active" : ""}`}
            onClick={() => handleActiveSection("#about")}
          >
            About Me
          </a>
          <a
            href="#skills"
            className={`nav_items ${activeSection === "#skills" ? "active" : ""}`}
            onClick={() => handleActiveSection("#skills")}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`nav_items ${activeSection === "#projects" ? "active" : ""}`}
            onClick={() => handleActiveSection("#projects")}
          >
            Project
          </a>
          <a
            href="#experience"
            className={`nav_items ${activeSection === "#experience" ? "active" : ""}`}
            onClick={() => handleActiveSection("#experience")}
          >
            Experience
          </a>
          <a
            href="#contact"
            className={`nav_items ${activeSection === "#contact" ? "active" : ""}`}
            onClick={() => handleActiveSection("#contact")}
          >
            Contact
          </a>
        </div>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>

        {toggleIcon && (
          <div className="mobile-menu">
            <a href="#home" onClick={() => handleActiveSection("#home")} >Home</a>
            <a href="#about" onClick={() => handleActiveSection("#about")}>About Me</a>
            <a href="#skills" onClick={() => handleActiveSection("#skills")}>Skills</a>
            <a href="#projects" onClick={() => handleActiveSection("#projects")}>Project</a>
            <a href="#experience" onClick={() => handleActiveSection("#experience")}>Experience</a>
            <a href="#contact" onClick={() => handleActiveSection("#contact")} >Contact</a>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
