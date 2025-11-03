import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import "./HeroSlide2.css";

import pcImg from "../../assets/images/xbidbuddy.png";
import tabletImg from "../../assets/images/yxholiday.png";
import mobileImg from "../../assets/images/xwholiday.png";
import somethingImg from "../../assets/images/xgame.png";
import someImg from "../../assets/images/xmuseum.png";
import etcImg from "../../assets/images/xmbid.png";
import etc2Img from "../../assets/images/xmholiday.png";
import etc3Img from "../../assets/images/xmhol.png";
import etc4Img from "../../assets/images/xmgamee.png";

export default function HeroSlide2() {
  // --- cycle the "hand with mobile" images ---
  const phoneImages = [etcImg, etc2Img, etc3Img, etc4Img];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phoneImages.length);
    }, 2700); // ~10s total cycle
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col justify-center items-start px-6 md:px-12 min-h-[calc(100vh-80px)] bg-coal text-white mt-[100px] overflow-hidden">
      <div className="z-10 space-y-4 text-left max-w-[600px]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl max-w-[600px] font-bold"
        >
          Fra idé til ferdig produkt
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-300 max-w-[600px]"
        >
          Vi hjelper deg hele veien — fra design til kode.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-pinky hover:bg-darkpink px-6 py-2 rounded-lg"
        >
          Se prosjekter
        </motion.button>
      </div>

      {/* 3D Rotating Card Carousel */}
      <div className="absolute right-40 bottom-30 flex justify-center">
        <div className="icon-cards">
          <div className="icon-cards__content">
            <div className="icon-cards__item">
              <img
                src={pcImg}
                alt="project"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="icon-cards__item">
              <img
                src={tabletImg}
                alt="project"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="icon-cards__item">
              <img
                src={mobileImg}
                alt="project"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="icon-cards__item">
              <img
                src={somethingImg}
                alt="project"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="icon-cards__item">
              <img
                src={someImg}
                alt="project"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sliding mobile-hand overlay */}
      <div className="absolute bottom-0 right-[-60px] z-20">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={phoneImages[index]}
            alt="mobile preview"
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -150, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-[250px] md:w-[450px] drop-shadow-2xl rotate-[-4deg]"
          />
        </AnimatePresence>
      </div>
    </section>
  );
}
