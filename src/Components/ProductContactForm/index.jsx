import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useForm, ValidationError } from "@formspree/react";
import { FaCheckCircle } from "react-icons/fa";

export default function ProductContactModal({ isOpen, onClose, product }) {
  // Kodera contact form
  const [state, handleSubmit] = useForm("xzzjzvjg");

  const titleClass =
    "text-xl font-semibold text-coal mb-4" +
    (state.succeeded ? " text-center" : "");

  // Lukk popup på ESC
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  // Auto-lukk 5 sek etter suksess
  useEffect(() => {
    if (!isOpen) return;
    if (!state.succeeded) return;

    const t = setTimeout(() => {
      onClose?.();
    }, 5000);

    return () => clearTimeout(t);
  }, [isOpen, state.succeeded, onClose]);

  if (!isOpen) return null;

  const productName =
    product?.tag || product?.headline || product?.id || "Ukjent";
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  const modal = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      {/* backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-coal/90 z-[9999]"
      />

      {/* modal vindu */}
      <div className="relative z-[10000] w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 text-2xl top-3 text-gray-500 hover:text-gray-800 cursor-pointer"
          aria-label="Lukk modal"
        >
          ✕
        </button>

        <h3 className={titleClass}>
          Kontakt oss om: <span className="text-darkpink">{productName}</span>
        </h3>

        {state.succeeded ? (
          <div className="text-center">
            <p className="text-green-600 font-semibold flex items-center justify-center gap-2">
              Meldingen er sendt
              <FaCheckCircle className="w-5 h-5 shrink-0 text-green-600" />
              Vi svarer deg straks!
            </p>

            <p className="text-xs text-gray-500 mt-4">
              Vinduet lukkes automatisk om noen sekunder …
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Produkt (synlig, ferdig utfylt med produktet) */}
            <div className="flex flex-col">
              <label className="font-semibold text-coal pb-2">Produkt</label>
              <input
                name="product"
                value={productName}
                readOnly
                className="border border-coal/50 rounded-lg px-3 py-2 bg-gray-100"
              />
            </div>

            {/* Navn */}
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold text-coal pb-2">
                Navn
              </label>
              <input
                id="name"
                name="name"
                required
                className="border border-coal/50 rounded-lg px-3 py-2"
              />
            </div>

            {/* E-post */}
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold text-coal pb-2">
                E-post
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="border border-coal/50 rounded-lg px-3 py-2"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            {/* Melding */}
            <div className="flex flex-col">
              <label htmlFor="message" className="font-semibold text-coal pb-2">
                Melding
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="border  border-coal/50 rounded-lg px-3 py-2"
                placeholder="Skriv litt om hva du ønsker…"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Skjulte felter  */}
            <input type="hidden" name="source" value="product-contact" />
            <input type="hidden" name="product_id" value={product?.id || ""} />
            <input
              type="hidden"
              name="product_tag"
              value={product?.tag || ""}
            />
            <input
              type="hidden"
              name="product_headline"
              value={product?.headline || ""}
            />
            <input type="hidden" name="page_url" value={pageUrl} />

            {/* Subject til Formspree*/}
            <input
              type="hidden"
              name="_subject"
              value={`Produkt-forespørsel: ${productName}`}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-main text-white text-lg p-2 rounded-lg cursor-pointer hover:bg-main-hover disabled:opacity-70"
            >
              {state.submitting ? "Sender..." : "Send"}
            </button>
          </form>
        )}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
