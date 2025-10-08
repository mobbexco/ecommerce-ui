import { createRoot } from 'react-dom/client';
import PlansConfigurator from './PlansConfigurator';
import { PaymentSource } from "../FinanceWidget/Interfaces";

declare global {
    interface Window {
        mobbexManual: boolean
        mobbexFeaturedPlans: string[],
        mobbexSelectedPlans: string[],
        mobbexSources: PaymentSource[],
        mobbexShowFeaturedPlans: boolean,
    }
}

const divId = "mbbx-plans-configurator";
let root: ReturnType<typeof createRoot> | null = null;
console.log("mobbex sources:", window.mobbexSources)

function renderPlansConfigurator() {
    const container = document.getElementById(divId);
    if (container) {
        if (root) {
            root.unmount();
        }
        root = createRoot(container);
        root.render(
          <PlansConfigurator
            sources={window.mobbexSources || []}
            manual={window.mobbexManual || false}
            featuredPlans={window.mobbexFeaturedPlans || []}
            selectedPlans={window.mobbexSelectedPlans || []}
            showFeaturedPlans={window.mobbexShowFeaturedPlans || false}
          />
        );
    }
}

renderPlansConfigurator();