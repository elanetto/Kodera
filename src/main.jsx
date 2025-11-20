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

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
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
