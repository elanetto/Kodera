import { useEffect, useMemo, useRef, useState } from "react";

export default function VideoShowcase({ video }) {
  if (!video?.poster) return null;

  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  const avoidVideo = useMemo(() => {
    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    const conn = navigator.connection;
    const saveData = !!conn?.saveData;
    const effectiveType = conn?.effectiveType; // slow-2g | 2g | 3g | 4g tregt nett viser stillestående bilde
    const slowNet = effectiveType === "slow-2g" || effectiveType === "2g";

    return prefersReducedMotion || saveData || slowNet;
  }, []);
  console.log("video debug", video.play, {
    avoidVideo,
    effectiveType: navigator.connection?.effectiveType,
    saveData: navigator.connection?.saveData,
    reducedMotion: window.matchMedia?.("(prefers-reduced-motion: reduce)")
      ?.matches,
  });

  // hvis treigt nett, ikke vis vid, vis kun bildet
  if (avoidVideo || !video?.play) {
    return (
      <img
        src={video.poster}
        alt=""
        className="w-full max-w-[450px] rounded-xl"
        loading="lazy"
        decoding="async"
      />
    );
  }

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // om IntersectionObserver ikke finnes, last video med én gang
    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px", threshold: 0.01 }
    );

    io.observe(el);

    // hvis den allerede er på skjermen, trigger vi load med en gang
    const rect = el.getBoundingClientRect();
    const inViewNow = rect.top < window.innerHeight + 200 && rect.bottom > -200;
    if (inViewNow) {
      setShouldLoad(true);
      io.disconnect();
    }

    return () => io.disconnect();
  }, []);

  //  src først når vi skal laste
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !shouldLoad) return;

    el.src = video.play;

    const p = el.play();
    if (p?.catch) p.catch(() => {});
  }, [shouldLoad, video.play]);

  return (
    <div className="max-w-[405px] flex flex-col">
      <video
        ref={videoRef}
        className="w-full rounded-xl"
        poster={video.poster}
        muted
        loop
        playsInline
        preload="metadata"
        autoPlay
        disablePictureInPicture
        controlsList="nodownload noremoteplayback noplaybackrate"
      />
    </div>
  );
}

// export default function VideoShowcase({ videos }) {
//   if (!videos || videos.length === 0) return null;

//   return (
//     <div className="max-w-[450px] flex flex-col  ">
//       {videos.map((vid, i) => (
//         <video
//           key={i}
//           src={vid}
//           className="w-full "
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//       ))}
//     </div>
//   );
// }
