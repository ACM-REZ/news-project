import React from "react";
import "./RadioForm.css"

const RadioForm = ({ disabled, options, value, onChange }) => {
  return (
    <>
      {options.map((option) => (
        <div
          key={option}
          className="radio-wrapper"
          onClick={() => onChange(option)}
        >
          <input
            id={option}
            type="radio"
            checked={option === value}
            disabled={disabled}
            onChange={() => onChange(option)}
          />
          <label htmlFor={option} >{option}</label>
        </div>
      ))}
    </>
  );
}

export default RadioForm;
