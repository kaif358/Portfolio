import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onFinish }) {
  const [filled, setFilled] = useState([false, false, false, false, false]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timers = [
      setTimeout(() => setFilled([true, false, false, false, false]), 0),
      setTimeout(() => setFilled([true, true, false, false, false]), 300),
      setTimeout(() => setFilled([true, true, true, false, false]), 600),
      setTimeout(() => setFilled([true, true, false, false, false]), 900),
      setTimeout(() => setFilled([true, true, true, false, false]), 1200),
      setTimeout(() => setFilled([true, true, false, false, false]), 1500),
      setTimeout(() => setFilled([true, true, true, true, false]), 1900),
      setTimeout(() => setFilled([true, true, true, true, true]), 1900),
      setTimeout(() => setVisible(false), 2400),
      setTimeout(() => onFinish(), 2800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
        >
          <div className="flex gap-4">
            {filled.map((isFilled, idx) => (
              <div
                key={idx}
                className={`w-6 h-6 rounded-full border-2 border-white transition-all duration-300 ${
                  isFilled ? "bg-white" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
