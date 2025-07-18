import React from "react";
import styles from "./cuatom_input.module.scss";
import ControlLabel from "../contol_label/control_label";

const CustomInput = ({
  placeHolder,
  value,
  variant = 1,
  type = "text",
  required,
  onChange = () => {},
  error,
  label,
  rightElement,
  noPadding,
  ...props
}) => {
  return (
    <div>
      {label && <ControlLabel label={label} />}
      <div
        className={`${styles.CustomInput} ${styles[`v${variant}`]} ${
          error ? styles.error : ""
        }
        ${noPadding ? styles.noPadding : ""}
        `}
      >
        <input
          onChange={(e) => {
            onChange(e, e.target.value);
          }}
          value={value}
          placeholder={placeHolder || label}
          type={type}
          required={required}
          {...props}
        />
        {rightElement && rightElement}
      </div>
    </div>
  );
};

export default CustomInput;
