import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xzzjzvjg");

  if (state.succeeded) {
    return (
      <p className="text-white bg-darkpink flex justify-center items-center w-md h-[52px] mx-auto rounded-lg">
        Meldingen er sendt ✅ Vi svarer deg straks! 🙌
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 
             min-w-[360px] 
             max-w-md sm:max-w-lg md:max-w-2xl xl:max-w-[800px] 
             mx-auto p-6 shadow rounded-lg bg-white"
    >
      <input
        type="text"
        name="name"
        placeholder="Navn"
        className="border border-gray-400 p-2 rounded w-full"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Din e-post"
        className="border border-gray-400 p-2 rounded w-full"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        name="message"
        placeholder="Melding"
        rows="5"
        className="border border-gray-400  p-2 rounded w-full"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-darkpink flex items-center justify-center text-white gap-2 text-lg p-2 rounded hover:bg-darkpinkhover w-full cursor-pointer disabled:opacity-70"
      >
        {state.submitting && (
          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        )}
        {state.submitting ? "Sender..." : "Send"}
      </button>
    </form>
  );
}
