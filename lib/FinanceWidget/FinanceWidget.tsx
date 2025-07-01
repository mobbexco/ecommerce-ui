import { useState } from "react";
import Button from "./Button";
import SelectCard from "./SelectCard";
import SelectInstallment from "./SelectInstallment";
import SelectedInstallmentDetails from "./SelectedInstallmentDetails";
import FeaturedInstallments from "./FeaturedInstallments";
import { FinanceWidgetProps } from "./Interfaces";
import ReactShadowRoot from "react-shadow-root";
import styles from "./styles.css?inline";
import { fetcher } from "./functions";
import useSWR from "swr";

export default function FinanceWidget({
  sourcesUrl,
  theme,
  showFeaturedInstallments = true,
}: FinanceWidgetProps) {
  // Fetch sources and gets state
  const { data, error, isLoading } = useSWR(sourcesUrl, fetcher);

  const [selectedCard, setSelectedCard] = useState("");
  const [showSelects, setShowSelects] = useState(false);
  const [selectedInstallment, setSelectedInstallment] = useState("");

  const handleShowSelects = () => {
    setShowSelects((showSelects) => !showSelects);
  };

  return (
      <div color-scheme={theme}>
        <ReactShadowRoot>
          <style>{styles}</style>

          <div className="financeWidget-wrapper">
            {showFeaturedInstallments && (
              <div className="financeWidget-featuredInstallments">
                <FeaturedInstallments sources={data?.sources} error={error} />
              </div>
            )}
            <div className="financeWidget-buttonWrapper">
              <Button
                handleParentVariable={handleShowSelects}
                isLoading={isLoading}
                error={error}
              />
            </div>
            {!isLoading && data?.sources && showSelects && (
              <form className="financeWidget-form">
                <div key="selectInstallment">
                  <SelectCard
                    sources={data?.sources}
                    selectedCard={selectedCard}
                    onSelectCard={setSelectedCard}
                  />
                  <SelectInstallment
                    sources={data?.sources}
                    selectedInstallment={selectedInstallment}
                    selectedCard={selectedCard}
                    onSelectInstallment={setSelectedInstallment}
                  />
                </div>
                {selectedInstallment && (
                  <div key="installmentDetail">
                    <SelectedInstallmentDetails
                      sources={data?.sources}
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
