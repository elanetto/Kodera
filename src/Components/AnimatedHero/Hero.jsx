import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import HeroSlide from "./HeroSlide";
import anetteOgLine from "../../assets/images/anette-og-line.png";

const slides = [
  {
    id: 1,
    title: "Vi bygger digitale opplevelser",
    subtitle: "Kodera – utvikling gjort enkelt.",
    image: anetteOgLine,
  },
  {
    id: 2,
    title: "Fra idé til ferdig produkt!!!",
    subtitle: "Vi hjelper deg hele veien.!!",
    image: anetteOgLine,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((i) => (i + 1) % slides.length);

  console.log("Hero is rendering");

  return (
    <section className="relative   w-full z-10 h-screen overflow-hidden flex items-center justify-center bg-coal text-white ">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <HeroSlide
            title={slides[index].title}
            subtitle={slides[index].subtitle}
            image={slides[index].image}
          />
        </motion.div>
      </AnimatePresence>
      {/* <button
        onClick={nextSlide}
        className="absolute bottom-10 right-10 bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg z-11"
      >
        →
      </button> */}
      
    </section>
  );
}
