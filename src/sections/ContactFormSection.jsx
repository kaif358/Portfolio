import { Typewriter } from 'react-simple-typewriter';

function ContactFormSection() {
  return (
    <section id="contact" className="bg-black text-white py-12 px-4 mb-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          <Typewriter
            words={["Let's Connect", "Leave Your Thoughts"]}
            loop={0} // infinite
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition"
          >
            Submit
          </button>
        </form>
      </div>
       <div className='mt-16 flex justify-center'>
          <a
          href="/Kaif_resume(1).pdf" // replace with your actual resume path or Google Drive direct download link
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
