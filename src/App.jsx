import "./index.css";
import PopularOffers from "./Components/Offers/PopularOffers";
import ContactForm from "./Components/MailForm";
import { CarouselComponent } from "./Components/Carousel";
import UXcontactForm from "./Components/UXcontactForm";
import UXbanner from "./Components/BannerUX";
import Portfolio from "./Pages/Portfolio";

import PortfolioAllCards from "./Components/PortfolioAllCards";

import Hero from "./Components/AnimatedHero/Hero";
import TechLogoLoop from "./Components/TechLogoLoop";
import WhyUs from "./Components/WhyUsSection";

import bildeAvOss from "./assets/carousel/main/Karusellbilde1.jpg";

function App() {
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

      <div
        id="contact"
        className="relative w-full pb-8 text-center bg-center bg-cover"
        style={{ backgroundImage: `url(${bildeAvOss})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-2xl uppercase font-oswald font-medium text-white pb-8 pt-8">
            Interessert? Si Hei!
          </h2>

          <ContactForm />
        </div>
      </div>
      <div className="py-12 bg-gradient-to-t from-white to-paperwhite w-full ">
        <UXbanner />
      </div>
      
      <div className="w-full bg-lightgray">
        <h2
        className="text-2xl font-oswald font-medium text-center uppercase text-title pb-2 pt-10"
        id="portfolio"
      >
        Se våre tidligere prosjekter
      </h2>
        <PortfolioAllCards />
      </div>
    </div>
  );
}

export default App;
