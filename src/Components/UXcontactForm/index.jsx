import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function UXcontactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, handleSubmit] = useForm("xdkwzjok");

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-pinky text-white font-bold rounded-xl hover:bg-pink-900 transition"
      >
        Send forespørsel
      </button>

      {/* Overlay + modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Dark background */}
          <div
            className="absolute inset-0 bg-coal opacity-90"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal box */}
          <div className="relative bg-white rounded-2xl shadow-lg w-11/12 max-w-md p-6 z-10">
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
                Takk for bestillingen! ✨
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
                    type="url"
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
                  className="px-6 py-2 bg-pinky text-white font-bold rounded-lg hover:bg-pink-900 transition"
                >
                  Send inn
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
