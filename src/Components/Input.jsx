import { useEffect, useState } from "react";

const InputStyle = {
  height: "38px",
  borderRadius: "4px",
  background: "#FFFFFF",
  fontSize: "17.3px",
  color: "black",
};

export default function Input(props) {
  let [isInputValid, setIsInputValid] = useState(null);

  function getClassName() {
    if (isInputValid === null) return "input";

    return isInputValid ? "input valid" : "input invalid";
  }

  function matchesPattern(inputValue, inputPattern) {
    return new RegExp(inputPattern).test(inputValue);
  }

  function validateDate(inputName, inputValue, isValid) {
    if (props.orderNumber >= 0) {
      props.onChange(props.orderNumber, inputName, inputValue, isValid);
    } else {
      props.onChange(inputName, inputValue, isValid);
    }

    setIsInputValid(isValid);
  }

  function validateText(inputName, inputValue) {
    let validPattern = true;
    if (props.pattern) {
      validPattern = matchesPattern(inputValue, props.pattern);
    }

    let validLength = true;
    if (props.minLength) {
      validLength = inputValue.length >= props.minLength;
    }

    let isValid = validPattern && validLength;
    if (props.orderNumber >= 0) {
      props.onChange(props.orderNumber, inputName, inputValue, isValid);
    } else {
      props.onChange(inputName, inputValue, isValid);
    }

    setIsInputValid(isValid);
  }

  function onChange(event) {
    let target = event.target;

    let inputName = target.name;
    let inputValue = target.value; // .replace(/\s/g, "")

    switch (target.type) {
      case "date":
        validateDate(inputName, inputValue, true);
        break;
      case "text":
        validateText(inputName, inputValue);
        break;
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor={props.name} style={{ textAlign: "left", color: "black" }}>
        {props.label}
      </label>
      <input
        className={getClassName()}
        onChange={onChange}
        name={props.name}
        style={InputStyle}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
}
