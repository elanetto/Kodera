import ContactForm from "../../Components/MailForm";
import Space from "../../Layout/Space"

function Contact() {
  return (
    <div className="py-10 bg-lightgray  ">
      <h1 className="font-oswald font-bold text-2xl text-title lg:text-2xl text-center py-5">
        KONTAKT OSS
      </h1>
      <ContactForm />
      <Space size="xl" type="pad" />
    </div>
  );
}

export default Contact;