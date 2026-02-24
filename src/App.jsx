import "./index.css";
import PopularOffers from "./Components/Offers/PopularOffers";
import ContactForm from "./Components/MailForm";
import { CarouselComponent } from "./Components/Carousel";
import UXcontactForm from "./Components/UXcontactForm";
import UXbanner from "./Components/BannerUX";
import Portfolio from "./Pages/Portfolio";

import portfolioImage1 from "./assets/carousel/portfolio/anettetherese.jpg";
import portfolioImage2 from "./assets/carousel/portfolio/elanettoNO-anette.jpg";
import portfolioImage3 from "./assets/carousel/portfolio/holidaze-anette.jpg";
import portfolioImage4 from "./assets/carousel/portfolio/FlappyFlop.jpg";
import portfolioImage5 from "./assets/carousel/portfolio/Airbnb-site.jpg";
import portfolioImage6 from "./assets/carousel/portfolio/BidBuddy.jpg";
import portfolioImage7 from "./assets/carousel/portfolio/ShopDrop.jpg";

import PortfolioAllCards from "./Components/PortfolioAllCards";

import Hero from "./Components/AnimatedHero/Hero";
import TechLogoLoop from "./Components/TechLogoLoop";
import WhyUs from "./Components/WhyUsSection";

function App() {
  const portfolioImages = [
    {
      src: portfolioImage1,
      alt: "Anette Therese Portfolio",
      caption: "Portfolioside: Anette Therese, FrontEnd",
      link: "https://anette-portfolio.onrender.com/",
      projectId: "1",
    },
    {
      src: portfolioImage2,
      alt: "elanetto Stickers",
      caption: "elanetto Design - en liten klistremerkebedrift",
      link: "https://www.elanetto.no/",
      projectId: "2",
    },
    {
      src: portfolioImage3,
      alt: "Holidaze Booking: Exam Project",
      caption: "Holidaze - En booking nettside. Eksamensprosjek.",
      link: "https://dev-holiday.onrender.com/",
      projectId: "3",
    },
    {
      src: portfolioImage4,
      alt: "Flappy Flop",
      caption: "Flappy Flop - Et spill",
      link: "https://floppy-flap.vercel.app/",
      projectId: "4",
    },
    {
      src: portfolioImage5,
      alt: "Holidaze Booking: Exam Project",
      caption: "Holidaze - En booking nettside som AirBnB. Eksamensprosjek.",
      link: "https://pe2025.onrender.com/",
      projectId: "5",
    },
    {
      src: portfolioImage6,
      alt: "Bid Buddy",
      caption: "Bid Buddy - En Auksjonsnettside",
      link: "https://js2-sp-auction-website.vercel.app/",
      projectId: "6",
    },
    {
      src: portfolioImage7,
      alt: "Shop Drop",
      caption: "Shop Drop - En fiktiv shoppingside",
      link: "https://shopdrop-online-store-react.netlify.app/",
      projectId: "7",
    },
  ];

  return (
    <div className="flex items-center flex-col ">
      <Hero />

      {/* <div className="w-full">
        <CarouselComponent
          images={carouselImages}
          title="Kodera main carousel"
        />
      </div> */}

      <div className=" pb-4 flex justify-center items-center bg-lightgray w-full">
        <PopularOffers />
      </div>
      <TechLogoLoop />

      <WhyUs />

      <div id="contact" className="w-full bg-paperwhite  pb-8 text-center">
        <h2 className="text-2xl uppercase font-oswald font-medium text-title  pb-8 pt-8">
          Interessert? Si Hei!
        </h2>
        <ContactForm />
      </div>
      <div className="py-12 bg-gradient-to-t from-white to-paperwhite w-full ">
        <UXbanner />
      </div>
      <h2
        className="text-2xl font-oswald font-medium uppercase text-title pb-2 pt-10"
        id="portfolio"
      >
        Se våre tidligere prosjekter
      </h2>
      <div className="w-full pt-4">
        <CarouselComponent
          images={portfolioImages}
          title="Portfolio carousel"
        />
      </div>
      <div className="w-full">
        <PortfolioAllCards />
      </div>
    </div>
  );
}

export default App;
