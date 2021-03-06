import React from "react";
import PropTypes from "prop-types";
import { FieldContainer, Select } from "./fieldStyles";

function SelectField(props) {
  return (
    <FieldContainer>
      <div className="label">{props.label}</div>
      <Select
        name={props.name}
        defaultValue={props.value}
        onBlur={props.handleBlur}
        onChange={props.onChange}
      >
        <option value={""}>Please Select</option>
        {props.options.map((opt, index) => {
          return (
            <option key={index} value={opt}>
              {opt}
            </option>
          );
        })}
      </Select>
      {props.error && props.touched[props.name] && (
        <div className="error">{props.error}</div>
      )}
    </FieldContainer>
  );
}

SelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  options: PropTypes.array,
  error: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

SelectField.defaultValue = {
  options: [],
};

export default SelectField;
