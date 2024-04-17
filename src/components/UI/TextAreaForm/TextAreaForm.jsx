import React from "react";
import "./TextAreaForm.css";

const TextAreaForm = ({
  error,
  value,
  onChange,
  onBlur,
  name,
}) => {

  const handleBlur = (e) => {
    onBlur(e);
  };

  return (
    <div className="textarea-container">
      <textarea
        className="form-textarea"
        placeholder="..."
        value={value}
        onChange={onChange}
        name={name}
        onBlur={handleBlur}
      />
      {error ? <div className="errorMessage">{error}</div> : ""}
    </div>
  );
};

export default TextAreaForm;
