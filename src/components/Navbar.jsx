import { useState } from 'react';
import { HiX } from 'react-icons/hi';
import { FaBars } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="fixed w-full bg-gradient-to-br from-[#43277f] via-[#391e34] to-[#591091] text-white shadow-md py-2 px-10 flex justify-between items-center z-10 border-b border-blue-600">
      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        offset={-70}
        className="relative flex items-center h-11 rounded-full text-lg font-extrabold bg-gradient-to-r from-blue-900 via-cyan-600 to-blue-900 borderAnimation border-2 tracking-wide font-serif"
      >
        <span className="relative z-10 left-7 bottom-2.5 text-cyan-300 drop-shadow-md">SK</span>
        <span className="absolute left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">💓</span>
        <span className="relative z-10 text-green-200 right-3 top-2.5 drop-shadow-md" >PRTF</span>
      </ScrollLink>

      <button
        onClick={handleToggleIcon}
        aria-label={toggleIcon ? 'Close menu' : 'Open menu'}
        className="flex items-center gap-5 md:hidden text-cyan-400 focus:outline-none"
      >
        {toggleIcon ? <HiX size={28} /> : <FaBars size={28} />}
      </button>

      <div
        className={`fixed top-14 right-0 h-full w-1/2 bg-[#04152D] shadow-md md:static md:w-auto md:bg-transparent md:shadow-none transition-transform duration-300 ease-in-out ${toggleIcon ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:flex md:items-center md:gap-8`} >
        <ul className="flex flex-col md:flex-row md:gap-8 text-lg text-white text-center py-6 px-6 md:p-0">
          {[
            { to: 'home', label: 'Home' },
            { to: 'about', label: 'About Me' },
            { to: 'skills', label: 'Skills' },
            { to: 'projects', label: 'Projects' },
            { to: 'experience', label: 'Experience' },
            { to: 'contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <li
              key={to}
              className="border-b border-yellow-400 last:border-none md:border-none"
            >
              <ScrollLink
                to={to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleToggleIcon}
                activeClass="active-link"
                className="block py-3 relative rounded-md font-bold transition-all duration-200 cursor-pointer text-white hover:text-[#9dff00] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-[#9dff00] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
