//ID1 Anette portfolio
import anettePort1 from "../assets/projectImages/anette-port.webp";

import anetteMob1 from "../assets/projectImages/anetteport1.webp";
import anetteMob2 from "../assets/projectImages/anetteport2.webp";
import anetteMob3 from "../assets/projectImages/anetteport3.webp";

//ID2 Anette portfolio
import elanettoMob1 from "../assets/projectImages/elanettoMob1.webp";
import elanettoMob2 from "../assets/projectImages/elanettoMob2.webp";
import elanettoMob3 from "../assets/projectImages/elanettoMob3.webp";

//ID3 Anette Holidaze
import anHolMob1 from "../assets/projectImages/anHolMob1.webp";
import anHolMob2 from "../assets/projectImages/anHolMob2.webp";
import anHolMob3 from "../assets/projectImages/anHolMob3.webp";

//ID4 FloppyFlap line
import ffMob1 from "../assets/projectImages/ffMob1.webp";
import ffMob2 from "../assets/projectImages/ffMob2.webp";
import ffMob3 from "../assets/projectImages/ffMob3.webp";

//ID5 Line Holidaze
import linHolMob1 from "../assets/projectImages/linHolMob1.webp";
import linHolMob2 from "../assets/projectImages/linHolMob2.webp";
import linHolMob3 from "../assets/projectImages/linHolMob3.webp";

//ID 6 bidbuddy line
import bbMob1 from "../assets/projectImages/bbMob1.webp";
import bbMob2 from "../assets/projectImages/bbMob2.webp";
import bbMob3 from "../assets/projectImages/bbMob3.webp";

//ID 7  dropshop line

import lidrop1 from "../assets/projectImages/lidrop1.webp";
import lidrop2 from "../assets/projectImages/lidrop2.webp";
import lidrop3 from "../assets/projectImages/lidrop3.webp";

//ID 8  gamehub anette

import anspill1 from "../assets/projectImages/angame11.png";
import anspill2 from "../assets/projectImages/anspill2.webp";
import anspill3 from "../assets/projectImages/anspill3.webp";

//ID 8  bryllup anette
import bryllupMob1 from "../assets/projectImages/bryllupMob1.webp";
import bryllupMob2 from "../assets/projectImages/bryllupMob2.webp";
import bryllupMob3 from "../assets/projectImages/bryllupMob3.webp";

//ID 10 diktglede
import maritProsjekt1 from "../assets/projectImages/maritprosjekt.webp";
import maritProsjekt2 from "../assets/projectImages/mabooks.webp";
import maritProsjekt3 from "../assets/projectImages/marev.webp";
import maritProsjekt4 from "../assets/projectImages/masingle.webp";
import maritMobile1 from "../assets/projectImages/screen-hjem.webp";
import maritMobile2 from "../assets/projectImages/screen-single-home.webp";
import maritMobile3 from "../assets/projectImages/screen-singlepage.webp";
import maritMobile4 from "../assets/projectImages/screen-cus.webp";

