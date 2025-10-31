import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import HeroSlide1 from "./HeroSlide1";
import HeroSlide2 from "./HeroSlide2";

export default function Hero() {
  const [index, setIndex] = useState(0);

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
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-coal text-white">
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

// import { useState } from "react";
// import { useEffect } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import HeroSlide from "./HeroSlide";
// import anetteOgLine from "../../assets/images/anette-og-line.png";
// import kodePC from "../../assets/images/kode-pc.png";

// const slides = [
//   {
//     id: 1,
//     title: "Fra idé til ferdig produkt!!!",
//     subtitle: "Vi hjelper deg hele veien.!!",
//     // image: kodePC,
//     showNames: false,
//     isKodeSlide: true,
//   },
//   {
//     id: 2,
//     title: "Vi bygger digitale opplevelser",
//     subtitle: "Kodera – utvikling gjort enkelt.",
//     image: anetteOgLine,
//     showNames: true,
//     isKodeSlide: false,
//   },
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((i) => (i + 1) % slides.length);
//     }, 10000); // 7 seconds between slides

//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => setIndex((i) => (i + 1) % slides.length);

//   console.log("Hero is rendering");

//   return (
//     <section className="relative   w-full z-10 h-screen overflow-hidden flex items-center justify-center bg-coal text-white ">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={slides[index].id}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           className="absolute inset-0 z-0"
//         >
//           <HeroSlide
//             title={slides[index].title}
//             subtitle={slides[index].subtitle}
//             image={slides[index].image}
//             showNames={slides[index].showNames}
//             isKodeSlide={slides[index].isKodeSlide}
//           />
//         </motion.div>
//       </AnimatePresence>
//       <div className="absolute bottom-8 flex gap-2">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`w-3 h-3 rounded-full  transition-all ${
//               i === index ? "bg-pink-500 w-3 h-3" : "bg-gray-500/50"
//             }`}
//           />
//         ))}
//       </div>

//     </section>
//   );
// }
