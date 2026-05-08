import { scrollToId } from "./../../Components/ScrollToID";

function CheckCircleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 7.47a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l1.47 1.47 4.47-4.47a.75.75 0 0 1 1.06 0z" />
    </svg>
  );
}

export default function KoderaPrivacyPolicy() {
  const updated = "8. mai 2026";

  const items = [
    { id: "intro", label: "Personvernerklæring" },
    { id: "contact", label: "Spørsmål?" },
    { id: "cookies", label: "Informasjonskapsler (Cookies)" },
    { id: "analytics", label: "Google Analytics & GTM" },
    { id: "pixel", label: "Meta Pixel" },
    { id: "social", label: "Sosiale medier" },
    { id: "email", label: "Kontakt via e-post" },
    { id: "why", label: "Hvorfor samler vi inn data?" },
    { id: "legal", label: "Behandlingsgrunnlag" },
    { id: "processors", label: "Databehandlere" },
    { id: "transfer", label: "Overføring utenfor EU/EØS" },
    { id: "rights", label: "Dine rettigheter" },
  ];

  return (
    <div className="min-h-screen bg-[#f7f7f8]">
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
                bruker nettsiden vår – og hvordan vi ivaretar personvernet ditt.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main
        id="content"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 pb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* TOC */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <nav className="sticky top-24">
              <div className="flex w-full justify-center py-2 bg-darkpink rounded-t-lg shadow">
                <h2 className="text-white font-semibold">
                  Innholdsfortegnelse
                </h2>
              </div>
              <div className="bg-white rounded-b-lg shadow">
                <ul className="divide-y">
                  {items.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToId(item.id);
                        }}
                        className="block px-4 py-3 text-sm hover:bg-gray-50"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </aside>

          {/* Content */}
          <section className="lg:col-span-8 xl:col-span-9">
            <article className="bg-white rounded-lg shadow p-6 sm:p-8">
              <h2 id="contact" className="text-xl font-semibold">
                Spørsmål?
              </h2>
              <p className="mt-2">
                Du kan kontakte oss på{" "}
                <a href="mailto:kontakt@kodera.no" className="underline">
                  kontakt@kodera.no
                </a>
                .
              </p>

              <div className="my-8 border-t" />

              <h2 id="cookies" className="text-xl font-semibold">
                Informasjonskapsler (Cookies)
              </h2>
              <p className="mt-2">
                Vi bruker informasjonskapsler for å sikre funksjonalitet,
                analysere bruk og forbedre opplevelsen din. Bruken av ikke-nødvendige cookies skjer kun basert på ditt samtykke.
              </p>
              <p>
                Du kan når som helst trekke tilbake eller endre samtykket ditt via nettleseren eller våre cookie-innstillinger.
              </p>

              <div className="my-8 border-t" />

              <h2 id="analytics" className="text-xl font-semibold">
                Google Analytics & Google Tag Manager
              </h2>
              <p className="mt-2">
                Vi bruker analyseverktøy for å samle statistikk om bruk av nettsiden. Opplysningene brukes til forbedring av tjenester og brukeropplevelse, og identifiserer deg ikke direkte.
              </p>

              <div className="my-8 border-t" />

              <h2 id="pixel" className="text-xl font-semibold">
                Meta Pixel (tidligere Facebook Pixel)
              </h2>
              <p className="mt-2">
                Kan brukes for å måle effekt av annonser og forbedre relevans i markedsføring.
              </p>

              <div className="my-8 border-t" />

              <h2 id="social" className="text-xl font-semibold">
                Sosiale medier
              </h2>
              <p className="mt-2">
                Interaksjon med sosiale medier kan medføre behandling av data i henhold til plattformenes egne retningslinjer.
              </p>

              <div className="my-8 border-t" />

              <h2 id="email" className="text-xl font-semibold">
                Kontakt via e-post
              </h2>
              <p className="mt-2">
                Henvendelser lagres kun så lenge det er nødvendig for å besvare forespørselen.
              </p>

              <div className="my-8 border-t" />

              <h2 id="why" className="text-xl font-semibold">
                Hvorfor samler vi inn data?
              </h2>
              <ul className="mt-2 space-y-2">
                {[
                  "Forbedre nettsiden",
                  "Analysere bruk",
                  "Tilpasse innhold",
                  "Sikre drift",
                ].map((text) => (
                  <li key={text} className="flex items-start">
                    <CheckCircleIcon className="w-4 h-4 mr-2 mt-1" />
                    {text}
                  </li>
                ))}
              </ul>

              <div className="my-8 border-t" />

              <h2 id="legal" className="text-xl font-semibold">
                Behandlingsgrunnlag
              </h2>
              <p className="mt-2">
                Behandling av personopplysninger skjer på grunnlag av samtykke,
                avtale eller berettiget interesse i henhold til GDPR.
              </p>

              <div className="my-8 border-t" />

              <h2 id="processors" className="text-xl font-semibold">
                Databehandlere
              </h2>
              <p className="mt-2">
                Vi benytter tredjeparter som behandler data på våre vegne i henhold til databehandleravtaler.
              </p>

              <div className="my-8 border-t" />

              <h2 id="transfer" className="text-xl font-semibold">
                Overføring utenfor EU/EØS
              </h2>
              <p className="mt-2">
                Dersom data overføres utenfor EU/EØS, skjer dette i henhold til gjeldende regelverk.
              </p>

              <div className="my-8 border-t" />

              <h2 id="rights" className="text-xl font-semibold">
                Dine rettigheter
              </h2>
              <p className="mt-2">
                Du har rett til innsyn, retting og sletting av dine opplysninger.
              </p>

              <div className="mt-10 text-xs">
                Sist oppdatert: {updated} • © 2026 KODERA
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}