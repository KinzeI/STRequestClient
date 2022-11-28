import React from "react";
import Button from "../Button/Button";
import Field from "../Field/Field";

import styles from "./FieldsSection.module.css";

const FieldsSection = ({ onAdd, onChange, onDelete, currentParams }) => {
  return (
    <div className={styles.section}>
      {currentParams.map((param, index) => (
        <Field
          key={index}
          onDelete={() => onDelete(index)}
          name={param.key}
          value={param.value}
          onNameChange={(e) =>
            onChange(index, { ...param, key: e.target.value })
          }
          onValueChange={(e) =>
            onChange(index, { ...param, value: e.target.value })
          }
        />
      ))}
      <Button title="Добавить" onClick={onAdd} />
    </div>
  );
};

export default FieldsSection;
