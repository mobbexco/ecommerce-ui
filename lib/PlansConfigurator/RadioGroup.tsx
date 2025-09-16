import { useState } from "react";
import { RadioOption } from "./RadioOption";
import { IRadioGroup } from "./interface";

export function RadioGroup({ name, options, defaultValue, onChange }: IRadioGroup) {
  const [selected, setSelected] = useState(defaultValue);

  const handleChange = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className="mobbex-pc-config-radio-container">
      {options.map((o) => (
        <RadioOption
          key={o.id}
          id={o.id}
          name={name}
          value={o.value}
          label={o.label}
          defaultChecked={o.defaultChecked}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}