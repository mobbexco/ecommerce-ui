import { createRoot } from 'react-dom/client';

import PlansConfigurator from './PlansConfigurator';

const divId = "mbbx-plans-configurator";
let root: ReturnType<typeof createRoot> | null = null;

function renderPlansConfigurator() {
    const container = document.getElementById(divId);
    if (container) {
        // cleans root before render if exists
        if (root) {
            root.unmount();
        }
        root = createRoot(container);
        root.render(<PlansConfigurator />)
    }
}

renderPlansConfigurator();