import { useState } from "react";
import Button from "./Button";
import SelectCard from "./SelectCard";
import SelectInstallment from "./SelectInstallment";
import SelectedInstallmentDetails from "./SelectedInstallmentDetails";
import FeaturedInstallments from "./FeaturedInstallments";
import { FeaturedInstallment, FinanceWidgetProps } from "./Interfaces";
import { getFeaturedInstallments } from "./functions";
import ReactShadowRoot from 'react-shadow-root';
import styles from './styles.css?inline';

export default function FinanceWidget({
  sources,
  theme 
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
    <div className="mbbx-finance-widget-container" color-scheme={theme}>
      <ReactShadowRoot>
        <style>
          {styles}
        </style>
        <div className="financeWidget-wrapper">
          <FeaturedInstallments bestInstallments={featured}/>
          <div className="financeWidget-buttonWrapper">
            <Button handleParentVariable={handleShowSelects} />
          </div>
          {showSelects && (
            <form className="financeWidget-form">
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
      </ReactShadowRoot>
    </div>
  );
}