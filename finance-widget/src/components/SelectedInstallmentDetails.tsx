import React, { useEffect, useState } from 'react';
import { formatTags } from '../functions';

export default function InstallmentDetails({
  sourcesData,
  selectedCard,
  selectedInstallment,
}: any) {
  const [installmentData, setInstallmentData] = useState<any>(null);
  const [tags, setTags] = useState<any>({});

  useEffect(() => {
    const data = sourcesData;
    console.log('Fetched data:', data);

    const selectedData = data
      .filter((option: any) => option.source.name === selectedCard)
      .flatMap((option: any) => option.installments.list || [])
      .find((installment: any) => installment.name === selectedInstallment);

    if (selectedData) {
      setInstallmentData(selectedData);
      console.log('Filtered installment data:', selectedData);

      const formattedTags: any = formatTags(selectedData.tags);
      setTags(formattedTags);
    } else {
      console.log('No data found for the selected card and installment.');
    }
  }, [selectedCard, selectedInstallment]);

  return (
    installmentData && (
      <div className="font-sans dark:text-mobbexWhite border-t-2 border-solid border-mobbexGrey-Medium mt-6">
        <div className="grid grid-cols-2 gap-2 mt-1">
          <div className="col-start-1 font-bold">
            <p>{selectedCard}</p>
            <p className="text-xl">
              {installmentData.count} Cuotas de $
              {installmentData.totals.installment.amount}
            </p>
          </div>
          <p className="col-start-2 font-bold text-end">
            Total: ${installmentData.totals.total}
          </p>
          <div className="col-start-1 text-sm text-mobbexTag-Light dark:text-mobbexTag-Dark">
            <div className="col-start-1 text-sm">
              <p>CFT: {tags?.CFT ? tags.CFT : '0'}%</p>
              <p>
                TNA: {tags?.TNA ? tags.TNA : '0'}% TEA:{' '}
                {tags?.TEA ? tags.TEA : '0'}%
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