export const projects = [
  {
    id: "1",
    slug: "anette-therese-no",
    title: "Portfolioside: Anette Lindberg",
    subtitle: "Portfolioside for FrontEnd utvikler",
    description:
      "En oversiktlig og levende nettside som viser frem både CV, erfaring og portføljen til Anette Lindberg",
    tech: ["js", "react", "tailwind", "figma", "github", "html", "vite"],
    liveUrl: "https://anettetherese.no/",
    repoUrl: "https://github.com/elanetto/Portfolio-2",
    images: [
      "/portfolio/anettetherese/at-01.webp",
      anettePort1,
      "/portfolio/anettetherese/at-03.webp",
    ],
    mobileImages: [anetteMob1, anetteMob2, anetteMob3],
  },
  {
    id: "2",
    slug: "elanetto-design",
    title: "elanetto Design",
    subtitle: "Klistremerkebutikk",
    description:
      "En nettside som viser frem hjemmelagde klistremerker, og linker til Etsy.",
    tech: ["js", "react", "tailwind", "figma", "github", "vite", "html"],
    liveUrl: "https://www.elanetto.no/",
    repoUrl: "https://github.com/elanetto/elanetto2",
    images: [
      "/portfolio/elanetto/elanetto-01.webp",
      "/portfolio/elanetto/elanetto-02.webp",
      "/portfolio/elanetto/elanetto-03.webp",
    ],
    mobileImages: [elanettoMob1, elanettoMob2, elanettoMob3],
  },
  {
    id: "3",
    slug: "holidaze-anette",
    title: "Holidaze av Anette",
    subtitle: "Bookingnettside: Ferie",
    description:
      "Bookingnettside bygd med API gitt av Noroff. Eksamensprosjekt.",
    tech: ["js", "react", "tailwind", "figma", "github", "vite", "html", "css"],
    liveUrl: "https://dev-holiday.onrender.com/",
    repoUrl: "https://github.com/elanetto/Holiday",
    images: [
      "/portfolio/holidaze-a/hol-01.webp",
      "/portfolio/holidaze-a/hol-02.webp",
      "/portfolio/holidaze-a/hol-03.webp",
    ],
    mobileImages: [anHolMob1, anHolMob2, anHolMob3],
  },
  {
    id: "4",
    slug: "floppy-flap",
    title: "Floppy Flap",
    subtitle: "Spill",
    description: "Et morsomt spill inspirert av Angry Birds",
    tech: ["js", "react", "tailwind", "figma", "github", "vite", "html", "css"],
    liveUrl: "https://floppy-flap.vercel.app/",
    repoUrl: "https://github.com/LineSvensen/floppy-flap",
    images: [
      "/portfolio/floppyflap/floppy-01.webp",
      "/portfolio/floppyflap/floppy-02.webp",
      "/portfolio/floppyflap/floppy-03.webp",
    ],
    mobileImages: [ffMob1, ffMob2, ffMob3],
  },
  {
    id: "5",
    slug: "holidaze-line",
    title: "Holidaze av Line",
    subtitle: "Bookingnettide",
    description:
      "Bookingnettside - finn din neste feriedestinasjon! Nettsiden er byg på API gitt av Noroff. Eksamensprosjekt.",
    tech: ["js", "react", "tailwind", "figma", "github", "vite", "html", "css"],
    liveUrl: "https://pe2025.onrender.com/",
    repoUrl: "https://github.com/LineSvensen/Project-exam-2",
    images: [
      "/portfolio/holidaze-l/hol-01.webp",
      "/portfolio/holidaze-l/hol-02.webp",
      "/portfolio/holidaze-l/hol-03.webp",
    ],
    mobileImages: [linHolMob1, linHolMob2, linHolMob3],
  },
  {
    id: "6",
    slug: "bid-buddy",
    title: "BidBuddy",
    subtitle: "Auksjonsnettside",
    description:
      "Auskjonsnettside bygd i JavaScript med API gitt av Noroff. Eksamensprosjekt.",
    tech: ["js", "tailwind", "figma", "github", "vite", "html", "css"],
    liveUrl: "https://js2-sp-auction-website.vercel.app/",
    repoUrl: "https://github.com/LineSvensen/js2-sp-auction-website",
    images: [
      "/portfolio/bidbuddy/bidbuddy-01.webp",
      "/portfolio/bidbuddy/bidbuddy-02.webp",
      "/portfolio/bidbuddy/bidbuddy-03.webp",
    ],
    mobileImages: [bbMob1, bbMob2, bbMob3],
  },
  {
    id: "7",
    slug: "shop-drop",
    title: "ShopDrop",
    subtitle: "Nettsidehandel",
    description: "eCommerce nettside bygd med API gitt av Noroff.",
    tech: ["js", "tailwind", "figma", "github", "vite", "html", "css"],
    liveUrl: "https://shopdrop-online-store-react.netlify.app/",
    repoUrl: "https://github.com/LineSvensen/js2-sp-auction-website",
    images: [
      "/portfolio/shopdrop/shopdrop-01.webp",
      "/portfolio/shopdrop/shopdrop-02.webp",
      "/portfolio/shopdrop/shopdrop-03.webp",
    ],
    mobileImages: [lidrop1, lidrop2, lidrop3],
  },
  {
    id: "8",
    slug: "game-hub",
    title: "GameHub",
    subtitle: "Design: Nettsidehandel for spill",
    description:
      "eCommerce nettside bygd i ren HTML og CSS. Ikke funksjonell, fokuset her er kun design.",
    tech: ["figma", "github", "html", "css"],
    liveUrl: "https://game-hub-lake-one.vercel.app/index.html",
    repoUrl: "https://github.com/elanetto/game-hub",
    images: [
      "/portfolio/gamehub/gamehub-1.webp",
      "/portfolio/gamehub/gamehub-2.webp",
      "/portfolio/gamehub/gamehub-3.webp",
      "/portfolio/gamehub/gamehub-4.webp",
    ],
    mobileImages: [anspill1, anspill2, anspill3],
  },
  {
    id: "9",
    slug: "bryllup",
    title: "Bryllup",
    subtitle: "Bryllupsnettside",
    description:
      "Bryllupsnettside med link til bilder som gjester har fått passord til. Denne siden var tidligere en infomrasjonsside om bryllupet som skulle skje: Med tid, sted, kart og klesskode.",
    tech: ["react", "github", "js", "tailwind"],
    liveUrl: "https://www.elanetto.no/gift/",
    repoUrl: "https://github.com/elanetto/wedding-onepager",
    images: [
      "/portfolio/bryllup/bryllup-01.webp",
      "/portfolio/bryllup/bryllup-02.webp",
      "/portfolio/bryllup/bryllup-03.webp",
    ],
    mobileImages: [bryllupMob1, bryllupMob2, bryllupMob3],
  },
  {
    id: "10",
    slug: "diktboker",
    title: "Showcase: Diktbøker",
    subtitle: "Showcase av produkter",
    description: "En showcase av Marits diktbøker",
    longDescription:
      "Denne nettsiden er en showcase av Marits diktbøker. Hun har tilgang til å kunne poste produkter på egenhånd (Sanity CMS). Marit selv ønsket ikke betalingstjeneste på hennes nettside, men at kunder kunne kontakte henne direkte via mail. Etter eget ønske, er det ikke koblet til et domene.",
    tech: ["react", "github", "js", "tailwind", "sanity"],
    liveUrl: "https://diktglede.vercel.app/",
    repoUrl: "https://github.com/linesvensen/diktglede",
    images: [maritProsjekt1, maritProsjekt2, maritProsjekt3, maritProsjekt4],
    mobileImages: [maritMobile1, maritMobile2, maritMobile3, maritMobile4],
  },
];
