// src/Components/PortfolioCard/index.jsx
import { Link } from "react-router-dom";
import TechIcons from "../TechIcons";

export default function PortfolioCard({ project }) {
  if (!project) return null;

  const firstImage = project.images?.[0];
  const thumbnail =
    typeof firstImage === "string"
      ? { src: firstImage, alt: project.title }
      : firstImage;

  return (
    <Link
      to={`/portfolio/${project.id}`}
      className="
    group block rounded-2xl overflow-hidden
    bg-coal border border-lightgray   
    hover:border-pinky"
    >
      {/* Thumbnail */}
      {thumbnail?.src && (
        <div className="relative">
          <img
            src={thumbnail.src}
            alt={thumbnail.alt || project.title}
            className="w-full h-48 md:h-56 object-cover object-top transition duration-300 group-hover:scale-[1.02] group-hover:opacity-95"
          />
          {/* Subtle dark overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-coal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-1">
              {project.title}
            </h2>

            {project.subtitle && (
              <p className="text-xs uppercase tracking-[0.2em] text-pinky mb-2 oswald">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>

        {project.description && (
          <p className="mt-1 text-xs md:text-sm text-lightgray line-clamp-3">
            {project.description}
          </p>
        )}

        {/* Tech icons */}
        {project.tech && project.tech.length > 0 && (
          <div className="mt-4">
            <TechIcons techKeys={project.tech} size="sm" />
          </div>
        )}

        <p
          className="
            mt-4 text-xs text-pinky opacity-0 group-hover:opacity-100
            transition
          "
        >
          Se flere detaljer →
        </p>
      </div>
    </Link>
  );
}
