import { forwardRef } from "react";
import { motion } from "framer-motion";
import profileimg1 from '../assets/img4.jpg';

const ProfileButton = forwardRef(({ onClick }, ref) => {
  return (
    <div className="flex flex-col items-center" ref={ref}>
      <motion.button
        onClick={onClick}
        className="flex items-center bg-[#2D2B2B] gap-2 md:gap-4 py-[0.5rem] px-[1rem] border border-[rgba(255,255,255,0.2)] backdrop-blur-[10px] rounded-full shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-transform text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.img
          src={profileimg1}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover md:w-13 sm:h-13"
        />
        <motion.span className="font-semibold text-base md:text-xl">
          Kaif Chaudhary
        </motion.span>
      </motion.button>
    </div>
  );
});

export default ProfileButton;
