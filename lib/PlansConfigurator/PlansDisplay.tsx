import { useState, useEffect } from "react";
import { PaymentSource, Installment } from "../FinanceWidget/Interfaces";
import { IPlansDisplay } from "./interface";
import PlansSearcher from "./PlansSearcher";
import FeaturedPlanCheckbox from "./FeaturedPlanCheckbox";

export default function PlansDisplay({
  selectedSource,
  sources,
  manual,
  onSelectPlan,
  onSetFeaturedPlans,
}: IPlansDisplay) {
  // Gets installments for selected source
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

  // Manages checked plans isolated by source
  const [checkedPlans, setCheckedPlans] = useState<Record<string, string[]>>({});
  const toggleCheckbox = (source: string, value: string) => {
    setCheckedPlans((prev) => {
      const prevForSource = prev[source] || [];
      return {
        ...prev,
        [source]: prevForSource.includes(value)
          ? prevForSource.filter((v) => v !== value)
          : [...prevForSource, value],
      };
    });
  };

  const activateAll = (source: string) => {
    setCheckedPlans((prev) => {
      const allSelected = (prev[source]?.length || 0) === installments?.length;
      return {
        ...prev,
        [source]: allSelected ? [] : installments.map((i) => i.uid),
      };
    });
  };

  const sourceCheckedPlans = checkedPlans[selectedSource] || [];

  const [searchQuery, setSearchQuery] = useState("");
  const filteredInstallments = installments.filter((i) =>
    i.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (onSelectPlan) {
      onSelectPlan(Object.values(checkedPlans).flat());
    }
  }, [checkedPlans, onSelectPlan]);

    const [featuredPlans, setFeaturedPlans] = useState<string[]>([]);

    useEffect(() => {
      if (onSetFeaturedPlans) {
        onSetFeaturedPlans(featuredPlans);
      }
    }, [featuredPlans, onSetFeaturedPlans]);

  return (
    selectedSource &&
    installments?.length > 1 && (
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
              checked={sourceCheckedPlans.length === installments.length}
              onChange={() => activateAll(selectedSource)}
            />
            <span className="mobbex-pc-checkbox-text">
              Activar todos los planes
            </span>
          </label>
          {filteredInstallments.map((installment, i) => (
            <div className="mobbex-pc-checkbox-label-dinamic">
              <label
                className="mobbex-pc-checkbox-label"
                htmlFor={`mobbex_plan_${selectedSource}_${installment.uid}`}
              >
                <input
                  className="mobbex-pc-config-checkbox"
                  type="checkbox"
                  key={i}
                  name={`mobbex_plan_${selectedSource}_${installment.uid}`}
                  id={`mobbex_plan_${selectedSource}_${installment.uid}`}
                  checked={sourceCheckedPlans.includes(installment.uid)}
                  value={
                    sourceCheckedPlans.includes(installment.uid) ? "yes" : "no"
                  }
                  onChange={() =>
                    toggleCheckbox(selectedSource, installment.uid)
                  }
                />
                <span className="mobbex-pc-checkbox-text">
                  {installment.name}
                </span>
              </label>
              {manual && (
                <FeaturedPlanCheckbox
                  referenceTo={installment.uid}
                  planChecked={sourceCheckedPlans.includes(installment.uid)}
                  featuredPlans={featuredPlans} 
                  onPlanChecked={setFeaturedPlans}
                />
              )}
            </div>
          ))}
        </div>
      </>
    )
  );
}
