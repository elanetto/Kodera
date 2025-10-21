import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import AnalyticsHelper from "../Components/AnalyticsHelper";
import ScrollToTop from "../Components/ScrollToTop";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-paperwhite">
      <ScrollToTop />
      <Header />
      <AnalyticsHelper />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
