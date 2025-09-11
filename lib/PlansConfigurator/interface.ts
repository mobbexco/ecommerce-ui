import { PaymentSource } from "../FinanceWidget/Interfaces";

export interface ISourcesLayout {
  sources: PaymentSource[];
  onSelect: (source: PaymentSource) => void;
}

export  interface ISaveButton {
  settings: string[];
}