import React from "react";

import styles from "./Input.module.css";

const Input = ({
  value,
  onChange,
  type = "text",
  placeholder = "",
  rows = 1,
}) => {
  return (
    <>
      {rows === 1 ? (
        <input
          className={styles.input}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
        ></textarea>
      )}
    </>
  );
};

export default Input;
