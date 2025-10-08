import { useContext } from "react";
import { RadioGroup } from "./RadioGroup";
import { GlobalContext } from "../context";

export default function RadioConfig() {
  const { state, setState } = useContext(GlobalContext);

  const handleCustomFeatured = (selectedConfig: string) => {
    setState({manual: selectedConfig === "manual"});
  };

  const handleShowFeaturedPlans = (selectedConfig: string) => {
    setState({showFeaturedPlans : selectedConfig === "show"})
  }

  return (
    <>
      <RadioGroup
        name="pc-config-radio-show"
        defaultValue={state.showFeaturedPlans ? "show" : "not_show"}
        onChange={handleShowFeaturedPlans}
        options={[
          {
            id: "not_show",
            value: "not_show",
            label: "Ocultar planes destacados",
            defaultChecked: !state.showFeaturedPlans
          },
          {
            id: "show",
            value: "show",
            label: "Mostrar planes destacados",
            defaultChecked: state.showFeaturedPlans
          },
        ]}
      />
      {state.showFeaturedPlans && (
        <RadioGroup
          name="pc-config-radio-best"
          defaultValue={state.manual ? "manual" : "best_three"}
          onChange={handleCustomFeatured}
          options={[
            {
              id: "best_three",
              value: "best_three",
              label: "Mostrar los 3 mejores planes",
              defaultChecked: !state.manual
            },
            {
              id: "manual",
              value: "manual",
              label: "Definir manualmente los planes destacados",
              defaultChecked: state.manual
            },
          ]}
        />
      )}
    </>
  );
}