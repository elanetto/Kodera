import { motion, AnimatePresence } from "motion/react";

import { useState, useEffect } from "react";

export default function AnimatedText({ text }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.h1
      className="text-4xl md:text-6xl font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayed}
      <span className="animate-ping">|</span>
    </motion.h1>
  );
}
