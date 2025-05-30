import React, { useEffect } from "react";
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

  // Manages automatic selection when there is only one plan when selectedCard is changed
  useEffect(() => {
    if (installments.length === 1) {
      onSelectInstallment(installments[0]);
    }
  }, [selectedCard]);

  const handleSelectInstallment = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetInstallment = e.target.value;
    onSelectInstallment(targetInstallment);
  };

  return (
    <div className="financeWidget-select">
      <label>
        Selecciona las cuotas
      </label>
      <select
        value={selectedInstallment}
        onChange={handleSelectInstallment}
      >
        {installments.length > 1 && (
          <option value="Cantidad de cuotas">Cantidad de cuotas</option>
        )}
        {installments.map((installment: any, index: any) => (
          <option key={index} value={installment}>
            {installment}
          </option>
        ))}
      </select>
    </div>
  );
}