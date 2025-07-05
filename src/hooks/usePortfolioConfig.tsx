import { useContext } from "react";
import { PortfolioConfigContext } from "../context/PortfolioConfigContext";

export const usePortfolioConfig = () => {
  const context = useContext(PortfolioConfigContext);
  if (context === null) {
    throw new Error(
      "usePortfolioConfig must be used within a PortfolioConfigProvider",
    );
  }
  return context;
};
