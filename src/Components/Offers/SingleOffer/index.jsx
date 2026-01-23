import { useParams, Link, useNavigate } from "react-router-dom";
import { packages } from "../offersData.js";
import { TiArrowLeftThick } from "react-icons/ti";
import { FaCheckCircle } from "react-icons/fa";
import ImageCarousel from "./imageCarousel.jsx";
import { HiExternalLink } from "react-icons/hi";
import VideoShowcase from "./animated.jsx";
import PortfolioExamples from "../../PortfolioExamples";
import Space from "../../../Layout/Space";

export default function SingleOffer() {
  const { id } = useParams();
  const navigate = useNavigate();

  // find matching offer by id
  const offer = packages.find((o) => o.id === id);

  if (!offer) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-2xl font-koulen text-title mb-4">
          Fant ikke denne pakken
        </h1>
        <p className="text-gray-600 mb-6">
          Beklager! Vi finner ikke denne tjenesten.
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
    <section className="max-w-7xl  lg:mx-auto py-8  px-8">
      {/* Header */}
      <span
        className="block w-max bg-coal text-white px-5 py-3 rounded-full 
                 text-center text-sm mb-4 mx-auto lg:mx-0"
      >
        {offer.tag}
      </span>

      <div className="flex flex-col  justify-center items-center  text-center lg:text-left rounded-tr-xl rounded-br-xl rounded-bl-xl bg-white  lg:flex-row  sm:text-center   lg:items-start">
        <div className="flex-1">
          <h1 className="text-3xl font-koulen text-title mt-4  mb-4">
            {offer.headline}
          </h1>

          <p className="text-gray-700 leading-relaxed mb-6 lg:max-w-xl">
            {offer.longDescription}
          </p>

          <p className="text-2xl text-darkpink font-semibold">{offer.price}</p>
          {offer.crossed && (
            <p className="text-lg text-gray-400 line-through">
              {offer.crossed}
            </p>
          )}
          <span className="flex items-center justify-center lg:justify-start">
            {offer.link && (
              <a
                href={offer.link}
                target="_blank"
                rel="noopener noreferrer"
                className="discrete-btn gap-2 mt-8"
              >
                Se nettside eksempel
                <HiExternalLink />
              </a>
            )}
          </span>
        </div>

        {/* {offer.gallery && offer.gallery.length > 0 && (
          <ImageCarousel images={offer.gallery} />
        )} */}
        {offer.videos && offer.videos.length > 0 && (
          <VideoShowcase videos={offer.videos} />
        )}
      </div>

      <PortfolioExamples
        slugs={offer.exampleProjectSlugs}
        title="Prosjekt i denne størrelsen"
        className="mt-12"
      />

      <Space size="xl" type="pad" />

      {/* Detailed features */}
      {offer.detailedFeatures?.length > 0 && (
        <div className=" rounded-xl   ">
          <h2 className="text-xl text-title font-semibold mb-4">
            Dette får du
          </h2>
          <ul className="grid sm:grid-cols-2 gap-8 text-gray-700">
            {offer.detailedFeatures.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheckCircle className="w-5 h-5 shrink-0 mt-2 mr-1 text-darkpink" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-12 flex gap-4 flex-wrap flex-col ">
        <span>
          <Link to="/kontakt" className="cta-btn">
            Kontakt oss
          </Link>
        </span>
        <span>
          <Link to="/tjenester" className="links  gap-2 mt-4 ">
            <TiArrowLeftThick />
            Tilbake til pakker og tjenester
          </Link>
        </span>
      </div>

      {/* FAQ spørsmål og svar */}
      {offer.faq?.length > 0 && (
        <div className="mt-12 ">
          <h2 className="text-xl font-semibold mb-4 text-title">
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
      <Space size="xl" type="pad" />
    </section>
  );
}
