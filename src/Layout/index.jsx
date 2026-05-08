import { useEffect, useState } from "react";
import { Outlet, useNavigation, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import AnalyticsHelper from "../Components/AnalyticsHelper";
import ScrollToTop from "../Components/ScrollToTop";
import koderaLoader from "./../assets/Loader/kodera-loader.json";

export default function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <AnalyticsHelper />

      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <Lottie
            animationData={koderaLoader}
            loop={true}
            className="w-60 h-60"
          />
        </div>
      )}

      {/*  pushing all  content down so it doesn't hide behind fixed header */}
      <main className="flex-1 pt-20 sm:pt-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
