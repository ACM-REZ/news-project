import React from "react";
import "./CheckBoxForm.css";

const CheckBoxForm = ({ label, disabled, value, onChange }) => {
  return (
    <div className="checkbox-wrapper" onClick={onChange}>
      <input
        type="checkbox"
        className={value ? "checked " : ""}
        checked={value}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  );
};

export default CheckBoxForm;
