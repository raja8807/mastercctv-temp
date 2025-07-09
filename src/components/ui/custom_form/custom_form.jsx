import React from "react";
import styles from "./custom_form.module.scss";

const CustomForm = ({  children, onSubmit }) => {
  return (
    <form
      className={styles.CustomForm}
      onSubmit={async (e) => {
        e.preventDefault();
        if (onSubmit) {
          try {
            await onSubmit(e);
          } catch (error) {
            console.log(error);
          }
        }
      }}
    >
   
      {children}
    </form>
  );
};

export default CustomForm;
