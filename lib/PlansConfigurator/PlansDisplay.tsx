import { useState, useContext } from "react";
import { IPlanField, IPlansDisplay, ISources } from "./interface";
import PlansSearcher from "./PlansSearcher";
import FeaturedPlanCheckbox from "./FeaturedPlanCheckbox";
import { GlobalContext } from "../context";

export default function PlansDisplay({
  sources,
}: IPlansDisplay) {
  const { state, setState } = useContext(GlobalContext);
  const commonPlans: ISources["commonFields"] = sources.commonFields
  const advancedPlans: ISources["advancedFields"] = sources.advancedFields
  var filteredInstallments: IPlanField[] = [];

  // Gets plans from selected source
  const [searchQuery, setSearchQuery] = useState("");
  if (state.selectedSource.length > 0 && advancedPlans[state.selectedSource])
    filteredInstallments = advancedPlans[state.selectedSource]?.filter((i) =>
      i.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // togglePlanCheckbox handles individual checkbox plans states
  const togglePlanCheckbox = (uid: string) => {
    const { selectedPlans, advancedPlans} = state;

    // set selected plans
    const selectedPlansNew = selectedPlans.includes(uid)
      ? selectedPlans.filter((id: string) => id !== uid)
      : [...new Set([...selectedPlans, uid])];

    // set advanced plans
    const advancedPlansNew = advancedPlans.includes(uid)
      ? advancedPlans.filter((id: string) => id !== uid)
      : [...new Set([...advancedPlans, uid])];

    setState({
      selectedPlans: selectedPlansNew,
      advancedPlans: advancedPlansNew,
    });
  };

  // activateAllCheckboxes handles bulk activation only for current source
  const activateAllCheckboxes = (): void => {
    // gets actual source uids
    const sourceUids = filteredInstallments.map((i) => i.id);

    // keep selected plans from other source
    const currentSelected = state.selectedPlans.filter(
      (id: string) => !sourceUids.includes(id)
    );

    // verify actual source plans state
    const allSelectedInSource = sourceUids.every((id) =>
      state.selectedPlans.includes(id)
    );

    const newSelectedPlans = allSelectedInSource
      ? currentSelected
      : [...new Set([...currentSelected, ...sourceUids])];

    const newAdvancedPlans = allSelectedInSource
      ? state.advancedPlans.filter((id: string) => !sourceUids.includes(id))
      : [...new Set([...state.advancedPlans, ...sourceUids])];

    // updates global state
    setState({
        ...state,
        selectedPlans: newSelectedPlans,
        advancedPlans: newAdvancedPlans,
    });
  };

  // handleFeaturedPlansUpdate manages featured plans activation
  const handleFeaturedPlansUpdate = (updatedFeaturedPlans: string[]): void => {
    setState({
      featuredPlans: updatedFeaturedPlans,
    });
  };

  return (
    state.selectedSource &&
    (
      <div className="mobbex-pc-config-bottom-section">
        <PlansSearcher onSearch={setSearchQuery} />
        <span className="mobbex-pc-config-checkbox-title">
          Selecciona uno de los planes
        </span>
        
        <div className="mobbex-pc-config-checkbox-container">
          {filteredInstallments.length > 0 && 
          <label className="mobbex-pc-checkbox-label">
            <input
              className="mobbex-pc-config-checkbox"
              type="checkbox"
              name={`mobbex_plan_${state.selectedSource}_all`}
              id={`mobbex_plan_${state.selectedSource}_all`}
              checked={filteredInstallments.every((i) =>
                state.selectedPlans.includes(i.id)
              )}
              onChange={activateAllCheckboxes}
            />
            <span className="mobbex-pc-checkbox-text">
              Activar todos los planes
            </span>
          </label>
          }

          {Object.values(commonPlans).map((commonPlan) => (
            <div
              key={commonPlan.id}
              className="mobbex-pc-checkbox-label-dinamic"
            >
              <label
                className="mobbex-pc-checkbox-label"
                htmlFor={`mobbex_common_plan_${commonPlan.id}`}
              >
                <input
                  className="mobbex-pc-config-checkbox mobbex-pc-config-cp-checkbox"
                  type="checkbox"
                  name={`mobbex_common_plan_${commonPlan.id}`}
                  id={`mobbex_common_plan_${commonPlan.id}`}
                  checked={true}
                  disabled={true}
                />
                <span className="mobbex-pc-checkbox-text" title={commonPlan.description}>
                  {commonPlan.label}
                </span>
              </label>
              {state.manual && (
                <FeaturedPlanCheckbox
                  referenceTo={commonPlan.id}
                  onPlanChecked={handleFeaturedPlansUpdate}
                />
              )}
             </div>
          ))} 
          {filteredInstallments.map((advancedPlan) => (
            <div
              key={advancedPlan.id}
              className="mobbex-pc-checkbox-label-dinamic"
            >
              <label
                className="mobbex-pc-checkbox-label"
                htmlFor={`mobbex_plan_${state.selectedSource}_${advancedPlan.id}`}
              >
                <input
                  className="mobbex-pc-config-checkbox"
                  type="checkbox"
                  name={`mobbex_plan_${state.selectedSource}_${advancedPlan.id}`}
                  id={`mobbex_plan_${state.selectedSource}_${advancedPlan.id}`}
                  checked={state.selectedPlans.includes(advancedPlan.id)}
                  onChange={() => togglePlanCheckbox(advancedPlan.id)}
                />
                <span className="mobbex-pc-checkbox-text" title={advancedPlan.description}>
                  {advancedPlan.label}
                </span>
              </label>

              {state.manual && (
                <FeaturedPlanCheckbox
                  referenceTo={advancedPlan.id}
                  onPlanChecked={handleFeaturedPlansUpdate}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    )
  );
}
