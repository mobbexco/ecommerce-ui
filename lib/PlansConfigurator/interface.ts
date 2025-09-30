import { PaymentSource } from "../FinanceWidget/Interfaces";

export interface ISourcesLayout {
  sources: PaymentSource[];
  onSelectSource: (source: string) => void;
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

export interface IRadioConfig {
  onCustomFeatured: (value:boolean) => void;
}

export interface IPlansDisplay {
  selectedSource : string,
  sources : PaymentSource[]
  manual : boolean,
}

export interface IPlansSearcher {
  onSearch?: (query: string) => void;
}

export interface IFeaturedCheckbox {
  referenceTo : string,
  planChecked : boolean
}