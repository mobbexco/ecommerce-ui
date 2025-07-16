import { useEffect, useState } from "react";
import { formatTags } from "./functions";
import { FormattedTag, Installment, InstallmentDetailsProps } from "./Interfaces";

export default function InstallmentDetails({
  sources,
  selectedCard,
  selectedInstallment,
  onSelectInstallment,
}: InstallmentDetailsProps) {
  const [installment, setInstallment] = useState<Installment | null>(null);
  const [tags, setTags] = useState<FormattedTag | null>(null);
  const [previousCard, setPreviousCard] = useState<string>(selectedCard);

  useEffect(() => {
    // Manage selected data
    if (selectedCard !== previousCard) {
      setInstallment(null);
      setPreviousCard(selectedCard);

      const availablePlans = sources
        .filter((option: any) => option.source.name === selectedCard)
        .flatMap((option: any) => option.installments.list || []);

      // Verifies if selectedCard has only one plan
      if (availablePlans.length === 1) {
        onSelectInstallment(availablePlans[0].name);
        setInstallment(availablePlans[0]);
        const formattedTags: any = formatTags(availablePlans[0].tags);
        setTags(formattedTags);
      } else {
        onSelectInstallment("Cantidad de cuotas");
      }
      return;
    }

    const selectedData: any = sources
      .filter((option: any) => option.source.name === selectedCard)
      .flatMap((option: any) => option.installments.list || [])
      .find((installment: any) => installment.name === selectedInstallment);

    if (selectedData) {
      setInstallment(selectedData);
      const formattedTags: any = formatTags(selectedData.tags);
      setTags(formattedTags);
    } else {
      console.log("No data found for the selected card and installment.");
    }
  }, [selectedCard, selectedInstallment, previousCard, onSelectInstallment]);

  // Render bypass
  if (!installment || (selectedInstallment === "Cantidad de cuotas" && !selectedCard)) {
    return null;
  }

  return (
    <div className="financeWidget-selectedInstallmentDetails">
      <div className="row-1">
        <div className="card-title">
          <p>{selectedCard}</p>
        </div>
        <div className="card-total">
          <p>Total: ${installment.totals.total}</p>
        </div>
      </div>
      <div className="row-2">
        <p>
          {installment.count} Cuota/s de $
          {installment.totals.installment.amount}
        </p>
      </div>
      <div className="tags">
        <p>CFT: {tags?.CFT ? tags.CFT : "0"}%</p>
        <p>
          TNA: {tags?.TNA ? tags.TNA : "0"}% TEA: {tags?.TEA ? tags.TEA : "0"}%
        </p>
      </div>
    </div>
  );
}
