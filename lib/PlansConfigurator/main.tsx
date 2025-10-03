import { createRoot } from 'react-dom/client';
import PlansConfigurator from './PlansConfigurator';
import { PaymentSource } from "../FinanceWidget/Interfaces";

declare global {
    interface Window {
        mobbexSources: PaymentSource[],
        featuredPlans: string[],
        selectedPlans: string[],
        showFeaturedPlans: "yes" | "no"
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
        root.render(<PlansConfigurator 
            mobbexSources={window.mobbexSources || []}
            featuredPlans={window.featuredPlans || []}
            selectedPlans={window.selectedPlans || []}
            showFeaturedPlans={window.showFeaturedPlans}
            />)
    }
}

renderPlansConfigurator();