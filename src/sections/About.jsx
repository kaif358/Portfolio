import { useState, useRef } from "react";
import ProfileButton from "../components/ProfileButton";
import ProfilePopup from "../components/ProfilePopup";
import { AnimatePresence } from "framer-motion";
import WhatIDoSimple from './WhatIDo';
import CustomCursor from '../components/CustomCursor';

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const aboutSectionRef = useRef(null);
  const profileButtonRef = useRef(null);
  return (
    <>
    <div className="relative bg-black pt-2 px-4">
    <div ref={aboutSectionRef} id='hero' className="flex flex-col justify-start items-center pt-6 md:pt-10 bg-black gap-4">
      <ProfileButton ref={profileButtonRef} onClick={() => setIsOpen(true)} />
       <WhatIDoSimple /> 
    </div>
    <CustomCursor sectionRef={aboutSectionRef} targetRef={profileButtonRef}/>
    <AnimatePresence>
        {isOpen && <ProfilePopup onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </div>
    </>
  );
}

export default About;

