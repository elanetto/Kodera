import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSlide2.css";

import pcImg from "../../assets/heroImages/xbidbuddy.png";
import tabletImg from "../../assets/heroImages/yxholiday.png";
import mobileImg from "../../assets/heroImages/xwholiday.png";
import somethingImg from "../../assets/heroImages/xgame.png";
import someImg from "../../assets/heroImages/xmuseum.png";
import etcImg from "../../assets/heroImages/xmbid.png";
import etc2Img from "../../assets/heroImages/xmholiday.png";
import etc3Img from "../../assets/heroImages/xmhol.png";
import etc4Img from "../../assets/heroImages/xmgamee.png";

import showcaseImg from "../../assets/heroImages/showcase.png";

export default function HeroSlide2() {
  // --- cycle the "hand with mobile" images ---
  const phoneImages = [etcImg, etc2Img, etc3Img, etc4Img];
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phoneImages.length);
    }, 2700); // ~10s total cycle
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-text-wrapper relative flex flex-col justify-center items-center lg:items-start px-6 md:px-12 min-h-[calc(100vh-80px)] bg-coal text-white mt-[100px] overflow-hidden">
      <div className="items-in-hero pb-60 md:pb-70 lg:pb-0 z-40  flex flex-col items-center  justify-center text-center lg:items-start lg:justify-start lg:text-left ">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl  font-oswald w-full text-hero-widt-lg  "
        >
          Fra idé til ferdig produkt
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-300  z-40 pt-8 pb-8 text-hero-widt-p"
        >
          Vi hjelper deg hele veien — fra design til kode.
        </motion.p>

        <motion.button
          onClick={() => navigate("/portfolio")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="cta-btn"
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
      <div className="phones absolute bottom-0 right-[-60px] z-20">
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

      <div className="still flex justify-center items-center">
        <img src={showcaseImg} alt="project" className="" />
      </div>
    </section>
  );
}
