import { useState, useContext } from "react";
import { IPlanField, IPlansDisplay, ISources } from "./interfaces";
import PlansSearcher from "./PlansSearcher";
import FeaturedPlanCheckbox from "./FeaturedPlanCheckbox";
import { GlobalContext } from "../context";

export default function PlansDisplay({ sources }: IPlansDisplay) {
  const { state, setState } = useContext(GlobalContext);
  const advancedPlans: ISources["advancedFields"] = sources.advancedFields;
  var filteredInstallments: IPlanField[] = [];

  // Gets plans from selected source
  const [searchQuery, setSearchQuery] = useState("");
  if (state.selectedSource.length > 0 && advancedPlans[state.selectedSource])
    filteredInstallments = advancedPlans[state.selectedSource]?.filter((i) =>
      i.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Handles individual checkbox plans states
  const togglePlanCheckbox = (uid: string) => {
    setState({
      advancedPlans: state.advancedPlans.includes(uid)
        ? state.advancedPlans.filter((id: string) => id !== uid)
        : [...state.advancedPlans, uid],
    });
  };

  // Handles bulk activation only for current source
  const activateAllCheckboxes = () => {
    const sourceUids = filteredInstallments.map((i) => i.id);

    // IDs from outside the current source
    const outside = state.advancedPlans.filter(
      (id: string) => !sourceUids.includes(id)
    );

    // Are all plans from this source active?
    const allSelected = sourceUids.every((id: string) =>
      state.advancedPlans.includes(id)
    );

    setState({
      ...state,
      advancedPlans: allSelected ? outside : [...outside, ...sourceUids],
    });
  };

  const commonPlans = state.selectedSource
    ? Object.values(sources.commonFields).filter(({ label }) =>
        sources.sourceGroups?.[label]?.includes(state.selectedSource)
      )
    : [];

  return (
    state.selectedSource && (
      <div className="mobbex-pc-config-bottom-section">
        <PlansSearcher onSearch={setSearchQuery} />
        <span className="mobbex-pc-config-checkbox-title">
          Selecciona uno de los planes
        </span>

        <div className="mobbex-pc-config-checkbox-container">
          {filteredInstallments.length > 0 && (
            <label className="mobbex-pc-checkbox-label">
              <input
                className="mobbex-pc-config-checkbox"
                type="checkbox"
                name={`mobbex_plan_${state.selectedSource}_all`}
                id={`mobbex_plan_${state.selectedSource}_all`}
                checked={filteredInstallments.every((i) =>
                  state.advancedPlans.includes(i.id)
                )}
                onChange={activateAllCheckboxes}
              />
              <span className="mobbex-pc-checkbox-text">
                Activar todos los planes
              </span>
            </label>
          )}

          {commonPlans.map((commonPlan) => (
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
                <span
                  className="mobbex-pc-checkbox-text"
                  title={commonPlan.description}
                >
                  {commonPlan.label}
                </span>
              </label>
              {state.manual && (
                <FeaturedPlanCheckbox
                  referenceTo={commonPlan.id}
                  planChecked={true}
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
                  checked={state.advancedPlans.includes(advancedPlan.id)}
                  onChange={() => togglePlanCheckbox(advancedPlan.id)}
                />
                <span
                  className="mobbex-pc-checkbox-text"
                  title={advancedPlan.description}
                >
                  {advancedPlan.label}
                </span>
              </label>

              {state.manual && (
                <FeaturedPlanCheckbox
                  referenceTo={advancedPlan.id}
                  planChecked={state.advancedPlans.includes(advancedPlan.id)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    )
  );
}
