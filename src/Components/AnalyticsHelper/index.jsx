// src/Components/AnalyticsHelper/index.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AnalyticsHelper() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      const fullPath =
        window.location.pathname +
        window.location.search +
        window.location.hash;

      window.gtag("event", "page_view", {
        page_path: fullPath,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
}
