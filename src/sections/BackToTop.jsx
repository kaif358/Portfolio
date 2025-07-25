import { useEffect, useState } from "react";

export default function BackToTop({ footerRef }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!footerRef?.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShow(entry.isIntersecting);
        });
      },
      {
        root: null,
        threshold: 0.1, // triggers when 10% of footer is visible
      }
    );

    observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [footerRef]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <span
        onClick={scrollToTop}
        className="fixed bottom-3 md:bottom-10 right-3 border border-[#444] px-[0.8em] py-[0.4em] rounded-full text-[12px] text-white shadow-lg bg-black/70 backdrop-blur-md cursor-pointer transition-opacity duration-300 hover:bg-black"
      >
        Back to Top
      </span>
    )
  );
}
