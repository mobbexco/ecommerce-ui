import { IRadioOption } from "./interface";

export function RadioOption({
  id,
  name,
  value,
  label,
  defaultChecked,
  onChange,
}: IRadioOption) {
  return (
    <div className="mobbex-pc-radio">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={() => onChange?.(value)}
      />
      <label
        className={`mobbex-pc-radio-label ${
          id === "best_three" || id === "manual" ? "mobbex-radio-text-best" : ""
        }`}
        htmlFor={id}
      >
        <span className={`mobbex-radio-text`}>{label}</span>
      </label>
    </div>
  );
}
