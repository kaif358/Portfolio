import { motion } from "framer-motion";
import { X } from "lucide-react"; // using lucide for clean icons
import profileimg1 from '../assets/img4.jpg';
import './ProfilePopup.css';

function ProfilePopup({ onClose }) {
  return (
    <motion.div
  className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50"
  onClick={onClose}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>

      <motion.div
        className="relative bg-[#111] text-white rounded-2xl w-[90%] max-w-2xl flex flex-col md:flex-row overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0.9 }}
transition={{ type: "spring", stiffness: 260, damping: 20 }}

      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Left: Profile Image + Name */}
        <div className="bg-[#1a1a1a] flex flex-col items-center justify-center p-6 md:w-1/3">
          <img
            src={ profileimg1 }
            alt="Profile Large"
            className="w-36 h-36 rounded-xl object-cover mb-6"
          />
          <div className="font-bold text-lg">Kaif Chaudhary</div>
        </div>

        {/* Right: About Me */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-2 text-[#1788ae]">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I am a web developer who loves building clean, animated, and user-friendly websites. I constantly work on improving my skills in frontend development, animations, and performance optimization. My goal is to deliver great results for clients and personal projects. Here are the technologies and tools I use to create these amazing websites.
          </p>
          <div class="skillsList">  
            <ul>
                <li>#HTML</li>
                <li>#CSS</li>
                <li>#JavaScript</li>
                <li>#react.js</li>
                <li>#node.js</li>
                <li>#express.js</li>
                <li>#mongoDB</li>
                <li>#mongoose</li>
                <li>#bootstrap</li>
                <li>#tailwind</li>
                <li>#git</li>
                <li>#github</li>
                <li>#terminal</li>
                <li>#figma</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProfilePopup;
