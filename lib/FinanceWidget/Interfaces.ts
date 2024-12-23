export interface FeaturedInstallment {
  count: number;
  amount: number;
  percentage: number;
  sources: string[];
  uid: string;
}

export interface FinanceWidgetProps {
  sources: PaymentSource[];
  theme?: 'light' | 'dark';
}

export interface PaymentSource {
  installments: {
    enabled: boolean;
    list?: Installment[];
  };
  view: {
    group: string;
    subgroup_title: string;
    subgroup_logo: string;
    type: string;
  };
  source: {
    reference: string;
    name: string;
  };
}

export interface Installment {
  uid: string;
  name: string;
  description: string;
  count: number;
  reference: string;
  tags?: Tag[];
  totals: Totals;
}

export interface Tag {
  visibility: string;
  key: string;
  value: string;
  label: string;
  _id: string;
}

export interface FormattedTag {
  CFT?: string;
  TNA?: string;
  TEA?: string;
}

export interface Totals {
  currency: Currency;
  installment: {
    amount: number;
    count: number;
  };
  total: number;
  financial: {
    percentage: number;
    amount: number;
  };
}

export interface Currency {
  value: string;
  label: string;
  symbol: string;
  locale: string;
  isoCode: string;
  exponent: number;
  hidden: boolean;
}
