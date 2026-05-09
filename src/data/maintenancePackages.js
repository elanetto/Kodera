export const maintenancePackages = [
  {
    id: "basic",
    tag: "Basic", // 👈 rosa label
    headline: "Opptil 30 min / mnd", // 👈 turkis bar
    recommended: false,
    price: "kr 390 / mnd",
    features: [
      "Opptil 30 minutter arbeid per måned",
      "Mindre oppdateringer (tekst, bilder og justeringer)",
      "Teknisk vedlikehold og feilretting",
      "Responstid: 1–2 arbeidsdager",
    ],
  },
  {
    id: "standard",
    tag: "Standard",
    headline: "Opptil 60 min / mnd",
    recommended: true, // ⭐ denne blir “Anbefalt”
    price: "kr 690 / mnd",
    features: [
      "Opptil 60 minutter arbeid per måned",
      "Mindre oppdateringer og justeringer",
      "Teknisk vedlikehold og feilretting",
      "Prioritert support",
      "Responstid: innen 1 arbeidsdag",
    ],
  },
  {
    id: "pro",
    tag: "Pro",
    headline: "Opptil 120 min / mnd",
    recommended: false,
    price: "kr 990 / mnd",
    features: [
      "Opptil 120 minutter arbeid per måned",
      "Løpende oppdateringer og forbedringer",
      "Teknisk vedlikehold og feilretting",
      "Prioritert support",
      "Responstid: samme arbeidsdag",
    ],
  },
];