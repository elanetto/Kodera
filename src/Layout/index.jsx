import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import AnalyticsTracker from "../Components/AnalyticsTracker";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-paperwhite">
      <Header />
      <AnalyticsTracker />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
