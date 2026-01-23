// import { useState } from "react";
// import { FaAngleLeft } from "react-icons/fa6";
// import { FaAngleRight } from "react-icons/fa6";

// export default function ImageCarousel({ images }) {
//   const [index, setIndex] = useState(0);

//   const next = () => setIndex((i) => (i + 1) % images.length);
//   const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

//   if (!images || images.length === 0) return null;

//   return (
//     <div className="relative w-full max-w-xl  ">
//       <img
//         src={images[index]}
//         alt="gallery"
//         className="w-full rounded-xl shadow-md   max-[400px]:h-55 max-[471px]:h-70 max-[560px]:h-80 h-100 object-fill"
//       />

//       <button
//         onClick={prev}
//         className=" absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 text-coal px-2 py-2 rounded-full shadow-lg cursor-pointer"
//       >
//         <FaAngleLeft />
//       </button>

//       <button
//         onClick={next}
//         className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 text-coal px-2 py-2 rounded-full shadow-lg cursor-pointer"
//       >
//         <FaAngleRight />
//       </button>
//     </div>
//   );
// }
