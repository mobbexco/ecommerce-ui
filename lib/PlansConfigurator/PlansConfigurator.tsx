import { useState } from "react";
import SourcesLayout from "./SourcesLayout";
import RadioConfig from "./RadioConfig";
import styles from "./styles.css?inline";
import PlansDisplay from "./PlansDisplay";
import ReactShadowRoot from "react-shadow-root";
import { IPlansConfigurator } from "./interface";
import GlobalProvider from "../context";

export default function PlansConfigurator({
  sources,
  featuredPlans,
  selectedPlans,
  showFeaturedPlans,
  manual,
}: IPlansConfigurator) {
  const [selectedSource, setSelectedSource] = useState<string>("");
  const [state, setState] = useState({
    featuredPlans: featuredPlans,
    selectedPlans: selectedPlans,
    showFeaturedPlans: showFeaturedPlans,
    manual: manual,
  });

  console.log("manual:", state.manual);
  console.log("featuredPlans:", state.featuredPlans);
  console.log("selectedPlans:", state.selectedPlans);
  console.log("showFeaturedPlans:", state.showFeaturedPlans);

  return (
    <GlobalProvider state={state} setState={setState}>
      <ReactShadowRoot mode="open">
        <style>{styles}</style>
        <div className="mobbex-pc-form">
          <div className="mobbex-pc-columns-container">
            <div className="mobbex-pc-payment-methods">
              <span className="mobbex-pc-title">Medios de pago</span>
              <SourcesLayout
                sources={sources}
                onSelectSource={setSelectedSource}
              />
            </div>
            <div className="mobbex-pc-config">
              <span className="mobbex-pc-title">
                Configurar preferencia de planes destacados
                <span className="mobbex-tool-tip" title="ayuda">
                  ?
                </span>
              </span>
              <RadioConfig />
              <PlansDisplay
                selectedSource={selectedSource}
                sources={sources}
              />
            </div>
          </div>
        </div>
      </ReactShadowRoot>
      <input
        type="hidden"
        name="mobbex_plans"
        value={JSON.stringify(state.selectedPlans)}
      />
      <input
        type="hidden"
        name="mobbex_featured_plans"
        value={JSON.stringify(state.featuredPlans)}
      />
      <input
        type="hidden"
        name="mobbex_show_featured_plans"
        value={state.showFeaturedPlans ? "yes" : "no"}
      />
      <input
        type="hidden"
        name="mobbex_manual_config"
        value={state.manual ? "yes" : "no"}
      />
    </GlobalProvider>
  );
}
