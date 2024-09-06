import React, { useState } from 'react';
import Button from './Button';
import SelectCard from './SelectCard';
import SelectInstallment from './SelectInstallment';
import SelectedInstallmentDetails from './SelectedInstallmentDetails';
import FeaturedInstallments from './FeaturedInstallments';

export default function FinanceWidget({
  bestInstallments,
  sources,
}: FinanceWidgetProps) {
  const [showSelects, setShowSelects] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');
  const [selectedInstallment, setSelectedInstallment] = useState(null);

  const handleShowSelects = () => {
    setShowSelects((showSelects) => !showSelects);
  };

  return (
    <>
      <div className="bg-mobbexGrey-Soft dark:bg-mobbexGrey-Dark shadow-md rounded-lg px-8 pt-6 pb-6 m-2 w-auto">
        <FeaturedInstallments bestInstallments={bestInstallments}/>
        <div className="text-center mt-4 max-w-sm mx-auto">
          <Button handleParentVariable={handleShowSelects} />
        </div>
        {showSelects && (
          <form className="max-w-sm mx-auto">
            <div key="selectInstallment">
              <SelectCard
                sources={sources}
                selectedCard={selectedCard}
                onSelectCard={setSelectedCard}
              />
              <SelectInstallment
                sources={sources}
                selectedInstallment={selectedInstallment}
                selectedCard={selectedCard}
                onSelectInstallment={setSelectedInstallment}
              />
            </div>
            {selectedInstallment && (
              <div key="installmentDetail">
                <SelectedInstallmentDetails
                  sources={sources}
                  selectedCard={selectedCard}
                  selectedInstallment={selectedInstallment}
                />
              </div>
            )}
          </form>
        )}
      </div>
    </>
  );
}

interface FinanceWidgetProps {
  bestInstallments :  Array<{
    installment: {
      installments: string;
      installmentValue: number | string;
      img: string[];
    };
  }>;
  sources: string[];
}