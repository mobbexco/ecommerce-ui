import React, { useState } from 'react';
import Button from './components/Button';
import SelectCard from './components/SelectCard';
import SelectInstallment from './components/SelectInstallment';
import SelectedInstallmentDetails from './components/SelectedInstallmentDetails';
import BestInstallments from './components/BestInstallments';

export default function FinanceWidget({
  bestInstallmentsData,
  sourcesData,
}: any) {
  const [showSelects, setShowSelects] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<string>('');
  const [selectedInstallment, setSelectedInstallment] = useState<any>(null);

  const handleShowSelects = () => {
    setShowSelects((showSelects) => !showSelects);
  };

  return (
    <>
      <div className="bg-mobbexGrey-Soft dark:bg-mobbexGrey-Dark shadow-md rounded-lg px-8 pt-6 pb-6 m-2 w-auto">
        <BestInstallments bestInstallmentsData={bestInstallmentsData} />
        <div className="text-center mt-4 max-w-sm mx-auto">
          <Button handleParentVariable={handleShowSelects} />
        </div>
        {showSelects && (
          <form className="max-w-sm mx-auto">
            <div key="selectInstallment">
              <SelectCard
                sourcesData={sourcesData}
                selectedCard={selectedCard}
                onSelectCard={setSelectedCard}
              />
              <SelectInstallment
                sourcesData={sourcesData}
                selectedInstallment={selectedInstallment}
                selectedCard={selectedCard}
                onSelectInstallment={setSelectedInstallment}
              />
            </div>
            {selectedInstallment && (
              <div key="installmentDetail">
                <SelectedInstallmentDetails
                  sourcesData={sourcesData}
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
