import { projects } from "../../data/portfolioData";
import PortfolioCard from "../../Components/PortfolioCard";
import Space from "../../Layout/Space"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-lightgray text-title">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="font-oswald font-bold text-2xl text-title lg:text-2xl text-center py-5">
        PORTFØLJE
      </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <Space size="xl" type="pad" />
    </main>
  );
}
