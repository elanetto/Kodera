import { useState } from "react";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full  max-w-xl mx-auto lg:mt-14">
      <img
        src={images[index]}
        alt="gallery"
        className="w-full rounded-lg shadow-md h-100 object-cover"
      />

      {/* Buttons */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded-full shadow"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded-full shadow"
      >
        ›
      </button>
    </div>
  );
}
