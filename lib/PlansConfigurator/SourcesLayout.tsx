import { useContext } from "react";
import { ISourcesLayout } from "./interface";
import { GlobalContext } from "../context";

export default function SourcesLayout({ sourceNames }: ISourcesLayout) {
  const { state, setState } = useContext(GlobalContext);
  const sourceList = Object.entries(sourceNames);

  return (
    <div className="mobbex-pc-sources-layout">
      {sourceList.map(([sourceReference, sourceName]) => {
        const isSelected = state.selectedSource === sourceReference;
        return (
          <button
            type="button"
            key={sourceReference}
            className={`mobbex-pc-payment-methods-sources ${
              isSelected ? "mobbex-source-selected" : ""
            }`}
            onClick={() => setState({ selectedSource: sourceReference })}
          >
            <div className="mobbex-pc-payment-method-info">
              <img
                src={`https://res.mobbex.com/images/sources/original/${sourceReference}.png`}
                alt="Card logo"
                className="mobbex-card-logo"
              />
              <div className="mobbex-source-info">
                <div className="mobbex-source-text">
                  <span className="mobbex-source-name">{sourceName}</span>
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
