import "./index.css";
import SortLogo from "./assets/branding/kodera-logo-01.svg";
import Offers from "./components/offers";
import ContactForm from "./Components/mail-form";

function App() {
  return (
    <div className="flex items-center flex-col">
      <div className="max-w-5xl w-full flex justify-center flex-col items-center gap-5 h-105">
        <h1 className="text-xl text-coal">Hei hei! Her kommer...</h1>

        <img
          src={SortLogo}
          alt="Logo for Kodera"
          className="h-32 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
        />
        <p>FrontEnd Development / Nettsider kodet av Kvinner</p>
      </div>
      <h2 className="text-xl font-semibold text-coal p-4">Pakker vi tilbyr</h2>
      <div className="pb-4">
        <Offers />
      </div>
      <h2 className="text-xl font-semibold text-coal pb-4 pt-8">
        Interessert? Send oss en mail!
      </h2>
      <div className="w-full">
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
