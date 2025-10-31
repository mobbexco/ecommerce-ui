import { createRoot } from 'react-dom/client';
import PlansConfigurator from './PlansConfigurator';
import { ISources } from './interface';

declare global {
    interface Window {
        mobbexManual: boolean
        mobbexSources: ISources,
        platformFormName: string,
        mobbexFeaturedPlans: string[],
        mobbexSelectedPlans: string[],
        mobbexAdvancedPlans: string[],
        mobbexShowFeaturedPlans: boolean,
    }
}

const divId = "mbbx-plans-configurator";
let root: ReturnType<typeof createRoot> | null = null;

function renderPlansConfigurator() {
    const container = document.getElementById(divId);
    if (container) {
        if (root) {
            root.unmount();
        }
        root = createRoot(container);
        root.render(
          <PlansConfigurator
            manual={window.mobbexManual || false}
            formName={window.platformFormName || ''}
            sources={window.mobbexSources || undefined}
            featuredPlans={window.mobbexFeaturedPlans || []}
            selectedPlans={window.mobbexSelectedPlans || []}
            advancedPlans={window.mobbexAdvancedPlans || []}
            showFeaturedPlans={window.mobbexShowFeaturedPlans || false}
          />
        );
    }
}

renderPlansConfigurator();