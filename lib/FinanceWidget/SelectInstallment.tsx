import React from "react";
import { PaymentSource } from "./Interfaces";

export default function SelectInstallment({
  sources,
  selectedInstallment,
  selectedCard,
  onSelectInstallment,
  theme,
}: SelectInstallmentProps) {
  const installments = sources
    .filter((item: any) => item.source.name === selectedCard)
    .map((item: any) =>
      item.installments.enabled
        ? item.installments.list?.map((installment: any) => installment.name)
        : [item.view.subgroup_title]
    )
    .flat();

  const handleSelectInstallment = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetInstallment = e.target.value;
    onSelectInstallment(targetInstallment);
  };

  return (
    <div className="mt-4">
      <label className={`${theme === 'light' ? '' : 'text-mobbexWhite'} block text-black text-base font-sans font-medium mb-2`}>
        Selecciona el método de pago:
      </label>
      <select
        value={selectedInstallment}
        disabled={!selectedCard}
        onChange={handleSelectInstallment}
        className="p-2 bg-mobbexWhite text-black text-sm font-sans rounded-lg shadow w-full"
      >
        <option value="">Selecciona un método de pago</option>
        {installments.map((installment: any, index: any) => (
          <option key={index} value={installment}>
            {installment}
          </option>
        ))}
      </select>
    </div>
  );
}

interface SelectInstallmentProps {
  sources: PaymentSource[];
  selectedInstallment: string;
  selectedCard: string;
  onSelectInstallment: (installment: string) => void;
  theme: 'light' | 'dark';
}
