import ContactForm from "../../Components/MailForm";

function Contact() {
  return (
    <div className="pt-8 pb-8 bg-lightgray  ">
      <h1 className="font-oswald text-3xl lg:text-4xl text-center pb-8">
        Kontakt oss
      </h1>
      <ContactForm />
    </div>
  );
}

export default Contact;
