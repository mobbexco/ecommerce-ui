import { useState } from "react";
import { RadioGroup } from "./RadioGroup";
import { IRadioConfig } from "./interface";
// import { GlobalContext } from '../context';

export default function RadioConfig({ onCustomFeatured }: IRadioConfig) {
  const [showConfig, setShowConfig] = useState("not_show");
  const [bestConfig, setBestConfig] = useState("best_three");
  // const { state, setState } = useContext(GlobalContext);

  const handleCustomFeatured = (selectedConfig: string) => {
    setBestConfig(selectedConfig);
    // setState({manual : selectedConfig === 'manual' })
    onCustomFeatured(selectedConfig === 'manual');
  }

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
            defaultChecked: true,
          },
          {
            id: "show",
            value: "show",
            label: "Mostrar planes destacados",
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
              defaultChecked: true,
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