import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-coal text-paperwhite w-full mt-16 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Kodera</h2>
          <p className="text-sm text-paperwhite">
            FrontEnd Development kodet av kvinner i Oslo
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 pt-6 border-t border-paperwhite text-sm text-center text-paperwhite">
        <p>© {new Date().getFullYear()} Kodera</p>
        <p className="italic text-xs">Kode av Kvinner</p>
      </div>
    </footer>
  );
}
