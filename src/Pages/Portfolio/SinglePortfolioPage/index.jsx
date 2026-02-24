import { useParams, Link } from "react-router-dom";
import TechIcons from "../../../Components/TechIcons";
import { CarouselComponent } from "../../../Components/Carousel";
import { projects } from "../../../data/portfolioData";
import PortfolioCard from "../../../Components/PortfolioCard";
import Space from "../../../Layout/Space";
import BackButton from "../../../Components/BackButton";

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
        },
  );

  // 👇 All other projects except the one we’re currently viewing
  const otherProjects = projects.filter((p) => String(p.id) !== String(id));

  return (
    <div className="min-h-screen bg-lightgray text-title dark:bg-coal dark:text-paperwhite ">
      <div className="relative flex items-center justify-center bg-paperwhite pb-4 pt-4 ">
        <div className="back-btn absolute left-8">
          <BackButton fallbackTo="/" />
        </div>
        <h1 className="font-oswald font-medium text-4xl md:text-5xl text-title text-center ">
          Prosjekt-detaljer
        </h1>
      </div>
      {/* Main content container */}
      <div className="max-w-7xl mx-auto  px-4 md:px-8  lg:px-20 xl:px-4 pt-8 lg:pt-12">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]  xl:h-[420px] 2xl:h-[580px]">
          {/* LEFT: Carousel */}
          <div className="h-full min-h-0">
            <CarouselComponent images={carouselImages} title={project.title} />
          </div>

          {/* RIGHT: Info panel */}
          <div className="h-full min-h-0  ">
            <div className="bg-coal text-paperwhite border border-white rounded-2xl p-6 md:p-7 shadow-xl h-full flex flex-col items-center sm:items-start text-center sm:text-left min-h-0">
              <h2 className="text-2xl  lg:text-3xl font-medium   font-oswald">
                {project.title}
              </h2>

              {project.subtitle && (
                <p className="text-pinky uppercase font-oswald font-medium text-base  pt-2 pb-2 tracking-widest">
                  {project.subtitle}
                </p>
              )}

              {project.description && (
                <p className="text-base text-lightgray leading-relaxed mb-2 whitespace-pre-line">
                  {project.description}
                </p>
              )}

              <div className="mt-2 flex-1 min-h-0 overflow-y-auto pr-2">
                <h2 className=" text-base lg:text-lg uppercase font-medium  font-oswald text-lightgray mb-1">
                  Tech &amp; verktøy
                </h2>
                <TechIcons techKeys={project.tech || []} size="md" />
              </div>

              {/* Push buttons to bottom if you want */}
              <div className="mt-auto pt-8 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn"
                  >
                    Besøk nettsiden
                  </a>
                )}

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="discrete-btn"
                  >
                    Se koden
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 👇 Full-width “Se andre prosjekter” section */}
      {otherProjects.length > 0 && (
        <section className="bg-lightgray py-14">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl lg:text-2xl text-center font-bold mb-8 oswald text-title dark:text-coal">
              ANDRE PROSJEKTER
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {otherProjects.map((p) => (
                <PortfolioCard key={p.id} project={p} />
              ))}
            </div>
            <Space size="xl" type="pad" />
          </div>
        </section>
      )}
    </div>
  );
}
