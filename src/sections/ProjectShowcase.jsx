import projectimg1 from '../assets/finwiseImage.png';
import projectimg3 from '../assets/yuhuImage.png';
import projectimg4 from '../assets/huddleImage.png';
import projectimg2 from '../assets/uniquewashImage.png';
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

import { Target } from 'lucide-react';

function ProjectShowcase() {
  const projects = [
    {
      id: 1,
      image: projectimg1,
      link: "https://kaif358.github.io/finwise/",
      Target: "_blank",
      about: "A clean, mobile-first frontend design for a finance management app to track expenses and visualize spending trends.",
      tech: "React.js, Tailwind CSS and JavaScript",
    },
    {
      id: 2,
      image: projectimg2,
      link: "https://kaif358.github.io/Uniquewash/",
      Target: "_blank",
      about: "A UniqueWash is an animated-scroll landing page for a car wash business, highlighting service rates, service offerings, and a contact area for direct customer access.",
      tech: "HTML, CSS, JavaScript, GSAP for animations and Google Sheets integration for form submissions.",
    },
    {
      id: 3,
      image: projectimg3,
      link: "https://kaif358.github.io/yuhu/",
      Target: "_blank",
      about: "A playful, GSAP-powered frontend project focused on modern transitions and smooth animations, allowing engaging user interactions with ease.",
      tech: "HTML, CSS, JavaScript, GSAP for advanced animations.",
    },
    {
      id: 4,
      image: projectimg4,
      link: "https://kaif358.github.io/huddle/",
      Target: "_blank",
      about: "A responsive landing page design for a community collaboration platform, focusing on clean sections and clear calls-to-action.",
      tech: "HTML, CSS and JavaScript",
    },
  ];

  return (
    <section className="bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 p-4"
            >
            <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full md:w-9/10 h-auto rounded-xl object-cover mx-auto"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-4"
            >
              <div className="text-lg font-semibold mb-1 px-12">{project.about}</div>
              <div className="text-sm text-gray-300 mb-2">{project.tech}</div>
              <FiExternalLink className="text-2xl text-white" />
            </motion.div>
            </a>

        ))}
      </div>  
    </section>
  );
}

export default ProjectShowcase;
