import { useState } from "react";
import ProductContactModal from "../../ProductContactForm";
import { useParams, Link, useNavigate } from "react-router-dom";
import { packages, hourly } from "../../../data/offersData.js";
import { TiArrowLeftThick } from "react-icons/ti";
import { FaCheckCircle } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import VideoShowcase from "./animated.jsx";
import PortfolioExamples from "../../PortfolioExamples";
import Space from "../../../Layout/Space";
import BackButton from "../../BackButton/index.jsx";
import { maintenancePackages } from "../../../data/maintenancePackages";
import OfferCard from "../offerCard.jsx";

export default function SingleOffer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  // 🔧 FIX: denne manglet (ESLint-error)
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = () => setIsContactOpen(false);

  const offer =
    packages.find((o) => o.id === id) || hourly.find((o) => o.id === id);

  const isMaintenance = id === "vedlikehold";

  // ✅ MAINTENANCE PAGE
  if (isMaintenance) {
    return (
      <section className="max-w-7xl mx-auto px-8">
        <div className="pt-8">
          <BackButton fallbackTo="/tjenester" />
        </div>

        <h1 className="text-4xl font-oswald text-title mt-8 mb-4 text-center">
          Vedlikehold av nettside
        </h1>

        <p className="text-center text-gray-700 mb-6">
          Vi oppdaterer, fikser og vedlikeholder nettsiden din – fast hver
          måned.
        </p>

        <p className="text-center text-darkpink text-2xl font-semibold mb-10">
          Fra kr 390 / mnd
        </p>

        {/* Pakker */}
        <div className="mt-12 w-full bg-lightgray bg-gradient-to-b from-lightgray to-paperwhite py-12 rounded-xl">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-oswald text-title mb-10 text-center">
              Velg vedlikeholdspakke
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {maintenancePackages.map((pkg) => (
                <div key={pkg.id}>
                  <OfferCard
                    {...pkg}
                    onSelect={() => {
                      setSelectedPackage(pkg);
                      setIsContactOpen(true);
                    }}
                  />
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-gray-400 mt-8">
              Ingen bindingstid – si opp når som helst
            </p>
          </div>
        </div>

        {/* 🔥 NY: Dette får du (oppgradert versjon) */}
        <div className="mt-20 rounded-xl p-8">
          <h2 className="text-2xl font-oswald text-title uppercase font-medium mb-6">
            Dette får du
          </h2>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 text-gray-700">
            {[
              "Endre tekst og bilder",
              "Små designjusteringer",
              "Fikse bugs og tekniske feil",
              "Oppdatere innhold",
              "Løpende forbedringer av nettsiden",
              "Rask respons når noe haster",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="w-5 h-5 text-darkpink mt-1 shrink-0" />
                <p className="leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setIsContactOpen(true)}
            className="cta-btn hover:scale-[1.02] active:scale-[0.98]"
          >
            Usikker? Send forespørsel
          </button>
        </div>

        <ProductContactModal
          isOpen={isContactOpen}
          onClose={handleClose}
          product={selectedPackage || { tag: "Vedlikeholdsavtale" }}
          onSubmitted={() => setIsSubmitted(true)}
        />

        <Space size="xl" type="pad" />
      </section>
    );
  }

  // ❌ NOT FOUND
  if (!offer) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-2xl font-koulen text-title mb-4">Oisann! :/</h1>
        <p className="text-gray-600 mb-6">
          Vi finner ikke tjenesten. Prøv igjen senere eller kontakt oss.
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

  const items = offer.detailedFeatures ?? [];
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);

  return (
    <section className="max-w-7xl lg:mx-auto px-8">
      <div className="back-btn pt-8 pb-0 lg:pb-8">
        <BackButton fallbackTo="/tjenester" />
      </div>

      {/* Header */}
      <div className="flex flex-col lg:border border-paperwhite lg:shadow-md lg:p-8 justify-center items-center text-center lg:text-left rounded-lg lg:bg-gradient-to-r from-paperwhite via-white to-white lg:flex-row">
        <div className="flex-1 mb-4 lg:mb-8">
          <h1 className="text-4xl p-2 font-oswald font-medium text-title mb-6">
            {offer.tag}
          </h1>

          <span className="block font-oswald uppercase text-base tracking-widest w-max font-medium bg-[#81CABF] text-coal px-4 py-1 rounded-full mb-8.5 mx-auto lg:mx-0">
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

          <button
            onClick={() => setIsContactOpen(true)}
            className="cta-btn mt-8 hover:scale-[1.02] active:scale-[0.98]"
          >
            {isSubmitted ? "Sendt ✓" : "Send forespørsel"}
          </button>
        </div>

        <div>
          {offer.video?.poster && <VideoShowcase video={offer.video} />}
        </div>
      </div>

      {/* Features */}
      {offer.detailedFeatures?.length > 0 && (
        <div>
          <h2 className="text-2xl font-oswald uppercase font-medium text-title mb-4 mt-8">
            Dette får du
          </h2>

          <div className="grid lg:grid-cols-2 gap-x-12">
            {[left, right].map((col, idx) => (
              <ul key={idx} className="flex flex-col gap-6 text-gray-700">
                {col.map((f, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[auto_1fr] gap-3 items-start"
                  >
                    <FaCheckCircle className="w-5 h-5 text-darkpink" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      )}

      <ProductContactModal
        isOpen={isContactOpen}
        onClose={handleClose}
        product={offer}
        onSubmitted={() => setIsSubmitted(true)}
      />

      <Space size="xl" type="pad" />
    </section>
  );
}
