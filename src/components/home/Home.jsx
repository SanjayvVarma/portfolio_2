import './home.css';
import imgSrc from '../../assets/hero.avif';
import { useState, useEffect } from 'react';
import TypingAnimator from 'react-typing-animator';
import resumePdf from '../../assets/SanjayResume.pdf';

const Home = () => {

  const [fontSize, setFontSize] = useState('');
  const textArray = [
    "A Full Stack Developer    ",
    "Active Learner   ",
    "Computer Science Engineer    ",
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 550) {
        setFontSize('1.5rem');
      } else if (window.innerWidth >= 551 && window.innerWidth <= 768) {
        setFontSize('2rem');
      } else {
        setFontSize('2.7rem');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="container home" id='home'>
        <div className="left" data-aos='fade-up-right' data-aos-duration='1000'>
          <div className='text-wrapper'>
            <h1>
              Hello 👋, I'm <span>Sanjay</span>
              <br />
              <div >
                <TypingAnimator
                  textArray={textArray}
                  cursorColor="transparent"
                  textColor="var(--color-text)"
                  fontSize={fontSize}
                  loop
                  typingSpeed={50}
                  delaySpeed={1000}
                  backspace
                />
              </div>
            </h1>
          </div>
          <div>
            <a href={resumePdf} download='Sanjay_resume.pdf' className="btn btn-outline-warning">Download Resume</a>
          </div>
        </div>
        <div className="right" data-aos='fade-up-left' data-aos-duration='1000'>
          <div className="img">
            <img src={imgSrc} alt="Sanjay" />
          </div>

        </div>
      </div>
    </>
  )
}

export default Home