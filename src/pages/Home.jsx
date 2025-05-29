import imgSrc from '../assets/hero.avif';
import resumePdf from '../assets/SanjayResume.pdf';
import TypingAnimator from 'react-typing-animator';

const Home = () => {
  const textArray = [
    "A Full Stack Developer    ",
    "Active Learner   ",
    "Computer Science Engineer    ",
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-950 via-gray-800 to-black text-white flex flex-wrap justify-center items-center md:gap-60 gap-10 px-3 py-20">

      <div className="flex flex-col justify-center items-center rounded-2xl space-y-6 px-5 py-6 border-4 borderAnimation" data-aos="fade-up-right" data-aos-duration="1000">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-center md:whitespace-nowrap overflow-hidden p-2 typingEffectAnimations">
          Hello <span className="animate-wiggle origin-bottom inline">👋</span>, I'm <span className="text-cyan-400 text-6xl font-serif">Sanjay</span>
        </h1>

        <TypingAnimator
          textArray={textArray}
          cursorColor="cyan"
          textColor="yellow"
          fontSize='1.5rem'
          loop
          typingSpeed={50}
          delaySpeed={1000}
          backspace
        />

        <a
          href={resumePdf}
          download="Sanjay_Resume.pdf"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Right Image */}
      <div className="flex justify-center items-center" data-aos="fade-up-left" data-aos-duration="1000">
        <div className="w-64 h-64 md:w-90 md:h-90 rounded-full overflow-hidden border-4 imgBorderAnimate">
          <img
            src={imgSrc}
            alt="Sanjay"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-1 animate-bounce">
          <div className="w-2 h-2 bg-cyan-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Home;