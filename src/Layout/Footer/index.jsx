import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-coal text-white w-full mt-16 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto gap-10 text-center">
        {/* Logo & Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Kodera</h2>
          <p className="text-sm text-white">
            FrontEnd Development kodet av kvinner i Oslo
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 pt-6 border-white text-sm text-center text-white">
        <p>© {new Date().getFullYear()} Kodera</p>
        <p className="italic text-xs pb-2">Kode av Kvinner</p>
        <Link
          to="/personvern"
          className="text-xs text-pinky hover:text-darkpink underline-offset-2 hover:underline"
        >
          Personvernerklæring
        </Link>
      </div>
    </footer>
  );
}
