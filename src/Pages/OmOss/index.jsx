import AnetteImage from "../../assets/images/Anette-dark-bg.jpg";
import LineImage from "../../assets/images/Line-dark-bg.jpg";
import CurlyPinkSVG from "../../assets/images/curly-pink-to-the-right.svg";
import DarkSVGbg from "../../assets/images/darl-bg-to-the-curly-bracket.svg";
import CurlyPinkSVGbottom from "../../assets/images/curly-pink-to-bottom.svg";
import Space from "../../Layout/Space"

import bildeAvOss from "../../assets/carousel/main/Karusellbilde1.jpg";

function OmOss() {
  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="relative w-full pb-8 bg-center bg-cover"
        style={{ backgroundImage: `url(${bildeAvOss})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Content above overlay */}
        <div className="relative text-coal w-full">
          <h1 className="text-5xl font-oswald text-white pt-16 text-center">
            Om Kodera
          </h1>

          <section className="flex justify-center items-center w-full p-6">
            <div className="w-full md:w-1/2 flex justify-center flex-col text-center text-white">
              <p className="pt-4">
                Kodera leverer kode av kvinner. Vi hjelper små til mellomstore
                bedrifter og kunder med å sette sammen skreddersydde nettsider
                for deres behov.
              </p>

              <p className="py-4">
                Ta uforpliktet kontakt med oss for å se om vi kan hjelpe:
              </p>

              <a
                href="mailto:kontakt@kodera.no"
                className="cursor-pointer text-lg text-pinky hover:italic hover:text-pink-900 text-center"
              >
                kontakt@kodera.no
              </a>
            </div>
          </section>
        </div>
      </div>

      <h1 className="font-oswald font-bold text-2xl text-title lg:text-2xl text-center pb-5 pt-15">
        OM OSS I KODERA
      </h1>

      {/* Section: Anette */}
      <section className="flex flex-col md:flex-row items-center max-w-5xl w-full p-6 gap-2 md:gap-8">
        {/* Image + SVGs container */}
        <div className="relative flex-shrink-0 w-full md:w-1/3 flex flex-col items-center">
          {/* Image itself */}
          <img
            src={AnetteImage}
            alt="Anette"
            className="relative z-10 w-full h-auto rounded-b-[6rem] rounded-t-2xl md:rounded-2xl shadow-md"
          />

          {/* --- DESKTOP SVGs (to the right) --- */}
          <img
            src={DarkSVGbg}
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute right-[-80px] top-1/2 -translate-y-1/2 h-full z-0"
          />
          <img
            src={CurlyPinkSVG}
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute right-[-90px] top-1/2 -translate-y-1/2 h-full z-20"
          />

          {/* --- MOBILE SVGs (under image) --- */}
          <div className="flex flex-col items-center pt-4 w-full md:hidden">
            <img
              src={CurlyPinkSVGbottom}
              alt=""
              aria-hidden="true"
              className="w-full h-full z-20 -translate-y-[110px] sm:-translate-y-[120px] md:-translate-y-[120px] lg:-translate-y-[150px]"
            />
          </div>
        </div>

        {/* Text right */}
        <div className="flex flex-col text-center md:text-left w-full md:w-2/3 md:pl-24 -mt-16 sm:-mt-24 md:mt-0">
          <h3 className="text-2xl font-bold text-coal mb-2 font-oswald">
            Anette Therese Lindberg
          </h3>
          <p className="text-lg text-gray-700 mb-2 italic">
            FrontEnd Utvikler, Digital Markedsfører og Grafisk Designer
          </p>
          <p className="text-lg text-gray-700">
            Master i Digitale Medier, samt utdanning som FrontEnd Utvikler. Har
            erfaring som Digital Markdsfører, Grafisk Designer, Art Director og som
            Lærer.
          </p>
          <div className="pt-5 flex flex-row gap-5 items-center md:items-start justify-center md:justify-start w-full">
            <a
              href="mailto:anette@kodera.no"
              className="flex items-center cursor-pointer"
            >
              <p className="text-lg text-pinky hover:italic hover:text-pink-900">
                anette@kodera.no
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/anettetherese/"
              className="flex items-center cursor-pointer"
            >
              <p className="text-lg text-pinky hover:italic hover:text-pink-900">
                LinkedIn
              </p>
            </a>
            <a
              href="https://anette-portfolio.onrender.com/"
              className="flex items-center cursor-pointer"
            >
              <p className="text-lg text-pinky hover:italic hover:text-pink-900">
                Portfolio
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Section: Line */}
      <section className="flex flex-col md:flex-row items-center max-w-5xl w-full p-6 gap-2 md:gap-8">
        {/* Image + SVGs container */}
        <div className="relative flex-shrink-0 w-full md:w-1/3 flex flex-col items-center">
          {/* Image itself */}
          <img
            src={LineImage}
            alt="Line"
            className="relative z-10 w-full h-auto rounded-b-[6rem] rounded-t-2xl md:rounded-2xl shadow-md"
          />

          {/* --- DESKTOP SVGs (to the right) --- */}
          <img
            src={DarkSVGbg}
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute right-[-80px] top-1/2 -translate-y-1/2 h-full z-0"
          />
          <img
            src={CurlyPinkSVG}
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute right-[-90px] top-1/2 -translate-y-1/2 h-full z-20"
          />

          {/* --- MOBILE SVGs (under image) --- */}
          <div className="flex flex-col items-center pt-4 w-full md:hidden">
            <img
              src={CurlyPinkSVGbottom}
              alt=""
              aria-hidden="true"
              className="w-full h-full z-20 -translate-y-[110px] sm:-translate-y-[120px] md:-translate-y-[120px] lg:-translate-y-[150px]"
            />
          </div>
        </div>

        {/* Text right */}
        <div className="flex flex-col text-center md:text-left w-full md:w-2/3 md:pl-24 -mt-16 sm:-mt-24 md:mt-0">
          <h3 className="text-2xl font-bold text-coal mb-2 font-oswald">
            Line Svensen
          </h3>
          <p className="text-lg text-gray-700 mb-2 italic">
            FrontEnd Utvikler, UX-Designer og Forretningsstrateg
          </p>
          <p className="text-lg text-gray-700">
            Høyere fagskoleutdanning innen Front-End Development. Bachelor i
            innovasjon og forretningsutvikling.
          </p>
          <div className="pt-5 flex flex-row gap-5 items-center md:items-start justify-center md:justify-start w-full">
            <a
              href="mailto:line@kodera.no"
              className="flex items-center cursor-pointer"
            >
              <p className="text-lg text-pinky hover:italic hover:text-pink-900">
                line@kodera.no
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/line-svensen-967131122/"
              className="flex items-center cursor-pointer"
            >
              <p className="text-lg text-pinky hover:italic hover:text-pink-900">
                LinkedIn
              </p>
            </a>
            <a
              href="https://ls-dev.vercel.app/"
              className="flex items-center cursor-pointer"
            >
              <p className="text-lg text-pinky hover:italic hover:text-pink-900">
                Portfolio
              </p>
            </a>
          </div>
        </div>
      </section>
      <Space size="xl" type="pad" />
    </div>
  );
}

export default OmOss;
