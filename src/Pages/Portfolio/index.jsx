// src/pages/Portfolio.jsx
import { projects } from "../../data/portfolioData";
import PortfolioCard from "../../Components/PortfolioCard";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-paperwhite text-title">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-2xl font-bold mb-6 oswald text-center">
          PORTEFØLJE
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
