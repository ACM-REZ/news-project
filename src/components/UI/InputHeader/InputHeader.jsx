import React from "react";
import "./InputHeader.css";

const InputHeader = () => {
  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      window.open("https://www.google.com/", "_blank");
    }
  };
  return (
    <input
      type="text"
      className="header-search-form__input"
      placeholder="Поиск"
      onKeyPress={handleEnterPress}
    />
  );
};

export default InputHeader;
