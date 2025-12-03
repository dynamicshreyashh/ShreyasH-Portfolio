import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { PortfolioConfigProvider } from "./context/PortfolioConfigContext";
import { ThemeProvider } from "./context/ThemeContext";

import { HelmetProvider } from "react-helmet-async"; // ✅ ADD THIS

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>   {/* ✅ Wrap entire app here */}
      <PortfolioConfigProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </PortfolioConfigProvider>
    </HelmetProvider>
  </StrictMode>
);
