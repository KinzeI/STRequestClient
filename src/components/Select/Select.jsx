import React from "react";

const Select = ({ options = [], value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
