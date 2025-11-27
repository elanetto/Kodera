import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import HvitLogo from "./../../assets/branding/Kodera-logo-hvit.svg";
import { scrollToId } from "./../../Components/ScrollToID";
import ThemeToggle from "../../Components/ThemeToggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    navigate("/"); // go to homepage
    scrollToId(id); // scroll to section
    setIsOpen(false); // close mobile menu
  };

  return (
    <header className="w-full bg-coal fixed z-888">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img src={HvitLogo} alt="Logo for Kodera" className="h-12" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 text-white text-lg font-medium">
            <li>
              <Link
                to="/omoss"
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                Om oss
              </Link>
            </li>
            <li>
              <Link
                to="/tjenester"
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                Tjenester
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                Portfølje
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-coal border-t border-gray-700">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-white text-lg font-medium">
            <li>
              <Link
                to="/omoss"
                className="hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Om oss
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("tjenester")}
                className="hover:text-gray-300 transition-colors text-left"
              >
                Tjenester
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("portfolio")}
                className="hover:text-gray-300 transition-colors text-left"
              >
                Portfølje
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {/* <ThemeToggle /> */}
    </header>
  );
}
