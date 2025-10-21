import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { createPortal } from "react-dom";

export default function UXcontactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, handleSubmit] = useForm("xdkwzjok");

  const modalContent = (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-coal opacity-90"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Modal box */}
      <div className="relative bg-white rounded-2xl shadow-lg w-11/12 max-w-md p-6 z-[10000]">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Success message */}
        {state.succeeded ? (
          <p className="text-green-600 font-semibold text-center">
            Epost er sendt ✨
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col text-left">
              <label htmlFor="name" className="font-semibold text-coal">
                Navn
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="border rounded-lg px-3 py-2"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col text-left">
              <label htmlFor="email" className="font-semibold text-coal">
                E-post
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="border rounded-lg px-3 py-2"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>

            {/* Website */}
            <div className="flex flex-col text-left">
              <label htmlFor="website" className="font-semibold text-coal">
                Din nåværende nettside
              </label>
              <input
                id="website"
                type="text"
                name="website"
                placeholder="https://"
                className="border rounded-lg px-3 py-2"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col text-left">
              <label htmlFor="message" className="font-semibold text-coal">
                Melding
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="border rounded-lg px-3 py-2"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>

            {/* Hidden field for internal note */}
            <input
              type="hidden"
              name="internal_note"
              value="Denne eposten er en UX bestilling gjort gjennom nettsiden"
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={state.submitting}
              className="px-6 py-2 bg-pinky text-white font-bold rounded-lg hover:bg-darkpinkhover transition"
            >
              Send inn
            </button>
          </form>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 cursor-pointer bg-darkpinkhover text-white font-semiboldbold rounded-xl hover:bg-darkpink transition"
      >
        Send forespørsel
      </button>

      {/* Render modal using Portal */}
      {isOpen && createPortal(modalContent, document.body)}
    </>
  );
}
