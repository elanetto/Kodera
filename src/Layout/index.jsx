import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import AnalyticsHelper from "../Components/AnalyticsHelper";
import ScrollToTop from "../Components/ScrollToTop";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <AnalyticsHelper />

      {/* 👇 push all page content down so it doesn't hide behind fixed header */}
      <main className="flex-1 pt-20 sm:pt-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
