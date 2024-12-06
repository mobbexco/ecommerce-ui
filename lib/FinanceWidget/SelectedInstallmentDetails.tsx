import { useEffect, useState } from "react";
import { formatTags } from "./functions";
import { FormattedTag, Installment, PaymentSource } from "./Interfaces";

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
      <div className="font-sans dark:text-mobbexWhite border-t-2 border-solid border-mobbexGrey-Medium mt-6">
        <div className="grid grid-cols-2 gap-2 mt-1">
          <div className="col-start-1 font-bold">
            <p>{selectedCard}</p>
            <p className="text-xl">
              {installment.count} Cuotas de $
              {installment.totals.installment.amount}
            </p>
          </div>
          <p className="col-start-2 font-bold text-end">
            Total: ${installment.totals.total}
          </p>
          <div className="col-start-1 text-sm text-mobbexTag-Light dark:text-mobbexTag-Dark">
            <div className="col-start-1 text-sm">
              <p>CFT: {tags?.CFT ? tags.CFT : "0"}%</p>
              <p>
                TNA: {tags?.TNA ? tags.TNA : "0"}% TEA:{" "}
                {tags?.TEA ? tags.TEA : "0"}%
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

interface InstallmentDetailsProps {
  sources: PaymentSource[];
  selectedCard: string;
  selectedInstallment: string;
}
