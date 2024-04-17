import React from "react";
import ReactSelect, { components } from "react-select";
import "./SingleSelect.css";
import SelectIndicator from "../icons/SelectIndicator";

const Styles = {
  container: (styles) => ({ ...styles, width: "100%" }),
  control: (styles) => ({
    ...styles,
    backgroundColor: "#fff",
    border: "none",
    boxShadow: "none",
    minHeight: "19px",
    gap: "4px",
    width: "fit-content",
  }),
  valueContainer: (styles) => ({ ...styles, padding: "0" }),
  singleValue: (styles) => ({
    ...styles,
    margin: "0",
    color: "var(--color-outer-space)",
    fontFamily: "PT Sans",
    fontSize: "15px",
    lineHeight: "19px",
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  indicatorsContainer: (styles) => ({
    ...styles,
    width: "11px",
    height: "10px",
    alignSelf: "auto",
  }),
  dropdownIndicator: (styles) => ({ ...styles, padding: "0" }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "var(--color-wild-sand)",
    borderRadius: "3px",
    border: "1px solid var(--color-athens-gray)",
    marginTop: "5px",
    marginBottom: "0",
    marginLeft: "-25px",
    width: "calc(100% + 25px)",
    boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.03)",
  }),
  input: (styles) => ({
    ...styles,
    margin: "0",
    padding: "0",
    color: "var(--color-outer-space)",
    fontFamily: "PT Sans",
    fontSize: "15px",
    lineHeight: "19px",
    height: "19px",
  }),
  option: (styles, { isFocused }) => {
    return {
      ...styles,
      backgroundColor: isFocused
        ? "var(--color-wild-sand)"
        : "var(--color-white)",
      color: "var(--color-outer-space)",
      width: "100%",
      padding: "0",
    };
  },
  menuList: (styles) => ({ ...styles, padding: "0" }),
};

const Indicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <SelectIndicator />
    </components.DropdownIndicator>
  );
};

const customOption = ({ children, isSelected, ...props }) => {
  return (
    <components.Option {...props}>
      <div
        className={`react-select-option ${
          isSelected ? "react-select-option_selected" : ""
        }`}
      >
        <div
          className={`react-select-option__content ${
            isSelected ? "option-selected" : ""
          }`}
        >
          <p className="react-select-option__p">{children}</p>
        </div>
      </div>
    </components.Option>
  );
};

const SingleSelect = ({ items, name, onChange, onBlur, value, error }) => {
  return (
    <div>
      <ReactSelect
        value={value}
        name={name}
        defaultValue={items[0]}
        components={{ DropdownIndicator: Indicator, Option: customOption }}
        label="Single select"
        options={items}
        styles={Styles}
        classNamePrefix="react-select"
        maxMenuHeight={140}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error ? <p className="errorMessage errorMessage-input">{error}</p> : ""}
    </div>
  );
};

export default SingleSelect;
