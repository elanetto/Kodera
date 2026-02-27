import { Link } from "react-router-dom";
import TechIcons from "../TechIcons";
import { TiArrowRightThick } from "react-icons/ti";

export default function PortfolioCard({ project, variant = "grid" }) {
  if (!project) return null;
  const iconAlign = variant === "grid" ? "center" : "left";
  const firstImage = project.images?.[0];
  const thumbnail =
    typeof firstImage === "string"
      ? { src: firstImage, alt: project.title }
      : firstImage;

  return (
    <Link
      to={`/portfolio/${project.id}`}
      className="
        group  rounded-2xl overflow-hidden mx-auto
        bg-coal
        hover:shadow-xl hover:shadow-coal/10 border-0 ring-0 outline-none
        flex flex-col h-full
      "
    >
      {/* Thumbnail (NO overlay here) */}
      {thumbnail?.src && (
        <div className="relative overflow-hidden ">
          <img
            src={thumbnail.src}
            alt={thumbnail.alt || project.title}
            className="w-full h-48 md:h-56 object-cover object-top transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}

      {/* CONTENT AREA (flex-1 so it stretches to bottom) */}
      <div className="relative flex-1">
        {/* Overlay ONLY on content */}
        <div
          className="
            pointer-events-none 
            absolute inset-0
            bg-coal/50
            backdrop-blur-sm
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            z-10
          "
        />

        {/* Content */}
        <div
          className="
            relative z-20
            p-5
            h-full
            flex flex-col text-center items-center justify-center
            transition-opacity duration-300
            group-hover:opacity-60
          "
        >
          <div>
            <h2 className="text-2xl uppercase font-oswald font-medium text-white mb-2">
              {project.title}
            </h2>

            {project.subtitle && (
              <p className="text-base uppercase font-medium tracking-widest text-pinky mb-2 font-oswald">
                {project.subtitle}
              </p>
            )}
          </div>

          {project.description && (
            <p className="mt-1 text-base text-lightgray line-clamp-3">
              {project.description}
            </p>
          )}

          {project.tech?.length > 0 && (
            <div className="mt-4 w-full">
              <TechIcons techKeys={project.tech} size="sm" align={iconAlign} />
            </div>
          )}
        </div>

        {/* CTA ON TOP OF OVERLAY (centered within content area) */}
        <p
          className="
            pointer-events-none
            absolute inset-0 z-30 backdrop-blur-sm
            flex items-center justify-center gap-2
            text-lg tracking-widest uppercase font-oswald font-medium text-white
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        >
          Se flere detaljer <TiArrowRightThick />
        </p>
      </div>
    </Link>
  );
}

// // src/Components/PortfolioCard/index.jsx
// import { Link } from "react-router-dom";
// import TechIcons from "../TechIcons";
// import { TiArrowRightThick } from "react-icons/ti";

// export default function PortfolioCard({ project }) {
//   if (!project) return null;

//   const firstImage = project.images?.[0];
//   const thumbnail =
//     typeof firstImage === "string"
//       ? { src: firstImage, alt: project.title }
//       : firstImage;

//   return (
//     <Link
//       to={`/portfolio/${project.id}`}
//       className="
//     group block rounded-2xl overflow-hidden  mx-auto
//     bg-coal
//     hover:shadow-xl hover:shadow-coal/10"
//     >
//       {/* Thumbnail */}
//       {thumbnail?.src && (
//         <div className="relative">
//           <img
//             src={thumbnail.src}
//             alt={thumbnail.alt || project.title}
//             className="w-full h-48 md:h-56 object-cover object-top transition duration-300 group-hover:scale-[1.02] group-hover:opacity-95"
//           />
//           {/* Subtle dark overlay on hover */}
//           <div className="absolute inset-0 bg-gradient-to-t from-coal/50 via-transparent to-transparent opacity-0 group-hover:scale-[1.02] group-hover:opacity-100 transition" />
//         </div>
//       )}

//       {/* Content */}
//       <div className="p-5 flex flex-col text-center items-center justify-center ">
//         <div className=" gap-3 ">
//           <div>
//             <h2 className="text-2xl uppercase  font-oswald font-medium  text-white mb-2 ">
//               {project.title}
//             </h2>

//             {project.subtitle && (
//               <p className="text-base uppercase font-medium tracking-widest text-pinky mb-2 font-oswald">
//                 {project.subtitle}
//               </p>
//             )}
//           </div>
//         </div>

//         {project.description && (
//           <p className="mt-1  text-base  text-lightgray line-clamp-3">
//             {project.description}
//           </p>
//         )}

//         {/* Tech icons */}
//         {project.tech && project.tech.length > 0 && (
//           <div className="mt-4 ">
//             <TechIcons techKeys={project.tech} size="sm" />
//           </div>
//         )}

//         <p
//           className="
//             flex flex-row absolute items-center align-center gap-2 mt-4 text-base font-medium text-lightgray  opacity-0 group-hover:opacity-100
//             transition
//           "
//         >
//           Se flere detaljer <TiArrowRightThick />
//         </p>
//       </div>
//     </Link>
//   );
// }
