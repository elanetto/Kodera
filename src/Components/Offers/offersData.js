// src/data/offersData.js

export const packages = [
  {
    id: "one-pager",
    tag: "One pager",
    headline: "Nettside bestående av 1 side",
    features: [
      "1 side. For eksempel portfolio, resturant-meny eller fest-info",
      "5 dagers leveringstid",
      "Sømløs brukeropplevelse og skalering for alle skjermstørrelser",
      "Mulighet for å ekspandere nettsiden",
      "30 dagers oppfølging og vedlikehold",
    ],
    detailedFeatures: [
      "Du forteller oss hva du ser for deg og ønsker. Vi danner et helhetlig bilde basert på ditt formål, produkt og merkeidentitet. Deretter mottar du en skisse av oss og kan si ifra dersom du ønsker endringer.",
      "SEO-grunnoppsett vil bli lagt til inni nettsiden, slik at det er klart dersom du har planer om analyse og digital markedsføring.",
      "Vi har satt en 5 dagers leveringstid. Det kan hende du mottar nettsiden før dette. ",
      "Mange utviklere nedprioterer nettsidens skalering - noe som går utover mange brukere. Derfor vil vi ha fokus på at nettsiden din blir passende for alle skjermstørrelser over 360px, som er den vanligste størrelsen blant de minste mobilene. ",
      "I 30 dager etter nettsiden er levert til deg, sørger vi for at alt fungerer som det skal på nettsiden. Selvfølgelig kostnadsfritt.",
    ],
    price: "kr 5 990",
    crossed: "Veil. pris: kr 10 000",
    heroImage: "/assets/projectImages/shopdrop-Tablet.png",
    gallery: [
      "/assets/projectImages/shopdrop-Tablet.png",
      "/assets/projectImages/shopdrop-Tablet.png",
    ],
    faq: [
      { q: "Kan siden være lang selvom det kun er 1 side?", a: "svar." },
      {
        q: "Hva om jeg finner ut at jeg vil ha en bildekarusell etter nettsiden er levert?",
        a: "Det er ikke noe problem. Ta tar vi timespris. Mer om timespris kan du lese HER.",
      },
    ],
    longDescription:
      "Perfekt dersom du for eksempel ønsker online portfolio, meny til resturanten eller en enkel nettside for et arrangement. Fra bunnen bygger vi siden slik at det er mulig å utvide den etterhvert med flere sider dersom man ønsker.",
  },

  {
    id: "simpel",
    tag: "Simpel",
    headline: "Liten nettside",
    features: [
      {
        text: "2-3 sider. For eksempel forside/startside, kontakt, prosjekter",
        long: true,
      },
      "7 dagers leveringstid",
      "Sømløs brukeropplevelse og skalering for alle skjermstørrelser",
      "Mulighet for å ekspandere nettsiden",
      "30 dagers oppfølging og vedlikehold",
    ],
    price: "kr 11 990",
    crossed: "Veil. pris: kr 20 000",
  },
  {
    id: "mega",
    tag: "Mega",
    headline: "Mellomstor nettside",
    features: [
      {
        text: "4-7 sider. For eksempel forside, kontakt, om oss, produkter, produkt detaljer, kundeomtaler, cookie informasjon",
        long: true,
      },
      "14 dagers leveringstid",
      "Sømløs brukeropplevelse og skalering for alle skjermstørrelser",
      "Mulighet for å ekspandere nettsiden",
      "30 dagers oppfølging og vedlikehold",
    ],
    price: "kr 19 990",
    crossed: "Veil. pris: kr 40 000",
  },
  {
    id: "ux-design",
    tag: "UX Design",
    headline: "UX figma design for nettside/app",
    features: [
      {
        text: "Basert på dine ønsker, designer vi hvordan nettsiden eller appen din kan se ut. Dette vil være en prototype (klikkbar demo) som kan vises for blant annet investorer",
        long: true,
      },
      "Opptil 12 sider. Både for mobil og PC skjermstørrelser.",
      "1 revisjonsrunde inkludert. Vi går gjennom hva du vil endre",
      "Leveringstid 3 uker. Du mottar nedlastbar fil og lenke til designet",
    ],
    price: "kr 14 990",
    crossed: "Veil. pris: kr 20 000",
  },
  {
    id: "ux-analyse",
    tag: "UX Analyse",
    headline: "Vi analyserer brukeropplevelsen av din nettside",
    features: [
      {
        text: "For deg som allerede har en nettside og ønsker å vite hvordan brukerne dine opplever nettsiden",
        long: true,
      },
      "24 timer leveringstid",
      {
        text: "Vi sjekker blant annet fargekontraster, tilgjengelighet, navigering, ytelse og hastighet på nettsiden din",
        long: true,
      },
      {
        text: "Du mottar en grundig tilbakemelding i form av dokumentfil og forslag til eventuelle forbedringer",
        long: true,
      },
      "Mulighet for å ekspandere nettsiden",
    ],
    price: "Gratis",
    crossed: "Veil. pris: kr 10 000",
  },
];

export const hourly = [
  {
    id: "timespris-ux-design",
    tag: "UX design",
    headline: "Pris per time UX Figma design",
    features: [
      "For deg som allerede har et design, men ønsker å forbedre eller utvide deler av den",
      "Passer godt dersom du ikke ønsker full UX pakke eller kun ønsker noen få sider",
      "Vi gir en cirka estimert leveringstid ut ifra ønskene",
    ],
    price: "890 kr/time",
    crossed: "Veil. pris: 1300 kr/time",
  },
  {
    id: "timespris-kode",
    tag: "Kode",
    headline: "Pris per time med utvikling",
    features: [
      {
        text: "Vi fikser din eksisterende nettside med det som ønskes. For eksempel dropdown-meny, søkefelt, endring av farger, en ekstra side",
        long: true,
      },
      "Vi gir en cirka estimert leveringstid ut ifra ønskene",
      "30 dagers oppfølging og vedlikehold",
    ],
    price: "990 kr/time",
    crossed: "Veil. times-pris: 1500 kr/time",
  },
  {
    id: "timespris-grafisk-design",
    tag: "Grafisk design",
    headline: "Pris per time med grafisk design",
    features: [
      "... dette får du",
      "Vi gir en cirka estimert leveringstid ut ifra ønskene",
      "30 dagers oppfølging og vedlikehold",
    ],
    price: "x kr/time",
    crossed: "Veil. times-pris: x kr/time",
  },
];
