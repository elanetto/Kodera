import example1 from "../../assets/projectImages/fotokurs.png";
import example2 from "../../assets/projectImages/kimis2.png";
import onepagerdemo from "../../assets/projectImages/onepager-demo.mp4";
import smalldemo from "../../assets/projectImages/small-demo.mp4";

// src/data/offersData.js

export const packages = [
  {
    id: "one-pager",
    tag: "One pager",
    headline: "Nettside bestående av 1 side",
    features: [
      "1 side. For eksempel portfolio, restaurantmeny eller festinfo",
      "1 revisjonsrunde der du kan foreslå endringer",
      "5-dagers leveringstid",
      "Sømløs brukeropplevelse og skalering for alle skjermstørrelser",
      "Mulighet for å ekspandere nettsiden",
      "30-dagers oppfølging og vedlikehold",
    ],
    beforeBying: [
      "Du forteller oss hva du ser for deg og ønsker. Vi danner et helhetlig bilde basert på ditt formål, produkt og merkeidentitet. Deretter mottar du en skisse av oss og gir beskjed om det er ok.",
    ],
    detailedFeatures: [
      "SEO-grunnoppsett blir lagt inn i nettsiden, slik at alt er klart dersom du har planer om analyse og digital markedsføring.",
      "1 revisjonsrunde inkludert, der du kan fortelle oss om du ønsker å endre eller legge til noe. Det kan for eksempel være endring av farge, tekst eller animasjon.",
      "Du kan ha opptil 7 valgfrie seksjoner på siden. Et eksempel på en seksjon kan være kundeomtaler eller kontaktskjema.",
      "Vi har satt en 5-dagers leveringstid. Det kan hende du mottar nettsiden tidligere.",
      "Mange utviklere nedprioriterer nettsidens skalering, noe som går utover mange brukere. Derfor har vi fokus på at nettsiden din blir tilpasset alle skjermstørrelser over 360 px, som er den vanligste størrelsen blant de minste mobilene.",
      "I 30 dager etter at nettsiden er levert til deg, sørger vi for at alt fungerer som det skal. Dette er selvfølgelig kostnadsfritt. Vi overvåker dette, men gi oss gjerne beskjed dersom du oppdager noe selv.",
    ],
    price: "kr 5 990",
    crossed: "Veil. pris: kr 10 000",
    videos: [onepagerdemo],
    link: "https://dittprosjekt.com",

    faq: [
      {
        q: "Kan siden være lang selv om det kun er 1 side?",
        a: "Sidens lengde avhenger av hvor mange seksjoner du ønsker. Du kan ha opptil 7 seksjoner på siden.",
      },
      {
        q: "Hva om jeg finner ut at jeg vil ha en bildekarusell etter at nettsiden er ferdig levert?",
        a: "Dersom du har nye ønsker etter levering, tar vi betalt per time det tar å bygge dette.",
      },
      {
        q: "Er det mulig å ha en blogg eller nettbutikk med en one-pager?",
        a: "Av hensyn til sikkerhet og struktur er dette ikke noe vi tilbyr i en one-pager. Disse løsningene krever flere sider. Da kan du se på de andre pakkene våre, hvor dette er mulig.",
      },
      {
        q: "Hva er en revisjonsrunde?",
        a: "En revisjonsrunde er når vi hører med deg om det vi har laget så langt. Du kan si om du liker det du ser, og om du ønsker å endre noe. Vi tar initiativ til revisjonsrunden når det passer, og når vi trenger dine synspunkter for å gå videre. En runde kan vare i alt fra 5 til 20 minutter.",
      },
    ],
    longDescription:
      "Perfekt dersom du for eksempel ønsker en enkel digital portfolio, en meny til restauranten eller en enkel nettside for et arrangement. Fra bunnen bygger vi siden slik at det er mulig å utvide den senere med flere sider dersom du ønsker det.",
  },

  {
    id: "three-pager",
    tag: "Three pager",
    headline: "Liten nettside",
    features: [
      {
        text: "2-3 sider. For eksempel forside/startside, kontakt eller prosjekter",
        long: true,
      },
      "7-dagers leveringstid",
      "2 revisjonsrunder der du kan foreslå endringer",
      "Sømløs brukeropplevelse og skalering for alle skjermstørrelser",
      "Mulighet for å ekspandere nettsiden",
      "30-dagers oppfølging og vedlikehold",
    ],
    beforeBying: [
      "Du forteller oss hva du ser for deg og ønsker. Vi danner et helhetlig bilde basert på ditt formål, produkt og merkeidentitet. Deretter mottar du en skisse av oss og gir beskjed om det er ok.",
    ],
    detailedFeatures: [
      "Du står fritt til å bestemme om du ønsker to eller tre sider, samt hva de skal inneholde.",
      "2 revisjonsrunder inkludert, der du kan fortelle oss om du ønsker å endre eller legge til noe. Det kan for eksempel være endring av farge, tekst eller animasjon.",
      "Opptil 7 valgfrie seksjoner per side. Et eksempel på en seksjon kan være kundeomtaler eller kontaktskjema.",
      "SEO-grunnoppsett blir lagt inn i nettsiden, slik at alt er klart dersom du har planer om analyse og digital markedsføring.",
      "Vi har satt en 7-dagers leveringstid. Det kan hende du mottar nettsiden tidligere.",
      "Mange utviklere nedprioriterer nettsidens skalering, noe som går utover mange brukere. Derfor fokuserer vi på at nettsiden blir tilpasset alle skjermstørrelser over 360 px.",
      "I 30 dager etter at nettsiden er levert til deg, sørger vi for at alt fungerer som det skal. Dette er kostnadsfritt. Du kan også ta kontakt dersom du oppdager noe selv.",
    ],
    price: "kr 11 990",
    crossed: "Veil. pris: kr 20 000",
    videos: [smalldemo],
    link: "https://dittprosjekt.com",
    faq: [
      {
        q: "Hvor lang kan 1 side være?",
        a: "Lengden avhenger av hvor mange seksjoner du ønsker. Du kan ha opptil 7 seksjoner per side.",
      },
      {
        q: "Hva om jeg ombestemmer meg etter at nettsiden er ferdig levert?",
        a: "Dersom du har nye ønsker etter levering eller ønsker endringer, tar vi betalt per time det tar å bygge dette.",
      },
      {
        q: "Kan jeg ha blogg, nettside eller booking-plattform med denne pakken?",
        a: "Denne pakken er ikke egnet for dette, på grunn av sikkerhet, brukeropplevelse og kostnader for lagring av data. Vi har egne pakker for slike løsninger.",
      },
      {
        q: "Hva er en revisjonsrunde?",
        a: "En revisjonsrunde er når vi hører med deg om det vi har laget så langt. Du kan si om du liker det du ser, og om du ønsker å endre noe. En runde varer vanligvis 5 til 20 minutter.",
      },
    ],
    longDescription:
      "Midt i blinken dersom du ønsker alt fra en større portfolio-nettside, arrangementsinformasjon eller en presentasjon av produkter.",
  },

  {
    id: "mega",
    tag: "Mega",
    headline: "Mellomstor nettside",
    beforeBying: [
      "Du forteller oss hva du ser for deg og ønsker. Vi danner et helhetlig bilde basert på ditt formål, produkt og merkeidentitet. Deretter mottar du en skisse av oss og gir beskjed om det er ok.",
    ],
    features: [
      {
        text: "4-7 sider. For eksempel forside, kontakt, om oss, produkter, produktdetaljer, kundeomtaler eller cookieinformasjon",
        long: true,
      },
      "14-dagers leveringstid",
      "3 revisjonsrunder der du kan foreslå endringer",
      "Sømløs brukeropplevelse og skalering for alle skjermstørrelser",
      "Mulighet for å ekspandere nettsiden",
      "30-dagers oppfølging og vedlikehold",
    ],
    detailedFeatures: [
      "Mellom 4 og 7 sider. Du står fritt til å bestemme hva de skal inneholde.",
      "3 revisjonsrunder inkludert, der du kan be om endringer i farger, tekst, innhold eller animasjon.",
      "Opptil 7 valgfrie seksjoner per side. Et eksempel på en seksjon kan være kundeomtaler eller kontaktskjema.",
      "SEO-grunnoppsett blir lagt til i nettsiden, slik at alt er klart dersom du har planer om analyse og digital markedsføring.",
      "Vi har satt en 14-dagers leveringstid. Det kan hende du mottar nettsiden tidligere.",
      "Vi fokuserer på at nettsiden skalerer riktig på alle skjermstørrelser over 360 px.",
      "I 30 dager etter at nettsiden er levert til deg, sørger vi for at alt fungerer som det skal. Dette er kostnadsfritt.",
    ],
    price: "kr 19 990",
    crossed: "Veil. pris: kr 40 000",
    heroImage: "/assets/projectImages/shopdrop-Tablet.png",
    gallery: [
      "/assets/projectImages/shopdrop-Tablet.png",
      "/assets/projectImages/shopdrop-Tablet.png",
    ],
    faq: [
      {
        q: "Hvor lang kan 1 side være?",
        a: "Lengden avhenger av hvor mange seksjoner du ønsker. Du kan ha opptil 7 seksjoner per side.",
      },
      {
        q: "Hva om jeg ombestemmer meg etter at nettsiden er ferdig levert?",
        a: "Nye ønsker etter levering eller endringer faktureres per time.",
      },
      {
        q: "Kan jeg ha blogg, nettbutikk eller booking-plattform med denne pakken?",
        a: "På grunn av kostnader for lagring av data har vi egne pakker for slike løsninger. Men du kan ha en nettbutikk uten handlekurv og betalingsløsning som en ren produktpresentasjon.",
      },
      {
        q: "Hva er en revisjonsrunde?",
        a: "En revisjonsrunde er når vi viser deg arbeidet og du gir tilbakemeldinger. En runde varer vanligvis 5 til 20 minutter.",
      },
    ],
    longDescription:
      "Denne pakken er perfekt dersom du ønsker å presentere produkter, der kundene kontakter deg for bestilling. Det fungerer som en nettbutikk, men uten handlekurv og betalingsmulighet. Pakken passer også godt for en stor portfolio-nettside med større prosjekter.",
  },

  {
    id: "ux-design",
    tag: "UX Design",
    headline: "UX Figma-design for nettside/app",
    features: [
      {
        text: "Basert på dine ønsker designer vi hvordan nettsiden eller appen din kan se ut. Dette blir en prototype, en klikkbar demo som kan vises for blant annet investorer.",
        long: true,
      },
      "Opptil 12 sider, både for mobil og PC-skjermstørrelser.",
      "3 revisjonsrunder inkludert. Vi går gjennom hva du vil endre.",
      "Leveringstid 3 uker. Du mottar nedlastbar fil og lenke til designet.",
    ],
    beforeBying: [
      "Du sender oss eventuelle filer og forteller oss hva du ser for deg og ønsker. Vi danner et helhetlig bilde basert på ditt formål, produkt og merkeidentitet. Deretter mottar du en skisse av oss og gir beskjed om den er godkjent.",
    ],
    detailedFeatures: [
      "Opptil 12 sider. Det vil si 12 sider i PC-skjermstørrelse og 12 sider i mobilskjermstørrelse. Et eksempel på en side kan være kontakt.",
      "Opptil 7 seksjoner per side. Et eksempel på en seksjon kan være kundeomtaler.",
      "3 revisjonsrunder der du kan foreslå endringer.",
      "Vi har satt en leveringstid på 3 uker. Det kan hende du mottar designet tidligere.",
      "Det grunnleggende designet baseres på deres merkevare og identitet. Vi tar utgangspunkt i dette når det gjelder farger, fonter og helhetlig uttrykk. Dersom dere er usikre, kan vi komme med forslag.",
      "Du mottar en fungerende prototype som kan vises til investorer, med klikkbare knapper og navigasjon mellom sider.",
    ],
    price: "kr 14 990",
    crossed: "Veil. pris: kr 20 000",
    heroImage: "/assets/projectImages/shopdrop-Tablet.png",
    gallery: [
      "/assets/projectImages/shopdrop-Tablet.png",
      "/assets/projectImages/shopdrop-Tablet.png",
    ],
    faq: [
      {
        q: "Hvor mye kan endres i en revisjonsrunde?",
        a: "Så mye du vil. I utgangspunktet skal det ikke være mye, siden vi i forkant har fått en forståelse for hva du ønsker. Du har også 2 revisjonsrunder inkludert etter den første.",
      },
      {
        q: "Hva om jeg ombestemmer meg etter at designet er ferdig levert?",
        a: "Dersom du har nye ønsker etter levering eller ønsker endringer, tar vi betalt per time det tar å lage endringene.",
      },
      {
        q: "Kan jeg få design for blogg, nettbutikk eller booking-plattform?",
        a: "Ja, vi lager det du ønsker.",
      },
      {
        q: "Hva er en revisjonsrunde?",
        a: "En revisjonsrunde er når vi går gjennom arbeidet med deg og du forteller hva du ønsker å endre. En runde varer vanligvis 5 til 20 minutter.",
      },
    ],
    longDescription:
      "Denne pakken er for deg som ønsker en visuell plan for nettsiden eller appen før den programmeres. En utvikler kan deretter bygge løsningen basert på designet. Dersom du trenger å vise idéen din til investorer, er dette pakken for deg.",
  },

  {
    id: "ux-analyse",
    tag: "UX Analyse",
    headline: "Vi analyserer brukeropplevelsen av din nettside",
    features: [
      {
        text: "For deg som allerede har en nettside og ønsker å vite hvordan brukerne dine opplever den.",
        long: true,
      },
      "24-timers leveringstid",
      {
        text: "Vi sjekker blant annet fargekontraster, SEO, tilgjengelighet, navigering, ytelse og hastighet på nettsiden din.",
        long: true,
      },
      {
        text: "Du mottar tilbakemelding i form av en dokumentfil og forslag til eventuelle forbedringer.",
        long: true,
      },
      "Mulighet for å ekspandere nettsiden",
    ],
    price: "Gratis",
    crossed: "Veil. pris: kr 10 000",
    beforeBying: [
      "Du sender oss eventuelle filer og forteller oss hva du ser for deg og ønsker. Vi danner et helhetlig bilde basert på ditt formål, produkt og merkeidentitet. Deretter mottar du en skisse av oss og gir beskjed om det er ok.",
    ],
    detailedFeatures: [
      "Vi sjekker hastigheten på nettsiden. Hastighet påvirker om brukere forlater siden i løpet av de første sekundene. Hvis nettsiden er treg, finner vi årsaken.",
      "Tilgjengelighet handler om at nettsider skal være tilgjengelige for alle, inkludert personer med funksjonsnedsettelser. Vi sjekker blant annet kontraster, tekststørrelse og om farger fungerer for fargeblinde. Dette vurderes i henhold til WCAG-standardene.",
      "Navigering skal skje naturlig. Brukere kan oppleve å gå seg vill og trykke feil. Misforståelser kan føre til tap av kunder.",
      "SEO, også kalt søkemotoroptimalisering, handler om hva som vises når folk googler nettsiden deres. Vi sjekker om SEO-en er optimalisert.",
      "Vi har satt en 24-timers leveringstid. Det kan hende du mottar tilbakemeldingen tidligere.",
      "Du mottar tilbakemelding i form av en dokumentfil og forslag til eventuelle forbedringer.",
    ],
    heroImage: "/assets/projectImages/shopdrop-Tablet.png",
    gallery: [
      "/assets/projectImages/shopdrop-Tablet.png",
      "/assets/projectImages/shopdrop-Tablet.png",
    ],
    faq: [
      {
        q: "Jeg har fått analysen og mye må fikses. Hva gjør vi nå?",
        a: "Dersom det er koden som må fikses, kan vi gjøre dette til kode-timespris. Dersom bildefiler må komprimeres, går dette under timespris for grafisk design. Trenger dere nye farger, gjør vi dette til UX-timespris.",
      },
    ],
    longDescription:
      "Usikker på hvordan kundene dine opplever nettsiden? Får du ikke ønsket resultat? Eller vil du sjekke at alt er optimalt? Da er vår UX-analyse midt i blinken for deg.",
  },
];

