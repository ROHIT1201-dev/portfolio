
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <div className="font-medium text-3xl mx-4 text-white">Rr</div>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl pointer">
        <a href="https://github.com/rohit-raj25" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/rohit-raj10/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://leetcode.com/u/rohitraj25/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </a>
        <a href="https://www.instagram.com/_.rohitrajput_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
