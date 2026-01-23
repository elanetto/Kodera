import {
  FaReact,
  FaHtml5,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import { SiVite, SiTailwindcss, SiJavascript } from "react-icons/si";
import { Link } from "react-router-dom";
import NewsletterForm from "../../Components/Subscribe";

export function Footer() {
  return (
    <footer className="bg-coal text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        {/* Top content */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {/* Brand / intro + Tech stack */}
          <div className="text-center md:text-left space-y-6">
            {/* Brand */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Kodera</h2>
              <p className="text-sm text-white/80 leading-relaxed mx-auto md:mx-0 max-w-sm">
                Frontend-utvikling kodet av kvinner i Oslo. Vi bygger gode digitale
                opplevelser.
              </p>

              <p className="text-sm text-white/70">
                Kontakt:{" "}
                <a
                  href="mailto:hei@kodera.no"
                  className="underline underline-offset-4 hover:text-pinky"
                >
                  hei@kodera.no
                </a>
              </p>
            </div>

            {/* Built with */}
            <div className="space-y-3">
              <p className="text-sm text-white/80 leading-relaxed mx-auto md:mx-0 max-w-sm">
                Denne nettsiden er bygget med Vite, React, Tailwind, JavaScript og
                HTML5. Prosjektet er satt opp i komponenter og kodet i Visual Studio Code.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-white/90">
                <span
                  className="inline-flex items-center gap-2 text-sm"
                  title="Vite"
                >
                  <SiVite className="text-xl" />
                </span>
                <span
                  className="inline-flex items-center gap-2 text-sm"
                  title="React"
                >
                  <FaReact className="text-xl" />
                </span>
                <span
                  className="inline-flex items-center gap-2 text-sm"
                  title="Tailwind CSS"
                >
                  <SiTailwindcss className="text-xl" />
                </span>
                <span
                  className="inline-flex items-center gap-2 text-sm"
                  title="JavaScript"
                >
                  <SiJavascript className="text-xl" />
                </span>
                <span
                  className="inline-flex items-center gap-2 text-sm"
                  title="HTML5"
                >
                  <FaHtml5 className="text-xl" />
                </span>
                <span
                  className="inline-flex items-center gap-2 text-sm"
                  title="GitHub"
                >
                  <FaGithub className="text-xl" />
                </span>
                <span
                  className="inline-flex items-center gap-2 text-sm"
                  title="Komponentbasert"
                >
                  <FaCode className="text-xl" />
                </span>
              </div>
            </div>
          </div>

          {/* Finn frem */}
          <nav
            aria-label="Finn frem"
            className="text-center md:text-left space-y-4"
          >
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white/90">
              Finn frem
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-white/80 hover:text-white" to="/">
                  Hjem
                </Link>
              </li>
              <li>
                <Link className="text-white/80 hover:text-white" to="/omoss">
                  Om oss
                </Link>
              </li>
              <li>
                <Link className="text-white/80 hover:text-white" to="/contact">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link className="text-white/80 hover:text-white" to="/tjenester">
                  Tjenester
                </Link>
              </li>
              <li>
                <Link className="text-white/80 hover:text-white" to="/portfolio">
                  Portefølje
                </Link>
              </li>
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white/90">
              Nyhetsbrev
            </h3>

            <p className="text-sm text-white/80">
              Få tips og triks om design og oppbygging av gode nettsider, og oppdateringer fra oss!
            </p>

            <div className="mx-auto md:mx-0 max-w-md">
              <NewsletterForm />
            </div>

            <p className="text-xs text-white/60">
              Ingen spam. Bare kode og gode vibber.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/15">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <p className="text-xs text-white/70 text-center sm:text-left">
              © {new Date().getFullYear()} Kodera{" "}
              <span className="italic text-white/60">– Kode av Kvinner</span>
            </p>

            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-x-4 gap-y-2">
              <Link
                to="/personvern"
                className="text-xs text-pinky hover:text-darkpink underline-offset-4 hover:underline"
              >
                Personvernerklæring
              </Link>
            </div>
          </div>

          <p className="mt-4 text-[11px] text-white/50 text-center">
            Kodera © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
