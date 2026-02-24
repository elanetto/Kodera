import ContactForm from "../../Components/MailForm";
import Space from "../../Layout/Space";
import BackButton from "../../Components/BackButton";

function Contact() {
  return (
    <div className=" bg-lightgray flex flex-col w-full ">
      <div className="relative flex items-center justify-center bg-paperwhite">
        {/* Back button positioned left */}
        <div className="back-btn absolute left-8">
          <BackButton fallbackTo="/tjenester" />
        </div>

        {/* Centered heading */}
        <h1 className="font-oswald font-medium text-3xl md:text-5xl text-title text-center py-4">
          Kontakt oss
        </h1>
      </div>

      <div className=" bg-lightgray flex flex-col w-full justify-center items-center ">
        <p className="flex justify-center items-center text-center pl-4 pr-4 pt-8 pb-8 font-inter text-title max-w-3xl">
          Har du spørsmål om produkter, tjenester, samarbeid eller annet? Send
          oss en mail! Selvfølgelig helt uforpliktet. Vi svarer så raskt som
          mulig.
        </p>
        <ContactForm />
        <Space size="xl" type="pad" />
      </div>
    </div>
  );
}

export default Contact;
