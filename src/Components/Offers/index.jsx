import OfferCard from "./offerCard";
import { packages, hourly } from "../../data/offersData";

import { Link } from "react-router-dom";

export default function Offers() {
  return (
    <div className="flex flex-col items-center w-full">
       <h2
        className="text-2xl font-oswald font-bold text-title py-5"
      >
        PAKKER
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-10 items-stretch">
        {packages.map((pkg, i) => (
          <Link key={pkg.id} to={`/tjenester/${pkg.id}`} className="">
            <OfferCard key={i} {...pkg} />
          </Link>
        ))}
      </div>

       <h2
        className="text-2xl font-oswald font-bold text-title pb-5 pt-15"
      >
        TIMEPRISER
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
