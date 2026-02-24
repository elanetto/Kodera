import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

export function CarouselComponent({ images = [], title }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {images.length > 0 && (
        <div className="project-carousel h-full w-full overflow-hidden rounded-xl shadow">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={10000}
            // IMPORTANT: prevent library from forcing its own height from image
            dynamicHeight={false}
            className="h-full  "
          >
            {images.map((img, index) => {
              const hasProjectLink = Boolean(img.projectId);
              const hasExternalLink = Boolean(img.link);
              const isLinked = hasProjectLink || hasExternalLink;

              const imageElement = (
                <>
                  <img
                    src={img.src}
                    alt={img.alt || `Slide ${index + 1} for ${title}`}
                    className="w-full h-full object-cover object-center"
                  />

                  {img.caption && (
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-black/60 text-white px-3 py-1 rounded flex items-center gap-2">
                        {img.caption}
                        {(img.link || img.projectId) && (
                          <FiExternalLink className="inline-block" />
                        )}
                      </div>
                    </div>
                  )}
                </>
              );

              const Wrapper = ({ children }) => {
                if (hasProjectLink) {
                  return (
                    <Link
                      to={`/portfolio/${img.projectId}`}
                      className="block w-full h-full"
                    >
                      {children}
                    </Link>
                  );
                }

                if (hasExternalLink) {
                  return (
                    <a
                      href={img.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      {children}
                    </a>
                  );
                }

                return <>{children}</>;
              };

              return (
                <div
                  key={index}
                  onClick={() => !isLinked && setSelectedImage(img.src)}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") &&
                    !isLinked &&
                    setSelectedImage(img.src)
                  }
                  role={!isLinked ? "button" : undefined}
                  tabIndex={!isLinked ? 0 : -1}
                  className="relative h-full w-full"
                >
                  <Wrapper>
                    <div className="h-full w-full">{imageElement}</div>
                  </Wrapper>
                </div>
              );
            })}
          </Carousel>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => e.key === "Escape" && setSelectedImage(null)}
          tabIndex={-1}
        >
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-[90vh] max-w-[90vw] rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
