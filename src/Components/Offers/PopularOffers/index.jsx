import { TiArrowRightThick } from "react-icons/ti";
import { HiMiniSparkles } from "react-icons/hi2";
import { LuSparkles } from "react-icons/lu";
import { HiArrowRightCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import OfferCard from "../offerCard";
import { packages } from "../../../data/offersData";

const popular = packages.slice(0, 3); // første tre pakker eller random

export default function PopularOffers() {
  return (
    <div>
      <h2 className="text-2xl lg:text-3xl font-oswald font-medium  uppercase text-center text-title py-8 pt-12">
        Populære pakker
      </h2>

      <div
        className="flex flex-wrap justify-center gap-10 mt-4 
                      lg:grid lg:grid-cols-3 lg:justify-items-center
                      max-w-7xl mx-auto"
      >
        {popular.map((pkg, i) => (
          <Link key={pkg.id} to={`/tjenester/${pkg.id}`}>
            <OfferCard key={i} {...pkg} />
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center text-center mt-12 mb-8">
        <Link
          to="/tjenester"
          className="discrete-btn gap-2 flex justify-center items-center text-center"
        >
          Se flere pakker og tjenester <LuSparkles />
        </Link>
      </div>
    </div>
  );
}
