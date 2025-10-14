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
  const [state, setState] = useState({
    manual: manual,
    selectedSource: '',
    featuredPlans: featuredPlans,
    selectedPlans: selectedPlans,
    showFeaturedPlans: showFeaturedPlans,
  });

  console.log("manual:", state.manual);
  console.log("featuredPlans:", state.featuredPlans);
  console.log("selectedPlans:", state.selectedPlans);
  console.log("selectedSource:", state.selectedSource);
  console.log("showFeaturedPlans:", state.showFeaturedPlans);

  if (!sources)
    console.log("Sources not found. Please check your Mobbex credentials.", sources)

  return sources && (
    <GlobalProvider state={state} setState={setState}>
      <ReactShadowRoot mode="open">
        <style>{styles}</style>
        <div className="mobbex-pc-form">
          <div className="mobbex-pc-columns-container">
            <div className="mobbex-pc-payment-methods">
              <span className="mobbex-pc-title">Medios de pago</span>
              <SourcesLayout
                sourceNames={sources.sourceNames}
              />
            </div>
            <div className="mobbex-pc-config">
              <div className="mobbex-pc-config-top-section">
                <span className="mobbex-pc-title">
                  Configurar preferencia de planes destacados
                  <span className="mobbex-tool-tip" title="ayuda">
                    ?
                  </span>
                </span>
                <RadioConfig />
              </div>
                <PlansDisplay
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
