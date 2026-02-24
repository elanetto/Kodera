import { projects } from "../../data/portfolioData";
import PortfolioCard from "../../Components/PortfolioCard";
import Space from "../../Layout/Space";
import BackButton from "../../Components/BackButton";

export default function PortfolioAllCards() {
  return (
    <main className="min-h-screen bg-lightgray text-title pt-8">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} variant="grid" />
          ))}
        </div>
      </div>
      <Space size="xl" type="pad" />
    </main>
  );
}
