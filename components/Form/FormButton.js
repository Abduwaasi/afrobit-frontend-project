import React from "react";

import styles from "../../styles/components/form/FormButton.module.scss";
const FormButton = ({ text, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {text}
    </button>
  );
};

export default FormButton;
