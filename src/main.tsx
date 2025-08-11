import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { PortfolioConfigProvider } from "./context/PortfolioConfigContext";
import { ThemeProvider } from "./context/ThemeContext"; 

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PortfolioConfigProvider>
      <ThemeProvider> {/* Optional: remove if not using themes */}
        <App />
      </ThemeProvider>
    </PortfolioConfigProvider>
  </StrictMode>
);