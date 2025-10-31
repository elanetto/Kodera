import { motion } from "motion/react";
import AnimatedText from "./AnimatedText";
import anetteOgLine from "../../assets/images/anette-og-line.png";

export default function HeroSlide1({
  title,
  subtitle,
  image = anetteOgLine,
  showNames = true,
}) {
  return (
    <section
      className="
        relative 
        w-full 
        flex flex-col justify-center md:justify-start 
        bg-coal
        bg-[url('/src/assets/images/kode-pc.png')]
        bg-top bg-no-repeat bg-cover
        before:content-[''] before:absolute before:inset-0
        before:bg-gradient-to-t before:from-coal/70 before:via-coal before:to-coal
        px-6 md:px-12
        mt-[80px]
        min-h-[calc(100vh-80px)]
      "
    >
      {/* LEFT: TEXT */}
      <div className="z-10 flex mb-80 mt-8 sm:mb-80 md:mb-0 md:mt-10 lg:mt-50 flex-col justify-center text-center md:text-left md:w-1/2 space-y-6">
        <AnimatedText text={title || "Vi bygger digitale opplevelser"} />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-lg text-gray-300"
        >
          {subtitle || "Kodera – utvikling gjort enkelt."}
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="bg-darkpink hover:bg-darkpinkhover cursor-pointer px-6 py-2 w-[170px] rounded-lg mx-auto md:mx-0"
        >
          Kontakt oss
        </motion.button>
      </div>

      {/* RIGHT: IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center md:justify-end items-end"
      >
        <img
          src={image}
          alt="Anette og Line"
          className="h-[270px] sm:h-[340px] md:h-[400px] lg:h-[520px] w-auto object-contain drop-shadow-2xl md:mr-8"
        />

        {showNames && (
          <>
            {/* Names above heads */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="absolute bottom-[180px] right-[79%] sm:bottom-[230px] sm:right-[71%] md:bottom-[410px] md:right-[360px] lg:bottom-[510px] lg:right-[530px] text-sm sm:text-base font-semibold text-lightpink drop-shadow-lg"
            >
              Line
              <motion.div
                className="w-[2px] h-[20px] bg-lightpink mt-3 ml-6 rotate-160"
                initial={{ width: 0 }}
                animate={{ width: 2 }}
                transition={{ delay: 1, duration: 0.6 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="absolute bottom-[240px] left-[78%] md:left-[80%] lg:left-[82%] sm:bottom-[220px] sm:right-[17%] md:bottom-[410px] md:right-[130px] lg:bottom-[510px] lg:right-[164px] text-sm sm:text-base font-semibold text-lightpink drop-shadow-lg"
            >
              Anette
              <motion.div
                className="w-[2px] h-[20px] bg-lightpink mt-3 ml-3 rotate-16"
                initial={{ width: 0 }}
                animate={{ width: 2 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              />
            </motion.div>
          </>
        )}
      </motion.div>
    </section>
  );
}

// import { motion } from "motion/react";
// import AnimatedText from "./AnimatedText";

// import kode1 from "../../assets/images/anette-holiday-pc.png";
// import kode2 from "../../assets/images/line-holiday-tablet.png";
// import kode3 from "../../assets/images/line-holiday-mobile.png";

// export default function HeroSlide({
//   title,
//   subtitle,
//   image,
//   showNames = false,
// }) {
//   return (
//     <section
//       className="
//         relative
//         w-full
//         flex flex-col justify-center md:justify-start
//         bg-coal
//     bg-[url('/src/assets/images/kode-pc.png')]
//     bg-top bg-no-repeat bg-cover
//     before:content-[''] before:absolute before:inset-0
//     before:bg-gradient-to-t before:from-coal/90 before:via-coal before:to-coal
//         px-6 md:px-12
//         mt-[80px]
//         min-h-[calc(100vh-80px)]
//       "
//     >
//       {/* LEFT: TEXT */}
//       <div className="z-10 flex mb-80 mt-8 sm:mb-80 md:mb-0 md:mt-10 lg:mt-50 flex-col justify-center text-center md:text-left md:w-1/2 space-y-6">
//         <AnimatedText text={title} />
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="text-lg text-gray-300"
//         >
//           {subtitle}
//         </motion.p>
//         <motion.button
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2 }}
//           className="bg-pink-500 hover:bg-pink-600 px-6 py-2 w-[170px] rounded-lg mx-auto md:mx-0"
//         >
//           Kontakt oss
//         </motion.button>
//       </div>

//       {/* RIGHT: IMAGE */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95, y: 30 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 2 }}
//         className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center md:justify-end items-end"
//       >
//         <img
//           src={image}
//           alt="Anette og Line"
//           className=" h-[270px] sm:h-[340px] md:h-[400px] lg:h-[520px] w-auto object-contain drop-shadow-2xl md:mr-8"
//         />
//         {showNames && (
//           <>
//             {/* Names above heads */}
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 3, duration: 0.8 }}
//               className="absolute bottom-[180px] right-[79%] sm:bottom-[230px] sm:right-[71%] md:bottom-[410px] md:right-[360px] lg:bottom-[510px] lg:right-[530px] text-sm sm:text-base font-semibold text-green-400 drop-shadow-lg"
//             >
//               Line
//               <motion.div
//                 className="w-[2px] h-[20px] bg-pink-500 mt-3 ml-6 rotate-160"
//                 initial={{ width: 0 }}
//                 animate={{ width: 2 }}
//                 transition={{ delay: 1, duration: 0.6 }}
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 2, duration: 0.8 }}
//               className="absolute bottom-[240px] left-[78%] md:left-[80%] lg:left-[82%] sm:bottom-[220px] sm:right-[17%] md:bottom-[410px] md:right-[130px] lg:bottom-[510px] lg:right-[164px]  text-sm sm:text-base font-semibold text-green-400 drop-shadow-lg"
//             >
//               Anette
//               <motion.div
//                 className="w-[2px] h-[20px] bg-pink-500 mt-3 ml-3 rotate-16"
//                 initial={{ width: 0 }}
//                 animate={{ width: 2 }}
//                 transition={{ delay: 1.4, duration: 0.6 }}
//               />
//             </motion.div>
//           </>
//         )}
//       </motion.div>
//     </section>
//   );
// }
