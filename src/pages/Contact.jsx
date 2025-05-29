import { IoMail } from "react-icons/io5";
import Footer from "../components/Footer";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {

  const socialIcons = [
    {
      href: "https://github.com/SanjayvVarma",
      icon: <FaGithub className="text-xl" />,
      label: "GitHub",
    },
    {
      href: "https://www.instagram.com/sanjayazad_/",
      icon: <FaInstagram className="text-xl" />,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/sanjaykvarma/",
      icon: <FaLinkedin className="text-xl" />,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com/SanjayAzad_",
      icon: <FaTwitter className="text-xl" />,
      label: "Twitter",
    },
    {
      href: "mailto:skvarma914@gmail.com",
      icon: <IoMail className="text-xl" />,
      label: "Email",
    },
  ]

  return (
    <section id="contact" className="bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white px-4 py-10 md:px-10 lg:px-20">

      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-cyan-400 tracking-wide drop-shadow-lg text-center">
        CONTACT ME
      </h2>

      <div
        className="rounded-lg border-2 border-cyan-400 shadow-xl bg-[#0a547c7c] bg-[url('./assets/contact-us.jpg')] bg-cover bg-center p-6 sm:p-10"
        data-aos="zoom-in"
        data-aos-duration="700"
      >
        <div className="text-center mb-6">
          <h5 className="text-lg font-medium">Hy 👋,</h5>
          <h3 className="text-2xl font-bold">SEND ME A MESSAGE</h3>
        </div>

        <hr className="border-yellow-400 mb-6" />

        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl md:text-3xl font-semibold">Getting in touch is easy!</h3>
            <p className="text-lg">📞 900XXXXXXX</p>
            <p className="text-lg">✉️ skvarma914@gmail.com</p>

            <div className="flex gap-4 flex-wrap mt-4">
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="bg-black border border-yellow-400 rounded-full h-12 w-12 flex justify-center items-center hover:bg-cyan-500 hover:text-black transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <p className="text-lg italic mt-6">
              "Built with <span className="text-red-500">❤️</span> and passion for the web."
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-transparent border-2 border-white rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full bg-transparent border-2 border-white rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              />
              <textarea
                rows={4}
                placeholder="About You"
                required
                className="w-full bg-transparent border-2 border-white rounded-md px-4 py-2 text-white resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              ></textarea>
              <button
                type="submit"
                className="w-full sm:w-[150px] px-4 py-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-md transition self-start"
              >
                SEND MSG
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;