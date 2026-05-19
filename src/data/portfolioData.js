//ID1 Anette portfolio
import anettePort1 from "../assets/projectImages/anette-port.webp";
import anetteMob1 from "../assets/projectImages/anetteport1.webp";
import anetteMob2 from "../assets/projectImages/anetteport2.webp";
import anetteMob3 from "../assets/projectImages/anetteport3.webp";

//ID 10 Marit dikt bøker
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
