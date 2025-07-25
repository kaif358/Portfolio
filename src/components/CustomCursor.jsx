import { useEffect, useState } from "react";

function CustomCursor({ sectionRef, targetRef }) {
  const [isActive, setIsActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef?.current || !targetRef?.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();

      if (
        e.clientX >= sectionRect.left &&
        e.clientX <= sectionRect.right &&
        e.clientY >= sectionRect.top &&
        e.clientY <= sectionRect.bottom
      ) {
        setIsActive(true);

        const targetRect = targetRef.current.getBoundingClientRect();
        setPos({
          x: targetRect.left + targetRect.width + 20,
          y: targetRect.top + targetRect.height / 2 - 10,
        });
      } else {
        setIsActive(false);
      }
    };

    const handleScroll = () => {
      setIsActive(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRef, targetRef]);

  return (
    isActive && (
      <div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <div className="border border-[#444] px-[0.8em] py-[0.4em] rounded-full mb-2 mr-2 text-[12px] text-white shadow-lg relative button-with-tail">
          Click me
        </div>
      </div>
    )
  );
}

export default CustomCursor;
