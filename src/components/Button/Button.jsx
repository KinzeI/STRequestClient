import React from "react";

import styles from "./Button.module.css";

const Button = ({ title, type = "button", onClick = () => {} }) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {title}
    </button>
  );
};

export default Button;
