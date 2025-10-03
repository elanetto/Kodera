import AnetteImage from "../../assets/images/Anette-dark-bg.jpg";
import LineImage from "../../assets/images/Line-dark-bg.jpg";
import CurlyPinkSVG from "../../assets/images/curly-pink-to-the-right.svg";
import DarkSVGbg from "../../assets/images/darl-bg-to-the-curly-bracket.svg";

function OmOss() {
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-3xl font-koulen text-coal p-8">
        Dette er Om Oss-siden
      </h2>

      {/* Section: Anette */}
      <section className="flex flex-col md:flex-row items-center max-w-5xl w-full p-6 gap-8">
        {/* Image + SVGs container */}
        <div className="relative flex-shrink-0 w-full md:w-1/3 flex justify-center">
          {/* Image itself */}
          <img
            src={AnetteImage}
            alt="Anette"
            className="relative z-10 w-full h-auto rounded-2xl shadow-md"
          />
          {/* Dark bg behind */}
          <img
            src={DarkSVGbg}
            alt=""
            aria-hidden="true"
            className="absolute right-[-80px] top-1/2 -translate-y-1/2 h-full z-0"
          />
          {/* Curly pink bracket */}
          <img
            src={CurlyPinkSVG}
            alt=""
            aria-hidden="true"
            className="absolute right-[-90px] top-1/2 -translate-y-1/2 h-full z-20"
          />
        </div>

        {/* Text right */}
        <div className="flex flex-col text-left w-full md:w-2/3 pl-24">
          <h3 className="text-2xl font-bold text-coal mb-2 font-koulen">
            Anette Therese Lindberg
          </h3>
          <p className="text-lg text-gray-700 mb-2 italic">
            Frontend-utvikler og Grafisk Designer
          </p>
          <p className="text-lg text-gray-700">
            Master i Digitale Medier, samt utdanning som FrontEnd Utvikler. Har
            erfaring som Digital Markdsfører, Grafisk Designer, Art Director og
            Lærer.
          </p>
          <div className="pt-5 flex gap-5">
            <a
              href="mailto:anette@kodera.no"
              className="flex items-center cursor-pointer "
            >
              <p className="text-lg text-pinky hover:italic hover:text-pink-900">
                anette@kodera.no
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/anettetherese/"
              className="flex items-center cursor-pointer "
            >
              <p className="text-lg text-pinky hover:italic hover:text-pink-900">
                LinkedIn
              </p>
            </a>
            <a
              href="https://anette-portfolio.onrender.com/"
              className="flex items-center cursor-pointer "
            >
              <p className="text-lg text-pinky hover:italic hover:text-pink-900">
                Portfolio
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Section: Line */}
      <section className="flex flex-col md:flex-row items-center max-w-5xl w-full p-6 gap-8">
        {/* Image + SVGs container */}
        <div className="relative flex-shrink-0 w-full md:w-1/3 flex justify-center">
          {/* Image itself */}
          <img
            src={LineImage}
            alt="Line"
            className="relative z-10 w-full h-auto rounded-2xl shadow-md"
          />
          {/* Dark bg behind */}
          <img
            src={DarkSVGbg}
            alt=""
            aria-hidden="true"
            className="absolute right-[-80px] top-1/2 -translate-y-1/2 h-full z-0"
          />
          {/* Curly pink bracket */}
          <img
            src={CurlyPinkSVG}
            alt=""
            aria-hidden="true"
            className="absolute right-[-90px] top-1/2 -translate-y-1/2 h-full z-20"
          />
        </div>

        {/* Text right */}
        <div className="flex flex-col text-left w-full md:w-2/3 pl-24">
          <h3 className="text-2xl font-bold text-coal mb-2 font-koulen">
            Line Svensen
          </h3>
          <p className="text-lg text-gray-700 mb-2 italic">
            Front-End utvikler, UX-designer og forretningsstrateg
          </p>
          <p className="text-lg text-gray-700">
            Høyere fagskoleutdanning innen Front-End Development. Bachelor i
            innovasjon og forretningsutvikling.
          </p>
          <div className="pt-5 flex gap-5">
            <a
              href="mailto:line@kodera.no"
              className="flex items-center cursor-pointer "
            >
              <p className="text-lg text-pinky hover:italic hover:text-pink-900">
                line@kodera.no
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/line-svensen-967131122/"
              className="flex items-center cursor-pointer "
            >
              <p className="text-lg text-pinky hover:italic hover:text-pink-900">
                LinkedIn
              </p>
            </a>
            <a
              href="https://ls-dev.vercel.app/"
              className="flex items-center cursor-pointer "
            >
              <p className="text-lg text-pinky hover:italic hover:text-pink-900">
                Portfolio
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OmOss;
