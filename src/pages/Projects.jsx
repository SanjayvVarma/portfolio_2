import projects from '../data/projects';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white px-6 py-24 flex flex-col items-center relative">
  
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-16 text-cyan-400 tracking-wider drop-shadow-lg text-center">
        PROJECTS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2 flex flex-col border-2 border-cyan-400"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <div className="absolute -inset-[2px] bg-gradient-to-br from-cyan-500 via-purple-500 to-yellow-400 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition duration-500 pointer-events-none"></div>

            <div className="relative bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-2xl h-full flex flex-col">
  
              <div className="h-52 overflow-hidden rounded-t-2xl">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col justify-between flex-grow p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-[16px] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-between pt-2">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition duration-300"
                  >
                    Demo <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition duration-300"
                  >
                    Code <FaCode />
                  </a>

                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute md:bottom-0 bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-1 animate-bounce">
          <div className="w-2 h-2 bg-cyan-400 rounded-full" />
        </div>
      </div>

    </section>
  );
};

export default Projects;