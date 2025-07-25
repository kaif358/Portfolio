import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import testimonialImg1 from '../assets/harshitImage.png';
import testimonialImg2 from '../assets/zaidImage.png';
import testimonialImg3 from '../assets/harshitImage.png';

function TestimonialSection() {
  const testimonials = [
    {
      text: "Working with Kaif was a seamless experience. His attention to detail, clean animations, and performance-focused development truly brought our vision to life. Highly recommended!",
      name: "Harshit Mittal",
      occupation: "Founder @Leorit | Digital Marketing Expert",
      image: testimonialImg1,
    },
    {
      text: "UniqueWash helped me present my services online in a clean, modern way, making it easy for customers to view pricing and contact. Since launching, I’ve received more client inquiries. Kaif did a great job designing the site to help attract more clients.",
      name: "Zaid Shahid",
      occupation: "A Professional Car Cleaning Expert",
      image: testimonialImg2,
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[current];

  return (
    <section className="bg-black text-white py-12 md:py-18 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Top bar with profile and buttons */}
        <div className="mb-6 flex items-center justify-between px-2">
          <div className="flex items-center gap-2">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-400">{testimonial.occupation}</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>
        </div>

        {/* Testimonial text */}
        <p className="text-base md:text-xl leading-relaxed text-gray-200 text-center px-2">
          “{testimonial.text}”
        </p>
      </div>
    </section>
  );
}

export default TestimonialSection;
