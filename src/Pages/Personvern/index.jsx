import { scrollToId } from "./../../Components/ScrollToID";

function CheckCircleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 7.47a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l1.47 1.47 4.47-4.47a.75.75 0 0 1 1.06 0z" />
    </svg>
  );
}

export default function KoderaPrivacyPolicy() {
  const updated = "Oktober 2025";

  const items = [
    { id: "intro", label: "Personvernerklæring" },
    { id: "contact", label: "Spørsmål?" },
    { id: "cookies", label: "Informasjonskapsler (Cookies)" },
    { id: "analytics", label: "Google Analytics & GTM" },
    { id: "pixel", label: "Facebook Pixel" },
    { id: "social", label: "Sosiale medier" },
    { id: "email", label: "Kontakt via e-post" },
    { id: "why", label: "Hvorfor samler vi inn data?" },
    { id: "rights", label: "Dine rettigheter" },
  ];

  return (
    <div className="min-h-screen bg-[#f7f7f8]">
      {/* Skip link for accessibility */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 bg-white px-3 py-2 rounded-md shadow"
      >
        Hopp til innhold
      </a>

      {/* Hero */}
      <header className="relative isolate">
        <div className="bg-coal">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="py-10 sm:py-14">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-3 py-1 text-white text-xs backdrop-blur">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                  <CheckCircleIcon className="h-3.5 w-3.5 text-white" />
                </span>
                <span>Oppdatert {updated}</span>
              </div>
              <h1
                id="intro"
                className="scroll-mt-28 mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight"
              >
                Personvernerklæring
              </h1>
              <p className="mt-2 max-w-3xl text-white/90">
                Denne nettsiden eies og driftes av <strong>KODERA</strong> (org.
                nr. 925 104 159). Her finner du informasjon om hvordan vi
                behandler personopplysninger, hvilke data vi samler inn når du
                bruker nettsiden vår – og hvordan vi tar vare på personvernet
                ditt.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 -bottom-6 h-6" aria-hidden="true" />
      </header>

      {/* Content */}
      <main
        id="content"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 pb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* TOC */}
          <aside className="lg:col-span-4 xl:col-span-3 order-first lg:order-first mb-6 lg:mb-0">
            <nav className="sticky top-24">
              <div className="flex w-full justify-center py-2 bg-darkpink rounded-t-lg shadow">
                <h2 className="text-sm sm:text-base text-white font-semibold">
                  Innholdsfortegnelse
                </h2>
              </div>
              <div className="flex flex-col shadow rounded-b-lg bg-white">
                <ul className="divide-y divide-gray-100">
                  {items.map((item) => (
                    <li key={item.id}>
                      {/* Behold <a> for semantikk, men hindre navigasjon og scroll med utils-funksjonen */}
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToId(item.id);
                        }}
                        className="block px-4 py-3 text-sm text-[#2e3944] hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact card */}
              <div className="mt-8 flex flex-col justify-center items-center">
                <div className="flex w-full justify-center py-2 bg-darkpink rounded-t-lg shadow">
                  <h3 className="text-white font-semibold">Kontakt oss</h3>
                </div>
                <div className="flex flex-col shadow rounded-b-lg bg-white w-full">
                  <div className="p-5 space-y-3 text-[#2e3944] text-sm">
                    <div className="flex items-start">
                      <CheckCircleIcon className="w-4 h-4 text-darkpink mr-3 mt-0.5" />
                      <p>
                        E-post:{" "}
                        <a
                          className="underline decoration-darkpink/40 underline-offset-2 hover:text-darkpink"
                          href="mailto:kontakt@kodera.no"
                        >
                          kontakt@kodera.no
                        </a>
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="w-4 h-4 text-darkpink mr-3 mt-0.5" />
                      <p>Org.nr: 925 104 159</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="w-4 h-4 text-darkpink mr-3 mt-0.5" />
                      <p>Åpne, tydelige og vennlige — akkurat som koden vår.</p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </aside>

          {/* Article */}
          <section className="lg:col-span-8 xl:col-span-9">
            <article className="shadow rounded-lg bg-white overflow-hidden">
              <div className="p-6 sm:p-8">
                {/* Spørsmål */}
                <h2
                  id="contact"
                  className="scroll-mt-28 text-xl sm:text-2xl font-semibold text-[#2e3944]"
                >
                  Spørsmål?
                </h2>
                <p className="mt-2 text-[#2e3944]/90">
                  Du kan når som helst kontakte oss på{" "}
                  <a
                    href="mailto:kontakt@kodera.no"
                    className="text-darkpink underline underline-offset-2"
                  >
                    kontakt@kodera.no
                  </a>
                  .
                </p>

                <div className="my-8 h-px bg-gray-100" />

                {/* Cookies */}
                <h2
                  id="cookies"
                  className="scroll-mt-28 text-xl sm:text-2xl font-semibold text-[#2e3944]"
                >
                  Bruk av informasjonskapsler (Cookies)
                </h2>
                <div className="mt-2 space-y-3 text-[#2e3944]/90">
                  <p>
                    Når du besøker{" "}
                    <span className="font-medium">kodera.no</span>, lagres små
                    informasjonsfiler – såkalte
                    <em> cookies</em> – på enheten din. Disse hjelper oss med å
                    gi deg en bedre og mer tilpasset brukeropplevelse.
                  </p>
                  <p>
                    En cookie er ikke farlig og inneholder ikke virus. Den
                    brukes for eksempel til å huske språket du valgte, data du
                    har skrevet i et skjema, eller når du sist besøkte siden.
                  </p>
                  <p>
                    Du kan når som helst slette eller blokkere cookies via
                    innstillingene i nettleseren din. Hvis du gjør det, kan
                    enkelte funksjoner på nettsiden vår slutte å fungere
                    optimalt.
                  </p>
                  <p>
                    For mer informasjon om hvordan du administrerer cookies i
                    nettleseren din, se{" "}
                    <a
                      className="text-darkpink underline underline-offset-2"
                      href="https://nettvett.no/slik-administrer-du-informasjonskapsler/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      nettvett.no
                    </a>
                    .
                  </p>
                </div>

                <div className="my-8 h-px bg-gray-100" />

                {/* Analytics */}
                <h2
                  id="analytics"
                  className="scroll-mt-28 text-xl sm:text-2xl font-semibold text-[#2e3944]"
                >
                  Google Analytics & Google Tag Manager
                </h2>
                <div className="mt-2 space-y-3 text-[#2e3944]/90">
                  <p>
                    Vi bruker{" "}
                    <span className="font-medium">Google Analytics</span> og{" "}
                    <span className="font-medium">Google Tag Manager</span> for
                    å samle anonym statistikk om trafikken på nettsiden. Dette
                    hjelper oss å forstå hvordan besøkende bruker siden, slik at
                    vi kan forbedre innhold, design og brukeropplevelse.
                  </p>
                  <p>
                    Dataene som samles inn er{" "}
                    <span className="font-medium">anonymiserte</span> og kan
                    ikke spores tilbake til deg som enkeltperson. Informasjonen
                    slettes automatisk etter{" "}
                    <span className="font-medium">26 måneder</span>.
                  </p>
                  <p>
                    Du kan lese mer om hvordan Google behandler data her:{" "}
                    <a
                      href="https://policies.google.com/technologies/partner-sites"
                      target="_blank"
                      rel="noreferrer"
                      className="text-darkpink underline underline-offset-2"
                    >
                      policies.google.com/technologies/partner-sites
                    </a>
                  </p>
                </div>

                <div className="my-8 h-px bg-gray-100" />

                {/* Facebook Pixel */}
                <h2
                  id="pixel"
                  className="scroll-mt-28 text-xl sm:text-2xl font-semibold text-[#2e3944]"
                >
                  Facebook Pixel
                </h2>
                <div className="mt-2 space-y-3 text-[#2e3944]/90">
                  <p>
                    Nettsiden kan bruke{" "}
                    <span className="font-medium">Facebook Pixel</span> for å
                    måle effekten av annonsering og gi oss innsikt i hvordan
                    brukere interagerer med annonsene våre på Facebook og
                    Instagram.
                  </p>
                  <p>
                    Informasjonen som samles inn er anonym og brukes kun for å
                    forbedre relevansen av markedsføringen vår. Hvis du ikke
                    ønsker at data samles inn gjennom Facebook Pixel, kan du
                    endre innstillingene dine direkte i{" "}
                    <a
                      href="https://www.facebook.com/settings/?tab=ads"
                      target="_blank"
                      rel="noreferrer"
                      className="text-darkpink underline underline-offset-2"
                    >
                      Facebooks personverninnstillinger
                    </a>
                    .
                  </p>
                </div>

                <div className="my-8 h-px bg-gray-100" />

                {/* Social */}
                <h2
                  id="social"
                  className="scroll-mt-28 text-xl sm:text-2xl font-semibold text-[#2e3944]"
                >
                  Sosiale medier og integrert innhold
                </h2>
                <div className="mt-2 space-y-3 text-[#2e3944]/90">
                  <p>
                    Hvis du samhandler med innhold fra våre sosiale medier (for
                    eksempel liker, deler eller kommenterer innlegg via
                    Instagram, Facebook eller YouTube), kan disse plattformene
                    samle informasjon om din aktivitet – i henhold til sine egne
                    personvernregler.
                  </p>
                  <p>
                    Vi anbefaler at du sjekker og oppdaterer
                    personverninnstillingene dine på de aktuelle plattformene
                    hvis du vil ha bedre kontroll over hva som deles.
                  </p>
                </div>

                <div className="my-8 h-px bg-gray-100" />

                {/* Email */}
                <h2
                  id="email"
                  className="scroll-mt-28 text-xl sm:text-2xl font-semibold text-[#2e3944]"
                >
                  Kontakt via e-post
                </h2>
                <div className="mt-2 space-y-3 text-[#2e3944]/90">
                  <p>
                    Når du sender oss en e-post, lagres meldingen og
                    kontaktinformasjonen din på våre e-postservere. Vi bruker
                    ikke denne informasjonen til markedsføring uten ditt
                    samtykke, og du kan når som helst be oss om å slette
                    korrespondansen.
                  </p>
                  <p>
                    Send i så fall en forespørsel til{" "}
                    <a
                      href="mailto:kontakt@kodera.no"
                      className="text-darkpink underline underline-offset-2"
                    >
                      kontakt@kodera.no
                    </a>
                    .
                  </p>
                </div>

                <div className="my-8 h-px bg-gray-100" />

                {/* Why */}
                <h2
                  id="why"
                  className="scroll-mt-28 text-xl sm:text-2xl font-semibold text-[#2e3944]"
                >
                  Hvorfor samler vi inn data?
                </h2>
                <ul className="mt-3 space-y-2">
                  {[
                    "forbedre og videreutvikle nettsiden vår",
                    "forstå hvordan besøkende bruker siden",
                    "kunne tilby mer relevant innhold og annonsering",
                    "sikre stabil og trygg drift av nettstedet",
                  ].map((text) => (
                    <li
                      key={text}
                      className="flex items-start text-[#2e3944]/90"
                    >
                      <CheckCircleIcon className="w-4 h-4 text-darkpink mr-3 mt-0.5" />
                      <span className="text-sm">
                        {text.charAt(0).toUpperCase() + text.slice(1)}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="my-8 h-px bg-gray-100" />

                {/* Rights */}
                <h2
                  id="rights"
                  className="scroll-mt-28 text-xl sm:text-2xl font-semibold text-[#2e3944]"
                >
                  Dine rettigheter
                </h2>
                <p className="mt-2 text-[#2e3944]/90">
                  Du har rett til innsyn i hvilke personopplysninger vi har om
                  deg, og du kan be om at disse slettes eller rettes. Send en
                  forespørsel til{" "}
                  <a
                    href="mailto:kontakt@kodera.no"
                    className="text-darkpink underline underline-offset-2"
                  >
                    kontakt@kodera.no
                  </a>{" "}
                  hvis du ønsker å utøve dine rettigheter.
                </p>

                {/* Footer note */}
                <div className="mt-10 rounded-lg bg-gray-50 p-4 text-xs text-[#2e3944]/80">
                  <p>
                    <span className="font-medium">Sist oppdatert:</span>{" "}
                    {updated} • © 2025 KODERA
                  </p>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}
