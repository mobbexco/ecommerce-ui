import { useState, useContext } from "react";
import { PaymentSource, Installment } from "../FinanceWidget/Interfaces";
import { IPlansDisplay } from "./interface";
import PlansSearcher from "./PlansSearcher";
import FeaturedPlanCheckbox from "./FeaturedPlanCheckbox";
import { GlobalContext } from "../context";

export default function PlansDisplay({
  selectedSource,
  sources,
  manual,
}: IPlansDisplay) {
  const { state, setState } = useContext(GlobalContext);

  // Gets plans from selected source
  const installments: Array<{ name: string; uid: string }> = sources
    .filter((item: PaymentSource) => item.source.name === selectedSource)
    .flatMap((item: PaymentSource) =>
      item.installments.enabled
        ? item.installments.list?.map((installment: Installment) => ({
            name: installment.name,
            uid: installment.uid,
            key: new Date().getTime(),
          })) ?? []
        : [
            {
              name: item.view.subgroup_title,
              uid: item.view.subgroup_title,
            },
          ]
    )
    .filter((i): i is { name: string; uid: string } =>
      Boolean(i.name && i.uid)
    );

  const [searchQuery, setSearchQuery] = useState("");
  const filteredInstallments = installments.filter((i) =>
    i.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // togglePlanCheckbox handles individual checkbox plans states
  const togglePlanCheckbox = (uid: string) => {
    const { selectedPlans } = state;
    setState({
      selectedPlans: selectedPlans.includes(uid)
        ? selectedPlans.filter((id: any) => id !== uid)
        : [...selectedPlans, uid],
    });
  };

  // activateAllCheckboxes handles bulk plans activation
  const activateAllCheckboxes = (): void => {
    const allSelected = state.selectedPlans.length === installments.length;
    setState({
      selectedPlans: allSelected ? [] : installments.map((i: any) => i.uid),
    });
  };

  // handleFeaturedPlansUpdate manages featured plans activation
  const handleFeaturedPlansUpdate = (updatedFeaturedPlans: string[]): void => {
    setState({
      featuredPlans: updatedFeaturedPlans,
    });
  };

  return (
    selectedSource &&
    installments.length > 0 && (
      <>
        <PlansSearcher onSearch={setSearchQuery} />
        <span className="mobbex-pc-config-checkbox-title">
          Selecciona uno de los planes
        </span>

        <div className="mobbex-pc-config-checkbox-container">
          <label className="mobbex-pc-checkbox-label">
            <input
              className="mobbex-pc-config-checkbox"
              type="checkbox"
              name={`mobbex_plan_${selectedSource}_all`}
              id={`mobbex_plan_${selectedSource}_all`}
              checked={state.selectedPlans.length === installments.length}
              onChange={activateAllCheckboxes}
            />
            <span className="mobbex-pc-checkbox-text">
              Activar todos los planes
            </span>
          </label>

          {filteredInstallments.map((installment) => (
            <div
              key={installment.uid}
              className="mobbex-pc-checkbox-label-dinamic"
            >
              <label
                className="mobbex-pc-checkbox-label"
                htmlFor={`mobbex_plan_${selectedSource}_${installment.uid}`}
              >
                <input
                  className="mobbex-pc-config-checkbox"
                  type="checkbox"
                  name={`mobbex_plan_${selectedSource}_${installment.uid}`}
                  id={`mobbex_plan_${selectedSource}_${installment.uid}`}
                  checked={state.selectedPlans.includes(installment.uid)}
                  onChange={() => togglePlanCheckbox(installment.uid)}
                />
                <span className="mobbex-pc-checkbox-text">
                  {installment.name}
                </span>
              </label>

              {manual && (
                <FeaturedPlanCheckbox
                  referenceTo={installment.uid}
                  planChecked={state.selectedPlans.includes(installment.uid)}
                  featuredPlans={state.featuredPlans || []}
                  onPlanChecked={handleFeaturedPlansUpdate}
                />
              )}
            </div>
          ))}
        </div>
      </>
    )
  );
}
