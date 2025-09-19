import { useState } from "react";
import { PaymentSource } from "../FinanceWidget/Interfaces";
import { ISourcesLayout } from "./interface";

export default function SourcesLayout({
  sources,
  onSelectSource,
}: ISourcesLayout) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelectSource = (source: PaymentSource) => {
    setSelected(source.source.name);
    onSelectSource(source.source.name); // le avisás al padre
  };

  return (
    <div className="mobbex-pc-sources-layout">
      {sources
        .filter((source) => source.installments.enabled)
        .map((source) => {
          const isSelected = selected === source.source.name;

          return (
            <button
              type="button"
              key={source.source.reference}
              className={`mobbex-pc-payment-methods-sources ${
                isSelected ? "mobbex-source-selected" : ""
              }`}
              onClick={() => handleSelectSource(source)}
            >
              <div className="mobbex-pc-payment-method-info">
                <img
                  src={`https://res.mobbex.com/images/sources/original/${source.source.reference}.png`}
                  alt="Card logo"
                  className="mobbex-card-logo"
                />
                <div className="mobbex-source-info">
                  <div className="mobbex-source-text">
                    <span className="mobbex-source-name">
                      {source.source.name}
                    </span>
                    <span className="mobbex-source-description">
                      {source.view.subgroup_title}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mobbex-arrow">{">"}</div>
            </button>
          );
        })}
    </div>
  );
}
