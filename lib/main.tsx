import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FinanceWidget from "./FinanceWidget/FinanceWidget.tsx";
import PosCheckout from "./Pos/Pos.tsx";
import {getPosSampleData} from "./Pos/sampleFunction.ts";
import "./index.css";

let sampleData = getPosSampleData();
console.log(sampleData)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FinanceWidget sources={[]} theme="light"/>
    <PosCheckout posList={sampleData.posList} opUrl={sampleData.opUrl} handleResetTransaction={sampleData.handleResetTransaction} />
  </StrictMode>
);

