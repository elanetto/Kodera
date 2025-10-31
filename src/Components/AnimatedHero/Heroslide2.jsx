import { motion } from "motion/react";
import "./HeroSlide2.css";

import pcImg from "../../assets/images/anette-holiday-pc.png";
import tabletImg from "../../assets/images/line-holiday-tablet.png";
import mobileImg from "../../assets/images/line-holiday-mobile.png";

export default function HeroSlide2() {
  return (
    <section className="relative flex flex-col justify-center items-start px-6 md:px-12 min-h-[calc(100vh-80px)] bg-coal text-white mt-[100px] overflow-hidden">
      <div className="z-10 space-y-4 text-left max-w-[600px]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Fra idé til ferdig produkt
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-300"
        >
          Vi hjelper deg hele veien — fra design til kode.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-lg"
        >
          Se prosjekter
        </motion.button>
      </div>

      {/* 3D Rotating Card Carousel */}
      <div className="absolute right-40 bottom-60    flex justify-center  ">
        <div className="icon-cards">
          <div className="icon-cards__content">
            <div className="icon-cards__item">
              <img
                src={pcImg}
                alt="project"
                className="w-full h-full object-fill rounded-lg"
              />
            </div>

            <div className="icon-cards__item">
              <img
                src={pcImg}
                alt="project"
                className="w-full h-full object-fill rounded-lg"
              />
            </div>
            <div className="icon-cards__item">
              <img
                src={pcImg}
                alt="project"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="icon-cards__item">
              <img
                src={pcImg}
                alt="project"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="icon-cards__item">
              <img
                src={pcImg}
                alt="project"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
