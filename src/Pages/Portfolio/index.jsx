import { projects } from "../../data/portfolioData";
import PortfolioCard from "../../Components/PortfolioCard";
import Space from "../../Layout/Space";
import BackButton from "../../Components/BackButton";
import PortfolioAllCards from "../../Components/PortfolioAllCards";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-lightgray text-title">
      <div className="relative flex items-center justify-center bg-paperwhite pb-4 pt-4 ">
        <div className="back-btn absolute left-8">
          <BackButton fallbackTo="/" />
        </div>
        <h1 className="font-oswald font-medium text-4xl md:text-5xl text-title text-center ">
          Portefølje
        </h1>
      </div>
      <PortfolioAllCards />
    </main>
  );
}
