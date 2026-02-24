import OfferCard from "./offerCard";
import { packages, hourly } from "../../data/offersData";

import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import BackButton from "../BackButton";

export default function Offers() {
  return (
    <div className="flex flex-col  w-full">
      <div className="relative flex items-center justify-center bg-paperwhite pb-4">
        <div className="back-btn absolute left-8">
          <BackButton fallbackTo="/" />
        </div>
        <h1 className="font-oswald font-medium text-4xl md:text-5xl text-title text-center ">
          Tjenester
        </h1>
      </div>
      <div className=" flex flex-col w-full justify-center items-center">
        <div className="w-full bg-lightgray bg-gradient-to-b from-lightgray to-paperwhite  ">
          <h2 className="text-2xl md:text-3xl uppercase  w-full text-center font-oswald font-medium text-title pt-8 pb-8">
            Pakker
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-10 items-stretch">
          {packages.map((pkg, i) => (
            <Link key={pkg.id} to={`/tjenester/${pkg.id}`} className="">
              <OfferCard key={i} {...pkg} />
            </Link>
          ))}
        </div>

        <div className="bg-paperwhite"></div>

        <h2 className="text-2xl md:text-3xl uppercase font-oswald font-medium text-title pt-8 mt-8 pb-10 w-full text-center bg-lightgray bg-gradient-to-b from-lightgray to-paperwhite">
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
    </div>
  );
}
