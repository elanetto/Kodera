import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import pricetag from "../../assets/whyUsImages/pricetag.png";
import handshake from "../../assets/whyUsImages/handshake.png";
import lightbulb from "../../assets/whyUsImages/lightbulb.png";
import female from "../../assets/whyUsImages/female.png";

function RevealOnScroll({ children, delay = 0, duration = 0.8, yOffset = 40 }) {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration, delay, ease: "easeOut" },
          });
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [controls, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}

export default function WhyUs() {
  return (
    <section className="pt-40 pb-30 w-full text-center overflow-x-clip">
      <div className="mx-auto max-w-screen-xl px-4">
        <RevealOnScroll delay={0.1}>
          <h2 className="text-3xl font-koulen text-title mb-6">
            Hvorfor velge Kodera?
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="mx-auto max-w-7xl text-gray-600 text-lg sm:text-2xl leading-relaxed">
            Lei av å vandre i mørket på leting etter de rette utviklerne?
            Kanskje du har sendt utallige e-poster frem og tilbake, bare for å
            oppdage at de ikke forstår hva du egentlig ønsker - og at prisen
            ender opp langt over det du hadde sett for deg? We got you!
          </p>
        </RevealOnScroll>

        {/* Icons + text */}
        <RevealOnScroll delay={0.3}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
            {/* 1. Pris */}
            <RevealOnScroll delay={0.1}>
              <div className="flex items-center flex-col text-center">
                <div className="inline-flex items-center justify-center rounded-full bg-coal p-4 size-30  sm:size-40">
                  <img src={pricetag} alt="Pris" className=" object-contain" />
                </div>
                <h2 className="text-darkpink font-semibold text-lg pb-4 pt-6">
                  Ekstremt gode priser - som ikke skjules
                </h2>
                <p className="pl-3 md:pl-0   text-center max-w-[500px] ">
                  Mange synes veien for å få en nettside utviklet er alt for
                  kronglete. Derfor velger vi å ikke skjule prisene våre. Vi
                  leverer nettsider og løsninger av høy kvalitet til svært
                  konkurransedyktige priser.
                </p>
              </div>
            </RevealOnScroll>

            {/* 2. Samarbeid */}
            <RevealOnScroll delay={0.3}>
              <div className="flex items-center flex-col text-center">
                <div className="inline-flex items-center justify-center rounded-full bg-coal p-4 size-30  sm:size-40">
                  <img
                    src={handshake}
                    alt="Samarbeid"
                    className="object-contain"
                  />
                </div>
                <h2 className="text-darkpink font-semibold text-lg pb-4 pt-6">
                  Lite team, tett sammarbeid
                </h2>
                <p className="pl-3 md:pl-0   text-center max-w-[500px]">
                  Som et lite team betyr dette fleksibilitet, rask og tett
                  kommunikasjon. Jo flere kokker, des mere søl. Her på kjøkkenet
                  er vi to personer. Kommunikasjon går raskt dersom det slipper
                  å gå igjennom mange ledd.
                </p>
              </div>
            </RevealOnScroll>

            {/* 3. Idé → Løsning */}
            <RevealOnScroll delay={0.6}>
              <div className="flex items-center flex-col text-center">
                <div className="inline-flex items-center justify-center rounded-full bg-coal p-4 size-30  sm:size-40">
                  <img src={lightbulb} alt="Idé" className="object-contain" />
                </div>
                <h2 className="text-darkpink font-semibold text-lg  pb-4 pt-6">
                  Vi forstår deg og dine ønsker
                </h2>
                <p className="pl-3 md:pl-0  text-center max-w-[500px]">
                  Programmerere som kan mer enn "bare" koding. Vi har en
                  fargerik bakrunn innen diverse yrker og utdanninger. Derfor
                  snakker vi ditt språk og forstår dine behov.
                </p>
              </div>
            </RevealOnScroll>

            {/* 4. Kundestøtte */}
            <RevealOnScroll delay={0.9}>
              <div className="flex items-center flex-col text-center">
                <div className="inline-flex items-center justify-center rounded-full bg-coal p-4 size-30  sm:size-40">
                  <img src={female} alt="Støtte" className=" object-contain" />
                </div>
                <h2 className="text-darkpink font-semibold text-lg  pb-4 pt-6">
                  Kvinner som koder
                </h2>
                <p className="pl-3 md:pl-0  text-center max-w-[500px]">
                  I Norge er det kun rundt 20% av alle utviklere som er kvinner.
                  Ved å velge oss, støtter du kvinnlige utviklere!
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
