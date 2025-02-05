import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import './contact.css';  

const Contact = () => {
  return (
    <>
      <div className="container contact" id='contact'>
        <h2 className='text-center'>CONTACT ME</h2>
        <div className='cont-us' data-aos='zoom-in' data-aos-duration='700'>
          <div className='text-center'>
            <h5>Hy 👋,</h5>
            <h3>SEND ME A MESSAGE</h3>
          </div>
          <hr />
          <div className='contact-item'>
            <div className="left">
              <h3>Getting in touch is easy !</h3>
              <p>900XXXXXXX</p>
              <p>skvarma914@gmail.com</p>
              <div className="contact-icon">
                <a href="https://github.com/SanjayvVarma" className='item'><FaGithub className='icons' /></a>
                <a href='https://www.instagram.com/sanjayazad_/' className='item'><FaInstagram className='icons' /></a>
                <a href='https://www.linkedin.com/in/sanjaykvarma/' className='item'><FaLinkedin className='icons' /></a>
                <a href="https://twitter.com/SanjayAzad_" className='item'><FaTwitter className='icons' /></a>
                <a href="mailto:skvarma914@gmail.com" className='item'><IoMail className='icons' /></a>
              </div>
              <div>
                <p className='love'>"Built with ❤️ and passion for the web."</p>
              </div>
            </div>
            <div className="right">
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea rows={3} placeholder="About You" required></textarea>
                <button type="submit" className="btn btn-outline-warning">SEND MSG</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact