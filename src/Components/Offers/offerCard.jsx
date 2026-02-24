import { FaCheckCircle } from "react-icons/fa";

/**
 * OfferCard component
 * -------------------
 * Reusable card for offers / hourly rates.
 *
 * Props:
 *  - tag: string (top pink label)
 *  - headline: string (green bar text)
 *  - features: string[] or {text, className}[]
 *  - price: string
 *  - crossed: string (optional crossed-out price)
 *  - widthClass: optional Tailwind class for custom width
 *  - bodyClass: optional Tailwind class for extra padding/margin
 */
export default function OfferCard({
  tag,
  headline,
  features = [],
  price,
  crossed,
  widthClass = "w-68",
  bodyClass = "",
}) {
  return (
    <div className="cardstyle flex flex-col justify-center items-center h-full ">
      {/* Top pink label */}
      <div className="flex justify-center py-2 min-w-[180px] bg-darkpink rounded-t-lg">
        <h3 className="text-xl md:text-2xl text-white font-semibold font-oswald">{tag}</h3>
      </div>

      {/* Card container */}
      <div
        className={`flex flex-col shadow rounded-lg bg-white ${widthClass} h-full`}
      >
        {/* Green headline bar */}
        <div className="flex items-center justify-center text-center bg-[#81CABF] rounded-t-lg px-4 py-2">
          <p className="text-base font-medium tracking-widest uppercase text-title font-oswald">
            {headline}
          </p>
        </div>

        {/* Features */}
        <ul className={`flex flex-col gap-3 px-4 pt-5 pb-4 ${bodyClass}`}>
          {features.map((f, i) => {
            const text = typeof f === "string" ? f : f.text;
            const extra = typeof f === "string" ? "" : f.className || "";
            const isLong = typeof f === "object" && f.long; // for å se om teksten er lang

            return (
              <li
                key={i}
                className={`flex ${
                  isLong ? "items-start" : "items-center"
                } gap-3 ${extra}`}
              >
                <FaCheckCircle
                  className={`w-4 h-4 shrink-0 text-darkpink ${
                    isLong ? "mt-4" : ""
                  }`}
                />
                <p className="text-sm text-[#2e3944] text-left leading-snug">
                  {text}
                </p>
              </li>
            );
          })}
        </ul>

        {/* Price (sticks to bottom) */}
        <div className="mt-auto flex flex-col justify-center items-center p-4">
          <p className="text-xl text-darkpink font-semibold">{price}</p>
          {crossed && (
            <p className="text-sm text-gray-400 line-through">{crossed}</p>
          )}
        </div>
      </div>
    </div>
  );
}
