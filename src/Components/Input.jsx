import { useState } from "react";

export default function Input(props) {
  let [isValid, setIsValid] = useState(null);

  function getClassName() {
    if (isValid === null) return "input";

    return isValid ? "input valid" : "input invalid";
  }

  function matchesPattern(inputValue, inputPattern) {
    return new RegExp(inputPattern).test(inputValue);
  }

  function onChange(event) {
    let target = event.target;

    let inputName = target.name;
    let inputValue = target.value;
    let inputType = target.type;
    let inputPattern = target.pattern;

    if (inputType === "date") {
      if (props.orderNumber >= 0) {
        props.onChange(props.orderNumber, inputName, inputValue, true);
      } else {
        props.onChange(inputName, inputValue, true);
      }
      setIsValid(true);
      return;
    }

    let validPattern = true;
    if (inputPattern) {
      validPattern = matchesPattern(inputValue, inputPattern);
    }

    let isValid = inputValue.length > 2 && validPattern;
    if (props.orderNumber >= 0) {
      props.onChange(props.orderNumber, inputName, inputValue, isValid);
    } else {
      props.onChange(inputName, inputValue, isValid);
    }

    setIsValid(isValid);
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
        style={{
          height: "38px",
          borderRadius: "4px",
          background: "#FFFFFF",
          fontSize: "17.3px",
          color: "black",
        }}
        type={props.type}
        pattern={props.pattern}
        placeholder={props.placeholder}
      />
    </div>
  );
}
