import { useState } from "react";
import { sourcesExamples } from "../examples";
import SourcesLayout from "./SourcesLayout";
import RadioConfig from "./RadioConfig";
import styles from "./styles.css?inline";
import PlansDisplay from "./PlansDisplay";
import ReactShadowRoot from "react-shadow-root";

export default function PlansConfigurator() {
  const data = sourcesExamples; // para facilitar despues el codeo

  const [selectedSource, setSelectedSource] = useState("");
  const [customFeatured, setCustomFeatured] = useState(false);

  return (
    <ReactShadowRoot>
      <style>{styles}</style>
      <div className="mobbex-pc-form">
        <div className="mobbex-pc-columns-container">
          <div className="mobbex-pc-payment-methods">
            <span className="mobbex-pc-title">Medios de pago</span>
            <SourcesLayout sources={data} onSelectSource={setSelectedSource} />
          </div>
          <div className="mobbex-pc-config">
            <span className="mobbex-pc-title">
              Configurar preferencia de planes destacados
              <span className="mobbex-tool-tip" title="ayuda">
                ?
              </span>
            </span>
            <RadioConfig onCustomFeatured={setCustomFeatured} />
            <PlansDisplay
              selectedSource={selectedSource}
              sources={data}
              manual={customFeatured}
            />
          </div>
        </div>
      </div>
    </ReactShadowRoot>
  );
}
