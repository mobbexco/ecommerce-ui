import { useEffect, useState } from "react";
import { formatTags } from "./functions";
import { FormattedTag, Installment, InstallmentDetailsProps } from "./Interfaces";

export default function InstallmentDetails({
  sources,
  selectedCard,
  selectedInstallment,
}: InstallmentDetailsProps) {
  const [installment, setInstallment] = useState<Installment | null>(null);
  const [tags, setTags] = useState<FormattedTag | null>(null);

  useEffect(() => {
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
  }, [selectedCard, selectedInstallment]);

  return (
    installment && (
      <div className="financeWidget-selectedInstallmentDetails">
        <div className="grid">
          <div className="column-1">
            <p>{selectedCard}</p>
            <p>
              {installment.count} Cuotas de $
              {installment.totals.installment.amount}
            </p>
          </div>
          <div className="tags">
            <p>CFT: {tags?.CFT ? tags.CFT : "0"}%</p>
            <p>
              TNA: {tags?.TNA ? tags.TNA : "0"}% TEA:{" "}
              {tags?.TEA ? tags.TEA : "0"}%
            </p>
          </div>
        </div>
        <div className="column-2">
          <p>Total: ${installment.totals.total}</p>
        </div>
      </div>
    )
  );
}