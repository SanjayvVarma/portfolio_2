import skills from '../data/skills';

const Skills = () => {

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white flex flex-col items-center px-6 py-14 relative">

      <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-cyan-400 tracking-wider drop-shadow-lg text-center">
        SKILLS
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5 max-w-4xl w-full">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="flex flex-col items-center justify-center space-y-3 p-6 rounded-xl border-2 border-cyan-400 bg-gradient-to-tr from-purple-900 via-pink-900 to-red-900 hover:scale-105 hover:border-cyan-300 transition-all duration-300 shadow-md"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img
              src={skill.imageSrc}
              alt={skill.title}
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-lg font-semibold text-center">{skill.title}</h3>
          </div>
        ))}

      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-1 animate-bounce">
          <div className="w-2 h-2 bg-cyan-400 rounded-full" />
        </div>
      </div>

    </section>
  );
};

export default Skills;