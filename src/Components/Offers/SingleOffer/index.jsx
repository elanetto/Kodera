import { useParams, Link, useNavigate } from "react-router-dom";
import { packages } from "../offersData.js";

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
    <section className="max-w-5xl mx-auto py-20 mt-20 px-4">
      {/* Header section */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="flex-1">
          <span className="inline-block bg-darkpink text-white px-3 py-1 rounded-md text-sm mb-3">
            {offer.tag}
          </span>

          <h1 className="text-3xl font-koulen text-title mb-4">
            {offer.headline}
          </h1>

          <p className="text-gray-700 leading-relaxed mb-6">
            {offer.longDescription}
          </p>

          <p className="text-xl text-darkpink font-semibold">{offer.price}</p>
          {offer.crossed && (
            <p className="text-sm text-gray-400 line-through">
              {offer.crossed}
            </p>
          )}

          <div className="mt-8 flex gap-4">
            <Link
              to="/kontakt"
              className="px-6 py-2 bg-darkpink text-white rounded-lg hover:bg-darkpinkhover"
            >
              Kontakt oss
            </Link>
            <Link
              to="/tjenester"
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Tilbake til pakker
            </Link>
          </div>
        </div>

        {offer.heroImage && (
          <img
            src={offer.heroImage}
            alt={offer.headline}
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
        )}
      </div>

      {/* Detailed features */}
      {offer.detailedFeatures?.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Dette får du</h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
            {offer.detailedFeatures.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-darkpink" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* FAQ */}
      {offer.faq?.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Ofte stilte spørsmål</h2>
          <div className="space-y-3">
            {offer.faq.map((item, i) => (
              <details key={i} className="border rounded-lg p-4">
                <summary className="cursor-pointer font-medium text-title">
                  {item.q}
                </summary>
                <p className="mt-2 text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
