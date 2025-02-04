import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='container nav_bar' data-aos='fade-down' data-aos-duration='1000'>
        <div className='left nav_items'>ℙ𝕆ℝ𝕋𝔽𝕆𝕃𝕀𝕆</div>
        <div className='right'>
          <a href="#home" className="nav_items">Home</a>
          <a href="#about" className="nav_items">About Me</a>
          <a href="#skills" className="nav_items">Skills</a>
          <a href="#projects" className="nav_items">Project</a>
          <a href="#exprience" className="nav_items">Exprience</a>
          <a href="#contact" className="nav_items">Contact</a>
        </div>
      </div>
    </>
  )
}

export default Navbar