import "./index.css";
import SortLogo from "./assets/branding/kodera-logo-01.svg";
import Offers from "./components/offers";
import { CarouselComponent } from "./Components/Carousel";

import carouselImage1 from "./assets/carousel/main/Karusellbilde1.jpg";
import carouselImage2 from "./assets/carousel/main/Karusellbilde2.jpg";
import carouselImage3 from "./assets/carousel/main/Karusellbilde3.jpg";

import portfolioImage1 from "./assets/carousel/portfolio/anettetherese.jpg"
import portfolioImage2 from "./assets/carousel/portfolio/elanettoNO-anette.jpg"
import portfolioImage3 from "./assets/carousel/portfolio/holidaze-anette.jpg"

function App() {
  const carouselImages = [
  { src: carouselImage1, alt: "First slide", caption: "Vi designer nettsider for din bedrift" },
  { src: carouselImage2, alt: "Second slide", caption: "Programmerer unike nettsider for ditt behov" },
  { src: carouselImage3, alt: "Third slide", caption: "Velkommen til Kodera: Kvinner i tech", Link: "/omOss" }
];



  const portfolioImages = [
  { src: portfolioImage1, alt: "Anette Therese Portfolio", caption: "Portfolioside: Anette Therese, FrontEnd", link: "https://anette-portfolio.onrender.com/" },
  { src: portfolioImage2, alt: "elanetto Stickers", caption: "elanetto Design - en liten klistremerkebedrift", link: "https://www.elanetto.no/" },
  { src: portfolioImage3, alt: "Holidaze Booking: Exam Project", caption: "Holidaze - En booking nettside", link: "https://dev-holiday.onrender.com/" }
];


  return (
    <div className="flex items-center flex-col">
      <div className="w-full">
        <CarouselComponent images={carouselImages} title="Kodera main carousel" />
      </div>
      <div className="max-w-5xl w-full flex justify-center flex-col items-center gap-5 h-full">
        <h1 className="text-xl text-coal">Hei hei! Her kommer...</h1>

        <img
          src={SortLogo}
          alt="Logo for Kodera"
          className="h-32 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
        />
        <p>FrontEnd Development / Nettsider kodet av Kvinner</p>
      </div>
      <h2 className="text-xl font-semibold text-coal p-4">
        Dette kan vi tilby
      </h2>
      <Offers />
      <div className="w-full pt-10">
        <CarouselComponent images={portfolioImages} title="Portfolio carousel" />
      </div>
    </div>
  );
}

export default App;
