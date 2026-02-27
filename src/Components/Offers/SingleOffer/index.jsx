import { useState } from "react";
import ProductContactModal from "../../ProductContactForm";
import { useParams, Link, useNavigate } from "react-router-dom";
import { packages, hourly } from "../../../data/offersData.js";
import { TiArrowLeftThick } from "react-icons/ti";
import { FaCheckCircle } from "react-icons/fa";
// import ImageCarousel from "./imageCarousel.jsx";
import { HiExternalLink } from "react-icons/hi";
import VideoShowcase from "./animated.jsx";
import PortfolioExamples from "../../PortfolioExamples";
import Space from "../../../Layout/Space";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import BackButton from "../../BackButton/index.jsx";

export default function SingleOffer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const handleOpen = () => setIsContactOpen(true);
  const handleClose = () => setIsContactOpen(false);

  const offer =
    packages.find((o) => o.id === id) || hourly.find((o) => o.id === id);

  const items = offer.detailedFeatures ?? [];
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);

  if (!offer) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-2xl font-koulen text-title mb-4">Oisann! :/</h1>
        <p className="text-gray-600 mb-6">
          Vi finner ikke tjenesten. Prøv igjen senere eller gjerne kontakt oss
          om problemet.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-darkpink text-white rounded-lg hover:bg-darkpinkhover"
        >
          Gå tilbake
        </button>
      </section>
    );
  }

  return (
    <section className="max-w-7xl  lg:mx-auto     px-8">
      <div className="back-btn pt-8 pb-0 lg:pb-8">
        <BackButton fallbackTo="/tjenester" />
      </div>

      {/* Header */}

      <div className="flex flex-col  lg:border-1 border-paperwhite lg:shadow-md lg:p-8 justify-center items-center  text-center lg:text-left rounded-lg   lg:bg-gradient-to-r from-paperwhite via-white to-white  lg:flex-row  sm:text-center  ">
        <div className="flex-1 mb-4 lg:mb-8 ">
          {/* <span
            className="block font-oswald uppercase tracking-widest w-max  bg-coal text-white px-8 py-2 rounded-full 
                 text-center text-sm mb-8.5  mx-auto lg:mx-0"
          >
            {offer.tag}
          </span> */}
          <h1 className="text-4xl p-2 font-oswald  font-medium text-title mb-6">
            {offer.tag}
          </h1>
          <span
            className="block font-oswald uppercase text-base tracking-widest w-max font-medium bg-[#81CABF]  text-coal  px-4 py-1 rounded-full 
                 text-center text-md mb-8.5  mx-auto lg:mx-0"
          >
            {offer.headline}
          </span>

          <p className="text-gray-700 leading-relaxed mb-6 lg:max-w-xl">
            {offer.longDescription}
          </p>

          <p className="text-2xl text-darkpink font-semibold">{offer.price}</p>
          {offer.crossed && (
            <p className="text-lg text-gray-400 line-through">
              {offer.crossed}
            </p>
          )}
          <span>
            <button
              onClick={handleOpen}
              className="cta-btn mt-8 mx-auto lg:mx-0 mb-4 lg:mb-0"
            >
              Send forespørsel
            </button>
          </span>
        </div>
        <div className="">
          {offer.video?.poster && <VideoShowcase video={offer.video} />}
        </div>
      </div>

      {/* <PortfolioExamples
        slugs={offer.exampleProjectSlugs}
        title="Prosjekt i denne størrelsen"
        className="mt-12"
      />

      <Space size="xl" type="pad" /> */}

      {/* ---------------------- dropper nettside eksempel enn så lenge. vi har det jo lenger ned på siden også
      {offer.link && (
        <a
          href={offer.link}
          target="_blank"
          rel="noopener noreferrer"
          className="discrete-btn mb-8 mt-4  gap-2"
        >
          Se et nettside eksempel
          <HiExternalLink />
        </a>
      )} */}

      {/* Detailed features */}

      {offer.detailedFeatures?.length > 0 && (
        <div className=" rounded-xl   ">
          <h2 className="text-2xl font-oswald text-center sm:text-left uppercase font-medium text-title mb-4 mt-8 lg:pt-8 pb-4">
            Dette får du
          </h2>
          <div className="grid lg:grid-cols-2 gap-x-12">
            <ul className="flex flex-col gap-6 text-gray-700">
              {left.map((f, i) => (
                <li
                  key={`l-${i}`}
                  className="grid grid-cols-[auto_1fr] gap-3 items-start"
                >
                  <FaCheckCircle className="w-5 h-5 text-darkpink translate-y-[0.125em]" />
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-6 lg:mt-0 flex flex-col gap-6 text-gray-700">
              {right.map((f, i) => (
                <li
                  key={`r-${i}`}
                  className="grid grid-cols-[auto_1fr] gap-3 items-start"
                >
                  <FaCheckCircle className="w-5 h-5 text-darkpink translate-y-[0.125em]" />
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {offer.exampleProjectSlugs?.length > 0 && (
        <>
          <PortfolioExamples
            slugs={offer.exampleProjectSlugs}
            title="Prosjekt i denne størrelsen"
            className="mb-2 mt-4 pt-8 pb-4 text-center lg:text-left "
          />
          {/* <Space size="xl" type="pad" /> */}
        </>
      )}

      {offer.faq?.length > 0 && (
        <div className=" ">
          <h2 className="text-2xl text-title font-oswald uppercase font-medium mb-4 mt-4 pt-2 pb-2 ">
            Ofte stilte spørsmål
          </h2>
          <div className="space-y-3">
            {offer.faq.map((item, i) => (
              <details key={i} className="border border-coal rounded-lg p-4">
                <summary className="cursor-pointer font-medium text-coal">
                  {item.q}
                </summary>
                <p className="mt-2 text-coal">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      )}
      <ProductContactModal
        isOpen={isContactOpen}
        onClose={handleClose}
        product={offer}
      />
      <div className=" flex gap-4 mt-4 flex-wrap flex-col font-medium ">
        <span>
          <Link to="/tjenester" className="links  gap-2 mt-8 ">
            <TiArrowLeftThick />
            Tilbake til pakker og tjenester
          </Link>
        </span>
      </div>
      <Space size="xl" type="pad" />
    </section>
  );
}
