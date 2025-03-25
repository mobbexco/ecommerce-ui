import React from "react";
import { SelectInstallmentProps } from "./Interfaces";

export default function SelectInstallment({
  sources,
  selectedInstallment,
  selectedCard,
  onSelectInstallment,
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
    <div className="financeWidget-select">
      <label>
        Selecciona el método de pago:
      </label>
      <select
        value={selectedInstallment}
        disabled={!selectedCard}
        onChange={handleSelectInstallment}
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