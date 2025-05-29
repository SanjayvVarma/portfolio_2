import imgSrc from '../assets/mydimg.png';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-purple-950 via-gray-800 to-black text-white flex flex-col items-center px-6 py-14 relative"
    >
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center w-full max-w-7xl tracking-wide text-cyan-400 drop-shadow-lg">
        About Me
      </h1>

      {/* Content */}
      <div
        className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl w-full gap-16 md:gap-24"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        {/* Left Text */}
        <div className="md:w-3/4 text-center md:text-left space-y-8 text-gray-200">
          <p className="text-lg sm:text-xl leading-relaxed">
            Hi, I'm <b className="text-cyan-400">Sanjay</b>, a passionate Full Stack Web Developer with a strong focus on crafting scalable, performant, and user-centric web applications. I love turning ideas into clean, elegant, and efficient code. Continuously evolving, I embrace new technologies to build solutions that truly impact users.
          </p>

          <div>
            <h5 className="text-2xl font-semibold mb-5 border-b-4 border-cyan-500 inline-block pb-1 tracking-wide">
              Tech Stack
            </h5>
            <ul className="space-y-3 text-base sm:text-lg text-gray-300">
              <li>💻 <b>Frontend:</b> React.js (Vite), HTML5, CSS3, JavaScript (ES6+)</li>
              <li>⚙️ <b>Backend:</b> Node.js, Express.js</li>
              <li>📦 <b>Database:</b> MongoDB, Firebase</li>
              <li>🛠️ <b>Tools & Skills:</b> Git, GitHub, API Integration, VS Code, Postman</li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/4 flex justify-center">
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden shadow-2xl border-4 border-cyan-400 rounded-xl bg-gradient-to-tr from-cyan-700 via-cyan-500 to-cyan-300">
            <img
              src={imgSrc}
              alt="Sanjay"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute md:bottom-15 bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-1 animate-bounce">
          <div className="w-2 h-2 bg-cyan-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default About;
