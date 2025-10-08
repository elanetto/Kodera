import "./index.css";
import Offers from "./components/offers";
import ContactForm from "./Components/mail-form";
import { CarouselComponent } from "./Components/Carousel";
import UXcontactForm from "./Components/UXcontactForm";
import UXbanner from "./Components/BannerUX"

import carouselImage1 from "./assets/carousel/main/Karusellbilde1.jpg";
import carouselImage2 from "./assets/carousel/main/Karusellbilde2.jpg";
import carouselImage3 from "./assets/carousel/main/Karusellbilde3.jpg";

import portfolioImage1 from "./assets/carousel/portfolio/anettetherese.jpg";
import portfolioImage2 from "./assets/carousel/portfolio/elanettoNO-anette.jpg";
import portfolioImage3 from "./assets/carousel/portfolio/holidaze-anette.jpg";
import portfolioImage4 from "./assets/carousel/portfolio/FlappyFlop.jpg"
import portfolioImage5 from "./assets/carousel/portfolio/Airbnb-site.jpg"
import portfolioImage6 from "./assets/carousel/portfolio/BidBuddy.jpg"
import portfolioImage7 from "./assets/carousel/portfolio/ShopDrop.jpg"


function App() {
  const carouselImages = [
    {
      src: carouselImage1,
      alt: "First slide",
      caption: "Vi designer nettsider for din bedrift",
    },
    {
      src: carouselImage2,
      alt: "Second slide",
      caption: "Programmerer unike nettsider for ditt behov",
    },
    {
      src: carouselImage3,
      alt: "Third slide",
      caption: "Velkommen til Kodera: Kvinner i tech",
      Link: "/omOss",
    },
  ];

  const portfolioImages = [
    {
      src: portfolioImage1,
      alt: "Anette Therese Portfolio",
      caption: "Portfolioside: Anette Therese, FrontEnd",
      link: "https://anette-portfolio.onrender.com/",
    },
    {
      src: portfolioImage2,
      alt: "elanetto Stickers",
      caption: "elanetto Design - en liten klistremerkebedrift",
      link: "https://www.elanetto.no/",
    },
    {
      src: portfolioImage3,
      alt: "Holidaze Booking: Exam Project",
      caption: "Holidaze - En booking nettside. Eksamensprosjek.",
      link: "https://dev-holiday.onrender.com/",
    },
    {
      src: portfolioImage4,
      alt: "Flappy Flop",
      caption: "Flappy Flop - Et spill",
      link: "https://floppy-flap.vercel.app/",
    },
    {
      src: portfolioImage5,
      alt: "Holidaze Booking: Exam Project",
      caption: "Holidaze - En booking nettside som AirBnB. Eksamensprosjek.",
      link: "https://pe2025.onrender.com/",
    },
    {
      src: portfolioImage6,
      alt: "Bid Buddy",
      caption: "Bid Buddy - En Auksjonsnettside",
      link: "https://js2-sp-auction-website.vercel.app/",
    },
    {
      src: portfolioImage7,
      alt: "Shop Drop",
      caption: "Shop Drop - En fiktiv shoppingside",
      link: "https://shopdrop-online-store-react.netlify.app/",
    },
  ];

  return (
    <div className="flex items-center flex-col">
      <div className="w-full">
        <CarouselComponent
          images={carouselImages}
          title="Kodera main carousel"
        />
      </div>

      <h2 className="text-2xl font-koulen text-coal p-4" id="tjenester">Pakker vi tilbyr</h2>
      <div className="pb-4">
        <Offers />
      </div>
      <h2 className="text-2xl font-koulen text-coal pb-4 pt-8">
        Interessert? Send oss en mail!
      </h2>
      <div className="w-full">
        <ContactForm />
      </div>
      <div className="py-8 w-full">
        <UXbanner />
      </div>
      <h2 className="text-2xl font-koulen text-coal pb-2 pt-10" id="portfolio">
        Se tidligere prosjekter skapt av oss
      </h2>
      <div className="w-full pt-4">
        <CarouselComponent
          images={portfolioImages}
          title="Portfolio carousel"
        />
      </div>
    </div>
  );
}

export default App;
