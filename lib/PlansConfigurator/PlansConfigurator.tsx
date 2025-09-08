import { react } from "@vitejs/plugin-react";
import SourcesLayout from "./SourcesLayout";
import RadioConfig from "./RadioConfig";
import styles from "./styles.css?inline";
import PlansSearcher from "./PlansSearcher";
import PlansDisplay from "./PlansDisplay";

export default function PlansConfigurator(sourceUrl: string) {
  return (
    <>
      <style>{styles}</style>
      <div className="mobbex-pc-container">
        <div className="mobbex-pc-columns-container">
          <div className="mobbex-pc-payment-methods">
            <span className="mobbex-pc-title">Medios de Pago</span>
            <div className="mobbex-pc-sources-layout">
              <ul>
                <SourcesLayout sources={null} />
              </ul>
            </div>
          </div>
          <div className="mobbex-pc-config">
            <span className="mobbex-pc-title">
              Configurar preferencia de planes destacados
              <span className="mobbex-tool-tip" title="ayuda">
                ?
              </span>
            </span>
            <RadioConfig />
            <PlansSearcher installments={[]} />
            <PlansDisplay />
          </div>
        </div>
        <button type="submit" title="plans-search-button">
          <span>Confirmar</span>
        </button>
      </div>
    </>
  );
}
