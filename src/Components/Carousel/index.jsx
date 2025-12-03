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
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={10000}
          className="rounded-xl shadow"
        >
          {images.map((img, index) => {
            const imageElement = (
              <>
                <img
                  src={img.src}
                  alt={img.alt || `Slide ${index + 1} for ${title}`}
                  className="h-[300px] sm:h-[400px] md:h-[500px] object-cover object-center w-[1200px] sm:w-full"
                />

                {img.caption && (
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-black bg-opacity-50 text-white px-3 py-1 rounded flex items-center gap-2">
                      {img.caption}
                      {(img.link || img.projectId) && (
                        <FiExternalLink className="inline-block" />
                      )}
                    </div>
                  </div>
                )}
              </>
            );

            const hasProjectLink = Boolean(img.projectId);
            const hasExternalLink = Boolean(img.link);
            const isLinked = hasProjectLink || hasExternalLink;

            // Wrapper chooses Link / <a> / plain
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
                className="relative"
              >
                <Wrapper>{imageElement}</Wrapper>
              </div>
            );
          })}
        </Carousel>
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
