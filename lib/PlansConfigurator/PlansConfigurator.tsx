import { useState } from "react";
// import { fetcher } from "../FinanceWidget/functions";
import { sourcesExamples } from "../examples";
import SourcesLayout from "./SourcesLayout";
import RadioConfig from "./RadioConfig";
import styles from "./styles.css?inline";
import PlansDisplay from "./PlansDisplay";
import SaveButton from "./SaveButton";

export default function PlansConfigurator(sourceUrl: string) {
  // const { data, error, isLoading } = useSWR(sourcesUrl, fetcher)
  const data = sourcesExamples; // para facilitar despues el codeo

  const [selectedSource, setSelectedSource] = useState("");
  // console.log(data);

  return (
    <>
      <style>{styles}</style>
      <div className="mobbex-pc-container">
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
            <RadioConfig />
            <PlansDisplay selectedSource={selectedSource} sources={data} manual={true}/>
          </div>
        </div>
        <SaveButton settings={[]}/>
      </div>
    </>
  );
}
