import experiences from '../data/experience';

const Experience = () => {

  return (
    <section id="experience" className="bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white py-14 px-6 flex flex-col items-center relative">

      <h2 className="text-5xl font-extrabold mb-10 text-cyan-400 tracking-wide drop-shadow-lg text-center">
        EXPERIENCE
      </h2>

      <div className="w-full max-w-6xl space-y-8">
        {experiences.map((data) => (
          <div
            key={data.id}
            className="flex flex-col md:flex-row p-2 bg-gray-900 bg-opacity-60 rounded-3xl border border-yellow-500 shadow-lg hover:shadow-yellow-400/60 transition-shadow duration-300 overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="md:w-1/4 flex justify-center items-center p-8">
              <img
                src={data.imageSrc}
                alt={data.role}
                className="rounded-full w-36 h-36 object-cover shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="md:w-3/4 flex flex-col justify-center items-center text-center">
              <h3 className="text-3xl font-semibold text-cyan-400 mb-3">{data.role}</h3>

              <p className="text-yellow-400 font-semibold mb-4 text-lg">
                {data.startDate} - {data.endDate} ,<span className="text-white ml-2">{data.location}</span>
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-base leading-relaxed max-w-xl">
                {
                  data.experiences.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))
                }
              </ul>
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

export default Experience;