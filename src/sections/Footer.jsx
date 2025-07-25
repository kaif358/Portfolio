// src/components/Footer.jsx
import kc_logo from '../assets/kc_logo01.png';
import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter, FaDribbble } from "react-icons/fa6";
import { forwardRef } from "react"; 

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-[#111] text-white py-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-2">
        
        {/* Left Column */}
        <div className="text-sm text-gray-400">
          Kaif Chaudhary © 2025
        </div>

        {/* Middle Column */}
        {/* <div className="text-2xl font-bold tracking-widest">
          KC
        </div> */}
        <a href="#hero">
            <img src={ kc_logo } className='w-8 h-8 object-contain' alt="logo" />
        </a>
        

        {/* Right Column */}
        <div className="flex items-center gap-4 text-xl">
          <a href="https://www.linkedin.com/in/kaif-chaudhary-1039662b7/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/kaif358" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaGithub />
          </a>
          <a href="https://instagram.com/build_with_kaif04" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaInstagram />
          </a>
          <a href="https://x.com/Kaif141621" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
