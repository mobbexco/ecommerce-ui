import { PaymentSource } from "../FinanceWidget/Interfaces";

export interface ISourcesLayout {
  sources: PaymentSource[];
  onSelect: (source: PaymentSource) => void;
}

export  interface ISaveButton {
  settings: string[];
}

export interface IRadioOption {
  id: string;
  name: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
  onChange?: (value: string) => void;
}

export interface IRadioGroup {
  name: string;
  options: { id: string; value: string; label: string, defaultChecked?:boolean }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}