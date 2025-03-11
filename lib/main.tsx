import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FinanceWidget from "./FinanceWidget/FinanceWidget.tsx";
import PosCheckout from "./Pos/Pos.tsx";
import {getPosSampleData} from "./Pos/sampleFunction.ts";
import Modal from "./Modal/Modal.tsx";

let sampleData = getPosSampleData();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Modal>
      <PosCheckout posList={sampleData.posList} opUrl={sampleData.opUrl} handleResetTransaction={sampleData.handleResetTransaction} />
    </Modal>
    <Modal>
      <FinanceWidget sources={[]} theme="light"/>
    </Modal>
  </StrictMode>
);

