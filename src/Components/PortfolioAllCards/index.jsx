import { projects } from "../../data/portfolioData";
import PortfolioCard from "../../Components/PortfolioCard";
import Space from "../../Layout/Space";
import BackButton from "../../Components/BackButton";

export default function PortfolioAllCards({ sortBy = "newest" }) {
  const sortedProjects = [...projects].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.date) - new Date(a.date);
    }

    if (sortBy === "oldest") {
      return new Date(a.date) - new Date(b.date);
    }

    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {sortedProjects.map((project) => (
        <PortfolioCard key={project.id} project={project} />
      ))}
    </div>
  );
}
