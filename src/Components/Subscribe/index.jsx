import { useEffect, useRef } from "react";

const FORM_ID = "1ed1443c-f804-11f0-ab33-a1580784432d";
const SRC = `https://eomail5.com/form/${FORM_ID}.js`;

export default function NewsletterForm() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // If the form already exists inside this mount point, don't re-inject
    if (mountRef.current.querySelector("form")) return;

    // If we've already injected a script into THIS mount point, don't do it again
    if (mountRef.current.querySelector(`script[data-form="${FORM_ID}"]`)) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = SRC; // remove cache-bust now that it's working
    script.setAttribute("data-form", FORM_ID);

    mountRef.current.appendChild(script);
  }, []);

  return (
    <section className="w-full max-w-xl mx-auto mt-10">
      <div ref={mountRef} className="min-h-[220px] rounded-2xl" />
    </section>
  );
}
