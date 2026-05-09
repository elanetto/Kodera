import { FaCheckCircle } from "react-icons/fa";

export default function OfferCard({
  tag,
  headline,
  features = [],
  price,
  crossed,
  widthClass = "w-68",
  bodyClass = "",
  recommended,
  onSelect,
}) {
  return (
    <div className="cardstyle flex flex-col items-center h-full">
      {/* Pink top label */}
      <div className="flex justify-center py-2 min-w-[180px] bg-darkpink rounded-t-lg">
        <h3 className="text-xl md:text-2xl text-white font-semibold font-oswald">
          {tag}
        </h3>
      </div>

      {/* Card */}
      <div
        className={`relative overflow-visible flex flex-col shadow rounded-lg bg-white ${widthClass} h-full} ${
          recommended
            ? "border-2 border-darkpink scale-[1.02]"
            : "border border-gray-200 hover:border-gray-300"
        }`}
      >
        {/* ⭐ ANBEFALT BADGE (LIGGER OVER KORTET) */}
        {recommended && (
          <div className="absolute -top-4 right-0.5 z-30 bg-main-hover text-white text-xs px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
            ⭐ Anbefalt
          </div>
        )}

        {/* Headline (turkis bar) */}
        <div className="bg-[#81CABF] px-4 py-3 text-center rounded-t">
          <p className="text-base font-medium tracking-widest uppercase text-title font-oswald">
            {headline}
          </p>
        </div>

        {/* Features */}
        <ul className={`flex flex-col gap-3 px-4 pt-6 pb-4 ${bodyClass}`}>
          {features.map((f, i) => {
            const text = typeof f === "string" ? f : f.text;
            const isLong = typeof f === "object" && f.long;

            return (
              <li
                key={i}
                className={`flex ${
                  isLong ? "items-start" : "items-center"
                } gap-3`}
              >
                <FaCheckCircle
                  className={`w-4 h-4 shrink-0 text-darkpink ${
                    isLong ? "mt-4" : ""
                  }`}
                />
                <p className="text-sm text-[#2e3944] leading-snug">{text}</p>
              </li>
            );
          })}
        </ul>

        {/* Price + CTA */}
        <div className="mt-auto flex flex-col items-center p-4 gap-3">
          <p className="text-xl text-darkpink font-semibold">{price}</p>

          {crossed && (
            <p className="text-sm text-gray-400 line-through">{crossed}</p>
          )}

          {onSelect && (
            <button
              onClick={onSelect}
              className={`w-full py-2 rounded-lg text-white font-medium transition ${
                recommended
                  ? "bg-darkpink hover:bg-darkpinkhover"
                  : "bg-coal hover:bg-coal/80"
              }`}
            >
              Velg {tag}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
