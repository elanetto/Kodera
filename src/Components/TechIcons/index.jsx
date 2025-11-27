// src/Components/TechIcons/index.jsx
import { techIconMap } from "./iconMap";

export default function TechIcons({ techKeys = [], size = "md" }) {
  if (!techKeys.length) return null;

  const sizeClasses =
    size === "sm"
      ? "h-6"
      : size === "lg"
      ? "h-10"
      : "h-8"; // default "md"

  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {techKeys.map((key) => {
        const normalizedKey = String(key).toLowerCase();
        const icon = techIconMap[normalizedKey];

        if (!icon) {
          // Fallback: simple pill with text if no icon is found
          return (
            <span
              key={key}
              className="px-3 py-1 rounded-full bg-neutral-100 text-xs font-medium text-neutral-800"
            >
              {key}
            </span>
          );
        }

        return (
          <div
            key={key}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-xs font-medium text-neutral-800"
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className={`${sizeClasses} w-auto`}
            />
            <span>{icon.alt}</span>
          </div>
        );
      })}
    </div>
  );
}
