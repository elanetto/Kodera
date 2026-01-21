import { FaCheckCircle } from "react-icons/fa";
import OfferCard from "./offerCard";
import { packages, hourly } from "../../data/offersData";
import { Link } from "react-router-dom";

export default function Offers() {
  return (
    <div className="flex flex-col items-center w-full">
      <h2
        className="text-3xl font-oswald text-center text-title p-4 mb-4"
        id="tjenester"
      >
        Pakker
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-10 items-stretch">
        {packages.map((pkg, i) => (
          <Link key={pkg.id} to={`/tjenester/${pkg.id}`} className="">
            <OfferCard key={i} {...pkg} />
          </Link>
        ))}
      </div>

      <h2 className="text-3xl font-oswald text-center text-title pt-10 pb-4 mb-4">
        Timespriser
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-10 items-stretch mb-8">
        {hourly.map((hr, i) => (
          <Link key={hr.id} to={`/tjenester/${hr.id}`} className="">
            <OfferCard key={i} {...hr} />
          </Link>
        ))}
      </div>
    </div>
  );
}
