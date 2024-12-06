import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FinanceWidget from "./FinanceWidget/FinanceWidget.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FinanceWidget sources={[]} />
  </StrictMode>
);
