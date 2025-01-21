import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FinanceWidget from "./FinanceWidget/FinanceWidget.tsx";
import Modal from "./Modal/Modal.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Modal>
      <FinanceWidget sources={[]} theme="light"/>
    </Modal>
  </StrictMode>
);