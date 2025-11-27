import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSlide1 from "./HeroSlide1";
import HeroSlide2 from "./HeroSlide2";

export default function Hero() {
  const [index, setIndex] = useState(0);

  const MotionDiv = motion.div;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % 2);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    { id: 1, component: <HeroSlide1 /> },
    { id: 2, component: <HeroSlide2 /> },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-coal text-white -mt-24 sm:-mt-28">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {slides[index].component}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
