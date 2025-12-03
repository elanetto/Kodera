import { useParams, Link } from "react-router-dom";
import TechIcons from "../../../Components/TechIcons";
import { CarouselComponent } from "../../../Components/Carousel";
import { projects } from "../../../data/portfolioData";
import PortfolioCard from "../../../Components/PortfolioCard";

export default function Project() {
  const { id } = useParams();

  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-paperwhite text-title dark:bg-coal dark:text-paperwhite flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-3 oswald">Project not found</h1>
        <p className="text-coal dark:text-lightgray mb-6 text-center max-w-md text-sm md:text-base">
          We couldn&apos;t find the portfolio project you were looking for.
        </p>
        <Link
          to="/portfolio"
          className="inline-flex items-center rounded-full bg-pinky px-5 py-2 text-sm font-semibold text-paperwhite hover:bg-darkpink transition"
        >
          ← Tilbake til portefølje
        </Link>
      </div>
    );
  }

  const carouselImages = (project.images || []).map((img) =>
    typeof img === "string"
      ? { src: img, alt: project.title }
      : {
          src: img.src,
          alt: img.alt || project.title,
          caption: img.caption,
          link: img.link,
        }
  );

  // 👇 All other projects except the one we’re currently viewing
  const otherProjects = projects.filter((p) => String(p.id) !== String(id));

  return (
  <div className="min-h-screen bg-paperwhite text-title dark:bg-coal dark:text-paperwhite">
    {/* Main content container */}
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
      {/* Back link */}
      <Link
        to="/portfolio"
        className="inline-flex items-center text-sm text-pinky hover:text-darkpink mb-6"
      >
        ← Tilbake til portefølje
      </Link>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] items-start">
        {/* LEFT: Carousel */}
        <div>
          <CarouselComponent images={carouselImages} title={project.title} />
        </div>

        {/* RIGHT: Info panel */}
        <div className="bg-coal text-paperwhite border border-white rounded-2xl p-6 md:p-8 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 oswald">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="text-pinky text-sm md:text-base mb-4">
              {project.subtitle}
            </p>
          )}

          {project.description && (
            <p className="text-sm md:text-base text-lightgray leading-relaxed mb-4 whitespace-pre-line">
              {project.description}
            </p>
          )}

          <div className="mt-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-lightgray mb-1">
              Tech &amp; verktøy
            </h2>

            <TechIcons techKeys={project.tech || []} size="md" />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-pinky px-5 py-2.5 text-sm font-semibold text-paperwhite hover:bg-darkpink transition shadow-md"
              >
                Besøk nettsiden
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-lightgray px-5 py-2.5 text-sm font-semibold text-paperwhite hover:bg-coal/80 transition"
              >
                Se koden
              </a>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* 👇 Full-width “Se andre prosjekter” section */}
    {otherProjects.length > 0 && (
      <section className="bg-lightgray py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 oswald text-title dark:text-coal">
            ANDRE PROSJEKTER
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((p) => (
              <PortfolioCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>
    )}
  </div>
);
}