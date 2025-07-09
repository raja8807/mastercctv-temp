import React from "react";

const CustomMultiSelect = ({
  options,
  value,
  onChange,
  getLabel = (o) => o.label,
  getValue = (o) => o.value,
  isObject = false,
}) => {
  const handleChange = (e) => {
    const selected = options.find((opt) => getValue(opt) === e.target.value);
    onChange(selected);
  };

  return (
    <select
      value={getValue(value) || ""}
      onChange={handleChange}
      className="p-2 border rounded"
    >
      <option value="">Select...</option>
      {options.map((option) => (
        <option key={getValue(option)} value={getValue(option)}>
          {getLabel(option)}
        </option>
      ))}
    </select>
  );
};

export default CustomMultiSelect;
