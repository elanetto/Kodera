// src/Components/TechLogoLoop/index.jsx
import { techIconMap } from "../TechIcons/iconMap";

export default function TechLogoLoop() {
  // convert the map to an array of { src, alt }
  const icons = Object.values(techIconMap);

  return (
    <section className="w-full py-12 bg-paperwhite overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-loop-left gap-12 sm:gap-24">
          {[...Array(2)].map((_, i) =>
            icons.map((icon) => (
              <img
                key={`${i}-${icon.alt}`}
                src={icon.src}
                alt={icon.alt}
                className="h-12 sm:h-12 w-auto opacity-90 transition duration-300"
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
