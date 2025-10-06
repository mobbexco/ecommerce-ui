import { useState, useEffect } from "react";
import { RadioGroup } from "./RadioGroup";
import { IRadioConfig } from "./interface";

export default function RadioConfig({
  onCustomFeatured,
  showFeaturedPlans,
}: IRadioConfig) {
  // TODO: manejar el estado de configuracion manual globalmente
  const [showConfig, setShowConfig] = useState(
    showFeaturedPlans === "yes" ? "show" : "not_show"
  );
  const [bestConfig, setBestConfig] = useState("best_three");

  useEffect(() => {
    setShowConfig(showFeaturedPlans === "yes" ? "show" : "not_show");
  }, [showFeaturedPlans]);

  const handleCustomFeatured = (selectedConfig: string) => {
    setBestConfig(selectedConfig);
    onCustomFeatured(selectedConfig === "manual");
  };

  return (
    <>
      <RadioGroup
        name="pc-config-radio-show"
        defaultValue={showFeaturedPlans === "yes" ? "show" : "not_show"}
        onChange={setShowConfig}
        options={[
          {
            id: "not_show",
            value: "not_show",
            label: "Ocultar planes destacados",
            defaultChecked: showFeaturedPlans == "no"
          },
          {
            id: "show",
            value: "show",
            label: "Mostrar planes destacados",
            defaultChecked: showFeaturedPlans == "yes"
          },
        ]}
      />
      {showConfig === "show" && (
        <RadioGroup
          name="pc-config-radio-best"
          defaultValue={bestConfig}
          onChange={handleCustomFeatured}
          options={[
            {
              id: "best_three",
              value: "best_three",
              label: "Mostrar los 3 mejores planes",
              defaultChecked: bestConfig !== "manual"
            },
            {
              id: "manual",
              value: "manual",
              label: "Definir manualmente los planes destacados",
              defaultChecked: bestConfig === "manual"
            },
          ]}
        />
      )}
    </>
  );
}