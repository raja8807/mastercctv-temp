import React from "react";
import styles from "./custom_select.module.scss";
import ControlLabel from "../../contol_label/control_label";

const CustomSelect = ({
  variant = 1,
  label,
  options = [],
  value,
  onChange = () => {},
  required,
  placeholder,
  isObject = false,
  getLabel = (o) => o.label,
  getValue = (o) => o.value,
}) => {
  const handleChange = (e) => {
    const selected = options.find((opt) => getValue(opt) === e.target.value);
    onChange(selected);
  };

  return (
    <div className={`${styles.CustomSelect} ${styles[`v${variant}`]}`}>
      {label && <ControlLabel label={label} />}

      {isObject ? (
        <select
          value={getValue(value) || ""}
          onChange={handleChange}
          required={required}
          defaultValue={getValue(value) || ""}
          placeholder={placeholder}
        >
          <option value="">Select...</option>
          {options.map((option) => (
            <option key={getValue(option)} value={getValue(option)}>
              {getLabel(option)}
            </option>
          ))}
        </select>
      ) : (
        <select
          onChange={(e) => {
            onChange(e, e.target.value);
          }}
          value={value}
          required={required}
          defaultValue={value}
          placeholder={placeholder}
        >
          {/* {!required && <option value="">{placeholder}</option>} */}
          <option value="" disabled selected>
            {placeholder}
          </option>

          {options.map((o, i) => {
            return (
              <option key={`op_${i}`} value={o}>
                {o}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

export default CustomSelect;
