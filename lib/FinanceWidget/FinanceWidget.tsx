import { useState } from "react";
import Button from "./Button";
import SelectCard from "./SelectCard";
import SelectInstallment from "./SelectInstallment";
import SelectedInstallmentDetails from "./SelectedInstallmentDetails";
import FeaturedInstallments from "./FeaturedInstallments";
import { FeaturedInstallment, FinanceWidgetProps } from "./Interfaces";
import { getFeaturedInstallments } from "./functions";

export default function FinanceWidget({
  sources,
  theme,
}: FinanceWidgetProps) {
  const [showSelects, setShowSelects] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");
  const [selectedInstallment, setSelectedInstallment] = useState("");

  //Get featured installments
  const featured: FeaturedInstallment[] = getFeaturedInstallments(sources);

  const handleShowSelects = () => {
    setShowSelects((showSelects) => !showSelects);
  };

  return (
    <>
      <div className={`${theme === "light" ? "bg-mobbexGrey-Soft" : "bg-mobbexGrey-Dark"} shadow-md rounded-lg px-8 pt-6 pb-6 m-2 w-auto`}>
        <FeaturedInstallments bestInstallments={featured} theme={theme} />
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
                theme={theme}
              />
              <SelectInstallment
                sources={sources}
                selectedInstallment={selectedInstallment}
                selectedCard={selectedCard}
                onSelectInstallment={setSelectedInstallment}
                theme={theme}
              />
            </div>
            {selectedInstallment && (
              <div key="installmentDetail">
                <SelectedInstallmentDetails
                  sources={sources}
                  selectedCard={selectedCard}
                  selectedInstallment={selectedInstallment}
                  theme={theme}
                />
              </div>
            )}
          </form>
        )}
      </div>
    </>
  );
}
