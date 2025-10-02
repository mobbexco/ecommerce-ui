import { useState } from "react";
import SourcesLayout from "./SourcesLayout";
import RadioConfig from "./RadioConfig";
import styles from "./styles.css?inline";
import PlansDisplay from "./PlansDisplay";
import ReactShadowRoot from "react-shadow-root";
import {IPlansConfigurator} from "./interface"

export default function PlansConfigurator({mobbexSources} : IPlansConfigurator) {
  if (mobbexSources.length < 1) {
    console.log("sources not found", mobbexSources);
    return
    }

  const data = mobbexSources;

  const [checkedPlans, setCheckedPlans] = useState<string[]>([]);
  const [featuredPlans, setFeaturedPlans] = useState<string[]>([]);
  const [selectedSource, setSelectedSource] = useState<string>("");
  const [customFeatured, setCustomFeatured] = useState<boolean>(false);

  console.log('checked', checkedPlans)
  console.log('custom', customFeatured)
  console.log('feat', featuredPlans)

  return (
    <>
      <ReactShadowRoot mode="open">
        <style>{styles}</style>
        <div className="mobbex-pc-form">
          <div className="mobbex-pc-columns-container">
            <div className="mobbex-pc-payment-methods">
              <span className="mobbex-pc-title">Medios de pago</span>
              <SourcesLayout
                sources={data}
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
              <RadioConfig onCustomFeatured={setCustomFeatured}/>
              <PlansDisplay
                selectedSource={selectedSource}
                sources={data}
                manual={customFeatured}
                onSelectPlan={setCheckedPlans}
                onSetFeaturedPlans={setFeaturedPlans}
              />
            </div>
          </div>
        </div>
      </ReactShadowRoot>
      <input type="hidden" name="mobbex_plans" value={JSON.stringify(checkedPlans)}/>
      <input type="hidden" name="mobbex_featured_plans" value={JSON.stringify(featuredPlans)}/>
      <input type="hidden" name="mobbex_show_featured_plans" value={customFeatured ? "yes" : "no"}/>
    </>
  );
}
