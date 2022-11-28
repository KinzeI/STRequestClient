import React from "react";
import ReactJson from "react-json-view";

import Input from "../Input/Input";

const BodySection = ({ value, onEdit }) => {
  return (
    <div>
      {/* <Input
        placeholder="Введите тело запроса"
        rows={15}
        value={value}
        onChange={onChange}
      /> */}
      <ReactJson src={value} onEdit={onEdit} onAdd={onEdit} onDelete={onEdit} />
    </div>
  );
};

export default BodySection;
