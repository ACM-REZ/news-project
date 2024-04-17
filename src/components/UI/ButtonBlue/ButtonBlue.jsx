import React from "react";
import "./ButtonBlue.css";

const ButtonBlue = ({ children, onClick, type, className }) => {
  return (
    <button type={type} onClick={onClick} className={`ButtonBlue ${className}`}>
      {children}
    </button>
  );
};

export default ButtonBlue;
