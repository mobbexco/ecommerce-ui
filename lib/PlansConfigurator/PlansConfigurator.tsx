import { useState, useEffect } from "react";
import SourcesLayout from "./SourcesLayout";
import RadioConfig from "./RadioConfig";
import styles from "./styles.css?inline";
import PlansDisplay from "./PlansDisplay";
import ReactShadowRoot from "react-shadow-root";
import { IPlansConfiguratorProps, IState } from "./interface";
import GlobalProvider from "../context";
import tooltipImg from "./img/tooltip_img.png";

export default function PlansConfigurator({
  manual,
  sources,
  formName,
  featuredPlans,
  selectedPlans,
  advancedPlans,
  showFeaturedPlans,
}: IPlansConfiguratorProps) {
  const [state, setState] = useState<IState>({
    manual,
    advancedPlans,
    featuredPlans,
    showFeaturedPlans,
    selectedSource: "",
    selectedPlans: [...new Set(selectedPlans)],
  });

  // Merges common plans with selected advanced plans
  // Common plans from console appear pre-checked
  useEffect(() => {
    if (sources?.commonFields) {
      const newCommonPlans = Object.values(sources.commonFields).map(
        (i) => i.id
      );

      setState((prevState) => ({
        ...prevState,
        selectedPlans: [ ...new Set([...prevState.selectedPlans, ...newCommonPlans]),],
        advancedPlans: advancedPlans,
      }));
    }
  }, [sources?.commonFields, advancedPlans]);

  if (!sources)
    console.error(
      "Sources not found. Please check your Mobbex credentials.",
      sources
    );

  return (
    sources && (
      <GlobalProvider state={state} setState={setState}>
        <ReactShadowRoot mode="open">
          <style>{styles}</style>
          <div className="mobbex-pc-form">
            <div className="mobbex-pc-columns-container">
              <div className="mobbex-pc-payment-methods">
                <span className="mobbex-pc-title">Medios de pago</span>
                <SourcesLayout sourceNames={sources.sourceNames} />
              </div>
              <div className="mobbex-pc-config">
                <div className="mobbex-pc-config-top-section">
                  <span className="mobbex-pc-title">
                    Configurar preferencia de planes destacados
                    <div className="tool-tip-container">
                      <span className="mobbex-tool-tip">
                        ?
                      </span>
                      <div className="mobbex-tooltip-image">
                        <span className="tooltip-header-text">¿Qué es un plan destacado?</span>
                        <span className="tooltip-text">
                          Los planes destacados son los que tu cliente verá primero en la página del producto.
                          Puedes elegir destacarlos de forma automática (según cantidad de cuotas, interés y descuentos) o de forma manual, seleccionando vos mismo cuáles quieres resaltar.
                        </span>
                        <span className="tooltip-footer-text">Asi se verán los planes destacados:</span>
                        <img src={tooltipImg} alt="imagen_ejemplo"/>
                      </div>
                    </div>
                  </span>
                  <RadioConfig />
                </div>
                <PlansDisplay sources={sources} />
              </div>
            </div>
          </div>
        </ReactShadowRoot>
        <input
          type="hidden"
          name="mobbex_advanced_plans"
          data-form-part={formName}
          value={JSON.stringify(state.advancedPlans)}
        />
        <input
          type="hidden"
          name="mobbex_selected_plans"
          data-form-part={formName}
          value={JSON.stringify(state.selectedPlans)}
        />
        <input
          type="hidden"
          name="mobbex_featured_plans"
          data-form-part={formName}
          value={JSON.stringify(state.featuredPlans)}
        />
        <input
          type="hidden"
          name="mobbex_show_featured_plans"
          data-form-part={formName}
          value={state.showFeaturedPlans ? "yes" : "no"}
        />
        <input
          type="hidden"
          name="mobbex_manual_config"
          data-form-part={formName}
          value={state.manual ? "yes" : "no"}
        />
      </GlobalProvider>
    )
  );
}