export const hourly = [
  {
    id: "timespris-ux-design",
    tag: "UX design",
    headline: "Pris per time UX Figma design",
    beforeBying: [
      "Du forteller oss hva du ser for deg og ønsker. Vi danner et helhetlig bilde basert på ditt formål, produkt og merkeidentitet. Deretter mottar du en skisse av oss og gir beskjed om det er ok.",
    ],
    features: [
      "For deg som allerede har et design, men ønsker å forbedre eller utvide deler av det",
      "Passer godt dersom du ikke ønsker full UX-pakke eller kun ønsker noen få sider",
      "Vi gir en cirka estimert leveringstid basert på ønskene dine",
    ],
    detailedFeatures: [
      "Du kan ønske deg alt fra ekstra sider og endringer av farger til en ekstra knapp. Det er helt opp til deg hva vi skal fikse eller legge til.",
      "Du får en cirka estimert tid på arbeidet som kreves. Dette gjør det lettere å forholde seg til både budsjett og tidsfrister.",
      "Når vi nærmer oss ferdig, får du se resultatet først. Da kan du si ifra om det er godkjent eller om vi skal endre noe mer.",
      "Du mottar fil og lenke til designet via e-post.",
    ],
    price: "890 kr/time",
    crossed: "Veil. pris: 1300 kr/time",
    heroImage: "/assets/projectImages/shopdrop-Tablet.png",
    gallery: [
      "/assets/projectImages/shopdrop-Tablet.png",
      "/assets/projectImages/shopdrop-Tablet.png",
    ],
    faq: [
      {
        q: "Må jeg ha deres UX-pakke fra før?",
        a: "Nei, det trenger du ikke. Designet du har fra før kan ha vært laget av deg selv eller andre.",
      },
      {
        q: "Hva skjer om det blir misforståelser eller jeg ikke blir fornøyd?",
        a: "Vi sørger for at vi har forstått hverandre godt nok på forhånd til at dette ikke skal bli et problem. Dersom du likevel ikke blir fornøyd, arbeider vi videre under timesprisen.",
      },
      {
        q: "Når begynner timesprisen å telle?",
        a: "Du får beskjed når den begynner å telle. Dette vil være først etter at vi har mottatt filer og informasjon fra deg. Vi tar ikke betalt for planlegging før vi har begynt.",
      },
      {
        q: "Hva om dere bruker under 1 time på arbeidet? Blir det rimeligere?",
        a: "Bruker vi under 1 time, blir det likevel rundet opp til 1 time. Så hvis det tok 30 minutter, regnes det fortsatt som 1 time.",
      },
      {
        q: "Jeg ønsker et helt nytt UX-design fra bunnen. Bør jeg velge timespris eller UX-pakken?",
        a: "Ønsker du et helt nytt design fra bunnen, anbefaler vi UX-pakken, som vil være mye rimeligere for deg enn timespris.",
      },
      {
        q: "Er revisjonsrunder gratis?",
        a: "Revisjonsrunder regnes som arbeidstid. Her gjelder timespris.",
      },
    ],
    longDescription:
      "Dette er perfekt for deg som ikke har behov for en full UX-pakke med 12 sider i Figma, men som allerede har et Figma-design du ønsker å bygge videre på.",
  },
  {
    id: "timespris-kode",
    tag: "Kode",
    headline: "Pris per time med utvikling",
    beforeBying: [
      "Du forteller oss hva du ser for deg og ønsker, samt informasjon om koden til nettsiden du har i dag. Vi danner et helhetlig bilde basert på ditt formål, produkt og merkeidentitet. Vi mottar eventuelle bilder og filer fra deg dersom det trengs.",
    ],
    features: [
      {
        text: "Vi fikser din eksisterende nettside med det du ønsker. For eksempel dropdown-meny, søkefelt, endring av farger eller en ekstra side.",
        long: true,
      },
      "Vi gir en cirka estimert leveringstid basert på ønskene dine",
      "30-dagers oppfølging og vedlikehold",
    ],
    detailedFeatures: [
      "Du kan ønske alt fra en dropdown-meny, bugfiks eller en ekstra side på nettsiden. Det er helt opp til deg hva vi skal fikse eller legge til.",
      "Du får en cirka estimert tid på arbeidet det tar, slik at budsjett og tidsfrister blir enklere å forholde seg til.",
      "Når vi nærmer oss ferdig, får du først se resultatet. Da kan du si ifra om det er godkjent eller om vi skal endre eller legge til noe mer.",
    ],
    price: "990 kr/time",
    crossed: "Veil. pris: 1500 kr/time",
    heroImage: "/assets/projectImages/shopdrop-Tablet.png",
    gallery: [
      "/assets/projectImages/shopdrop-Tablet.png",
      "/assets/projectImages/shopdrop-Tablet.png",
    ],
    faq: [
      {
        q: "Må jeg ha nettsiden av dere fra før?",
        a: "Nei, det trenger du ikke. Nettsiden kan være bygget av deg selv eller andre.",
      },
      {
        q: "Jeg vet ingenting om nettsiden min og koden til den. Jeg fikk den bare laget av et byrå.",
        a: "Dette finner vi ut sammen. Noen ganger finner vi ut at det beste er å bygge nettsiden fra bunnen av igjen. Det kan være fordi vi ikke får kontakt med utvikleren som lagde siden, byrået kan ha lagt ned, eller fordi koden er dårlig eller utdatert. Det kan også være fordi det faktisk blir rimeligere for deg å få en ny nettside.",
      },
      {
        q: "Hva skjer om det blir misforståelser eller jeg ikke blir fornøyd?",
        a: "Vi sørger for tydelig kommunikasjon i forkant. Dersom du likevel ikke blir fornøyd, fortsetter vi arbeidet under timespris.",
      },
      {
        q: "Når begynner timesprisen å telle?",
        a: "Du får beskjed når den begynner å telle. Dette er først etter at vi har mottatt filer og nødvendig informasjon fra deg. Vi tar ikke betalt for planleggingsfasen før vi faktisk har startet.",
      },
      {
        q: "Hva om dere bruker under 1 time på arbeidet? Blir det rimeligere?",
        a: "Bruker vi under 1 time, blir tiden likevel rundet opp til 1 time. Hvis det tok 30 minutter, regnes det fortsatt som 1 time.",
      },
      {
        q: "Er revisjonsrunder gratis?",
        a: "Revisjonsrunder regnes som arbeidstid. Her gjelder timespris.",
      },
    ],
    longDescription:
      "Dette er løsningen for deg som har en nettside fra før og ønsker at den skal forbedres. Det kan være alt fra små ting som en knapp som ikke fungerer, til en total oppussing av hele nettsiden.",
  },
];
