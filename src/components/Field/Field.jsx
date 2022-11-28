import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

import styles from "./Field.module.css";

const Field = ({ name, onNameChange, value, onValueChange, onDelete }) => {
  return (
    <div className={styles.field}>
      <Input placeholder="Ключ" value={name} onChange={onNameChange} />
      <Input placeholder="Значение" value={value} onChange={onValueChange} />
      <Button title="Удалить" onClick={onDelete} />
    </div>
  );
};

export default Field;
