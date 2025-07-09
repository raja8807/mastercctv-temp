import React from "react";
import styles from "./custom_action_button.module.scss";
import { Spinner } from "react-bootstrap";

const CustomActionButton = ({
  children,
  disabled,
  isLoading,
  variant = 1,
  onClick = () => {},
  btnType = "icon",
}) => {
  return (
    <button
      className={`${styles.CustomIconButton} 
  
  ${styles[`v${variant}`]}
  ${styles[`btnType_${btnType}`]}
  `}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? <Spinner className={styles.spinner} /> : children}
    </button>
  );
};

export default CustomActionButton;
