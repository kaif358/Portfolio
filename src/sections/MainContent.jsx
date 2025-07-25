import { useRef } from 'react';
import { motion } from 'framer-motion';

import {
  About,
  ProjectShowcase,
  TestimonialSection,
  ContactFormSection,
  Footer,
  BackToTop,
} from './index';

const MainContent = () => {
  const footerRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <About />
      <ProjectShowcase />
      <TestimonialSection />
      <ContactFormSection />
      <Footer ref={footerRef} />
      <BackToTop footerRef={footerRef} />
    </motion.div>
  );
};

export default MainContent;
