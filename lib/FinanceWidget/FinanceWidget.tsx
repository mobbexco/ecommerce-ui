import { useState } from "react";
import Button from "./Button";
import SelectCard from "./SelectCard";
import SelectInstallment from "./SelectInstallment";
import SelectedInstallmentDetails from "./SelectedInstallmentDetails";
import FeaturedInstallments from "./FeaturedInstallments";
import {FinanceWidgetProps } from "./Interfaces";
import ReactShadowRoot from 'react-shadow-root';
import styles from './styles.css?inline';

export default function FinanceWidget({
  sources,
  theme,
  showFeaturedInstallments = true
}: FinanceWidgetProps) {
  const [showSelects, setShowSelects] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");
  const [selectedInstallment, setSelectedInstallment] = useState("");

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
        {
          showFeaturedInstallments &&
          <FeaturedInstallments sources={sources}/>
        }
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
                    onSelectInstallment={setSelectedInstallment}
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