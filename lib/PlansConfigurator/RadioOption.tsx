import { IRadioOption } from "./interfaces";

export function RadioOption({
  id,
  name,
  value,
  label,
  title,
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
        title={title}
      >
        <span className={`mobbex-radio-text`}>{label}</span>
      </label>
    </div>
  );
}
