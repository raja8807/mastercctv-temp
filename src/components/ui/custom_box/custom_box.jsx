import React from "react";
import styles from "./custom_box.module.scss";

const CustomBox = ({ children, fade }) => {
  return (
    <div
      className={styles.CustomBox}
      style={{
        opacity: fade ? 0.7 : 1,
      }}
    >
      {children}
    </div>
  );
};

export default CustomBox;
