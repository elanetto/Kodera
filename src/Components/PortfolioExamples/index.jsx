import PortfolioCard from "../PortfolioCard";
import { projects } from "../../data/portfolioData";

function normalizeSlug(s) {
  return String(s || "").trim().toLowerCase();
}

export default function PortfolioExamples({
  slugs = [],
  title = "Eksempler",
  className = "",
}) {
  const safeSlugs = Array.isArray(slugs) ? slugs : [];

  // Build lookup once per render (fast enough for your dataset)
  const bySlug = new Map(projects.map((p) => [normalizeSlug(p.slug), p]));

  const exampleProjects = safeSlugs
    .map((s) => bySlug.get(normalizeSlug(s)))
    .filter(Boolean);

  if (exampleProjects.length === 0) return null;

  return (
    <section className={className}>
      <h2 className="text-xl text-title font-semibold mb-4">{title}</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {exampleProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
