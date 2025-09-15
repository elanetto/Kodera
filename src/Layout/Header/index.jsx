import HvitLogo from "./../../assets/branding/Kodera-logo-hvit.svg";

export function Header() {
  return (
    <header className="w-full bg-coal">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between relative">
        <img
            src={HvitLogo}
            alt="Logo for Kodera"
            className="h-12 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
          />
      </div>
    </header>
  );
}