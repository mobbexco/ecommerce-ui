import { createRoot } from 'react-dom/client';
import FinanceWidget from './FinanceWidget/FinanceWidget';

declare global {
    interface Window {
        mobbexSourcesUrl: string;
        mobbexTheme : 'light' | 'dark';
        featuredInstallments : string[] | null;
    }
}

const WIDGET_ID = "mbbx-finance-widget";
let root: ReturnType<typeof createRoot> | null = null;

function renderWidget() {
    const container = document.getElementById(WIDGET_ID);
    if (container) {
        // cleans root before render if exists
        if (root) {
            root.unmount();
        }
        root = createRoot(container);
        root.render(
            <FinanceWidget
                sourcesUrl={window.mobbexSourcesUrl || ""}
                theme={window.mobbexTheme}
                featuredInstallments={window.featuredInstallments}
            />
        );
    }
}

// Listen for DOM mutations
const observer = new MutationObserver(() => {
    const container = document.getElementById(WIDGET_ID);
    // only renders if container exists and is clean (has no child nodes)
    if (container && (!container.hasChildNodes() || !root)) {
        renderWidget();
    }
});

// configure observer for body childrens changes
observer.observe(document.body, { childList: true, subtree: true });

// initial render
renderWidget();