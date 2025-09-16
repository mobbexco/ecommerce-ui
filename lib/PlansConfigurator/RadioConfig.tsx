import { useState } from "react";
import { RadioGroup } from "./RadioGroup";

export default function RadioConfig() {
  const [showConfig, setShowConfig] = useState("not_show");
  const [bestConfig, setBestConfig] = useState("best_three");

  return (
    <>
      <RadioGroup
        name="pc-config-radio-show"
        defaultValue={showConfig}
        onChange={setShowConfig}
        options={[
          {
            id: "not_show",
            value: "not_show",
            label: "Ocultar planes destacados",
          },
          {
            id: "show",
            value: "show",
            label: "Mostrar planes destacados",
            defaultChecked : true,
          },
        ]}
      />
      {showConfig === "show" && (
        <RadioGroup
          name="pc-config-radio-best"
          defaultValue={bestConfig}
          onChange={setBestConfig}
          options={[
            {
              id: "best_three",
              value: "best_three",
              label: "Mostrar los 3 mejores planes",
              defaultChecked : true,
            },
            {
              id: "manual",
              value: "manual",
              label: "Definir manualmente los planes destacados",
            },
          ]}
        />
      )}
    </>
  );
}
