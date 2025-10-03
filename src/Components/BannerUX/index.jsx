import BgImage from "../../assets/carousel/main/Karusellbilde1.jpg";
import CurlyPinkSVG from "../../assets/images/curly-pink-to-the-right.svg";
import DarkSVGbg from "../../assets/images/darl-bg-to-the-curly-bracket.svg";
import UXcontactForm from "../UXcontactForm";

export default function UXbanner() {
  return (
    <section className="w-full">
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        
        {/* ---------- MOBILE LAYOUT ---------- */}
        <div
          className="flex md:hidden relative w-full h-[400px] bg-cover bg-center items-center justify-center text-center px-6 rounded-xl overflow-hidden"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 text-white">
            <h2 className="text-3xl font-bold font-koulen">TILBUD:</h2>
            <p className="mt-2 text-lg">Gratis UX konsultasjon</p>
            <p className="text-sm text-gray-300 line-through">
              Veil. pris: kr 10 000
            </p>
            <div className="mt-6">
              <UXcontactForm />
            </div>
          </div>
        </div>

        {/* ---------- DESKTOP LAYOUT ---------- */}
        <div className="hidden md:flex flex-row h-[400px] rounded-xl overflow-hidden">
          {/* Left coal background (1/4) */}
          <div className="bg-coal text-white flex items-center justify-end px-8 w-1/4 relative z-10 rounded-l-xl">
            <div className="max-w-sm text-left mr-6">
              <h2 className="text-4xl font-bold font-koulen">TILBUD:</h2>
              <p className="mt-2 text-xl">Gratis UX konsultasjon</p>
              <p className="text-sm text-gray-400 line-through">
                Veil. pris: kr 10 000
              </p>
            </div>
          </div>

          {/* Right background image (3/4) */}
          <div
            className="relative w-3/4 bg-cover bg-center flex items-center justify-center px-12 rounded-r-xl"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            <div className="absolute inset-0 bg-black/50 rounded-r-xl" />
            <div className="relative z-10">
              <UXcontactForm />
            </div>
          </div>

          {/* Curly divider overlay */}
          <div className="absolute top-0 left-[27%] -translate-x-1/2 h-full z-20 pointer-events-none">
            <div className="relative h-full">
              <img
                src={DarkSVGbg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-contain z-0"
              />
              <img
                src={CurlyPinkSVG}
                alt=""
                aria-hidden="true"
                className="relative z-10 h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
