import { createRoot } from 'react-dom/client';
import PlansConfigurator from './PlansConfigurator';
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
console.log("mobbex sources:", window.sources)

function renderPlansConfigurator() {
    const container = document.getElementById(divId);
    if (container) {
        if (root) {
            root.unmount();
        }
        root = createRoot(container);
        root.render(
          <PlansConfigurator
            sources={window.sources || undefined}
            featuredPlans={window.featuredPlans || []}
            selectedPlans={window.selectedPlans || []}
            showFeaturedPlans={window.showFeaturedPlans || false}
            manual={window.manual || false}
          />
        );
    }
}

renderPlansConfigurator();