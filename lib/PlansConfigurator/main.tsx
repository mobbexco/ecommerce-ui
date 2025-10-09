import { createRoot } from 'react-dom/client';
import PlansConfigurator from './PlansConfigurator';
import { allPlansExample } from './allPlansExample';
import { ISources } from './interface';

declare global {
    interface Window {
        sources: ISources,
        featuredPlans: string[],
        selectedPlans: string[],
        showFeaturedPlans: boolean,
        manual: boolean
    }
}

const divId = "mbbx-plans-configurator";
let root: ReturnType<typeof createRoot> | null = null;
console.log("mobbex sources:", allPlansExample)

function renderPlansConfigurator() {
    const container = document.getElementById(divId);
    if (container) {
        if (root) {
            root.unmount();
        }
        root = createRoot(container);
        root.render(
          <PlansConfigurator
            // sources={window.sources || allPlansExample}
            sources={allPlansExample}
            featuredPlans={["G36OJ9OOAR0GC6HCC0"]}
            selectedPlans={["G36OJ9OOAR0GC6HCC0", "XUUT89T9I4LQABSPYB", "05LB86590EAWJ0DP41", "Z7HIEEYMND1NTKCH87"]}
            showFeaturedPlans={true}
            manual={true}
          />
        );
    }
}

renderPlansConfigurator();