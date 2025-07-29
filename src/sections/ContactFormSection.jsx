import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/mkgzbkgl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-12 px-4 mb-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          <Typewriter
            words={["Let's Connect", "Leave Your Thoughts"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="5"
            className="p-3 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white resize-none"
            ></textarea>

          <button
            type="submit"
            className="bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition"
            >
            Submit
          </button>
        </form>
        {submitted && (
          <p className="text-green-400 text-center font-medium my-4">
            ✅ Message sent successfully!
          </p>
        )}
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="/Kaif_resume(1).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-border-button active text-lg md:text-xl px-4 py-2 md:px-8 md:py-4"
          >
          Resume
        </a>
      </div>
    </section>
  );
}

export default ContactFormSection;
