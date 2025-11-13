// src/Components/TechLogoLoop/index.jsx
import css from "../../assets/devIcons/css3-02-svgrepo-com.svg";
import typescript from "../../assets/devIcons/typescript-icon-svgrepo-com.svg";
import js from "../../assets/devIcons/js-badge-svgrepo-com.svg";
import react from "../../assets/devIcons/react-svgrepo-com.svg";
import html from "../../assets/devIcons/html-124-svgrepo-com.svg";
import tailwind from "../../assets/devIcons/tailwind-svgrepo-com.svg";
import figma from "../../assets/devIcons/figma-svgrepo-com.svg";
import canva from "../../assets/devIcons/canva-svgrepo-com.svg";
import github from "../../assets/devIcons/github-142-svgrepo-com.svg";
import postman from "../../assets/devIcons/postman-icon-svgrepo-com.svg";

export default function TechLogoLoop() {
  const icons = [
    { src: js, alt: "JavaScript" },
    { src: tailwind, alt: "Tailwind" },
    { src: react, alt: "React" },
    { src: css, alt: "CSS" },
    { src: typescript, alt: "TypeScript" },
    { src: figma, alt: "Figma" },
    { src: canva, alt: "Canva" },
    { src: html, alt: "HTML" },
    { src: github, alt: "GitHub" },
    { src: postman, alt: "Postman" },
  ];

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
                className="h-12 sm:h-12 w-auto opacity-90  transition duration-300 "
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
