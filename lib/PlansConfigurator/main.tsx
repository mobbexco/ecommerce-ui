import { createRoot } from "react-dom/client";
import PlansConfigurator from "./PlansConfigurator";
import { ISources } from "./interfaces";

declare global {
  interface Window {
    mobbexManual: boolean;
    mobbexSources: ISources;
    platformFormName: string;
    mobbexFeaturedPlans: string[];
    mobbexAdvancedPlans: string[];
    mobbexShowFeaturedPlans: boolean;
  }
}

let root: ReturnType<typeof createRoot> | null = null;

function renderPlansConfigurator() {
  const container = document.getElementById("mbbx-plans-configurator");

  // Exit on container not found
  if (!container)
    return console.error("Mobbex Plans Configurator container not found");

  // If it's already rendered, unmount it first
  if (root) root.unmount();

  root = createRoot(container);
  root.render(
    <PlansConfigurator
      manual={window.mobbexManual || false}
      formName={window.platformFormName || ""}
      sources={window.mobbexSources || undefined}
      featuredPlans={window.mobbexFeaturedPlans || []}
      advancedPlans={window.mobbexAdvancedPlans || []}
      showFeaturedPlans={window.mobbexShowFeaturedPlans || false}
    />
  );
}

renderPlansConfigurator();
