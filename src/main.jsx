import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout";
import OmOss from "./Pages/OmOss/index.jsx";
import Tjenester from "./Pages/Tjenester/index.jsx";
import NotFound from "./Pages/NotFound/index.jsx";
import KoderaPrivacyPolicy from "./Pages/Personvern/index.jsx";
import SinglePage from "./Pages/SinglePage";
import Portfolio from "./Pages/Portfolio";
import Project from "./Pages/Portfolio/SinglePortfolioPage";
import Contact from "./Pages/Contact/index.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "tjenester",
        element: <Tjenester />,
      },
      {
        path: "tjenester/:id",
        element: <SinglePage />,
      },
      {
        path: "omoss",
        element: <OmOss />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "portfolio/:id",
        element: <Project />,
      },
      {
        path: "personvern",
        element: <KoderaPrivacyPolicy />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
