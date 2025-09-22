import "./index.css";
import SortLogo from "./assets/branding/kodera-logo-01.svg";

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
    </div>
  );
}

export default App;
