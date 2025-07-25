import { motion } from "framer-motion";

import { useState, useEffect } from 'react';

function WhatIDoSimple() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    "Frontend Development",
    "Animations", 
    "Performance"
  ];
  return (
    <>
    
    <section className="flex flex-col items-start text-center py-4 md:py-8 md:px-15 bg-black text-white">

      {/* What I Do */}
      <div className={`transform transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <h2 className="text-3xl font-light mb-8 tracking-wide text-gray-100">
          What I do:
        </h2>
      </div>

      <div className="flex flex-col gap-3 text-gray-300 mb-10  text-lg leading-relaxed">
        {services.map((service, index) => (
          <div
            key={index}
            className={`transform transition-all duration-700 ease-out cursor-pointer group ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 200 + 300}ms` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center">
              <span className={`text-orange-400 mr-4 transition-all duration-300 font-medium ${
                hoveredIndex === index ? 'text-orange-300 scale-110' : ''
              }`}>
                &gt;
              </span>
              <span className={`transition-all duration-300 font-medium tracking-wide ${
                hoveredIndex === index 
                  ? 'text-white translate-x-2 font-semibold' 
                  : 'text-gray-300'
              }`}>
                {service}
              </span>
            </div>
            {/* Subtle underline animation */}
            <div className={`h-px bg-gradient-to-r from-orange-400 to-transparent ml-8 mt-1 transition-all duration-500 ${
              hoveredIndex === index ? 'w-32 opacity-60' : 'w-0 opacity-0'
            }`}></div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className={`flex gap-4 transform transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`} style={{ transitionDelay: '900ms' }}>
        <button 
        onClick={() => window.location.href = "tel:+91 9873453568"}
        className="group px-6 py-3 rounded-full bg-[#1a1a1a] text-gray-200 border border-gray-600 hover:bg-gray-800 transition-all duration-300 font-['Inter',system-ui,sans-serif] font-medium tracking-wide hover:scale-105 hover:border-gray-500">
          Book a Call
        </button>
        <button 
        onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }}
        className="group px-6 py-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 font-['Inter',system-ui,sans-serif] font-medium tracking-wide hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
          Work With Me
        </button>
      </div>
    </section>
    
    </>
    
  );
}

export default WhatIDoSimple;
