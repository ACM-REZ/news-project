import React from "react";
import "./InputForm.css";
import classNames from "classnames";
import ReactInputMask from "react-input-mask";

const InputForm = ({
  placeholder,
  disabled,
  type,
  name,
  onChange,
  onBlur,
  error,
  mask,
  value,
}) => {
  const classNamesInput = classNames({
    "profile-forms-item__input": true,
    "profile-forms-item__input_disabled": disabled,
    "profile-forms-item__input_error": error,
  });
  const defaultMask = mask ? "+7 999 999-99-99" : "";
  return (
    <div className={`input-container ${error ? "input-container-error" : ""}`}>
      {defaultMask ? (
        <ReactInputMask
          mask={defaultMask}
          maskPlaceholder={null}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          placeholder={placeholder ? placeholder : "..."}
          disabled={disabled}
          className={classNamesInput}
        />
      ) : (
        <input
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          className={classNamesInput}
          name={name}
          value={value}
          type={type}
          disabled={disabled}
        />
      )}
      {error ? <p className="errorMessage errorMessage-input">{error}</p> : ""}
    </div>
  );
};

export default InputForm;
