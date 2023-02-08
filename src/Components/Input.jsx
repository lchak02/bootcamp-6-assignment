import { useState } from "react";

export default function Input(props) {
  let [isValid, setIsValid] = useState(null);

  const isGeorgianText = (text) => {
    let geoAlph = "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ";
    for (let char of text) {
      if (!geoAlph.includes(char)) {
        return false;
      }
    }
    return true;
  };

  function getBorderColor() {
    if (isValid === null) return "black";

    return isValid ? "green" : "red";
  }

  function onChange(event) {
    let target = event.target;
    let inputName = target.name;
    let inputValue = target.value;
    let inputType = target.type;

    if (inputType === "date") {
      let isValid = true;
      props.onChange(inputName, inputValue, isValid);
      setIsValid(isValid);
    } else {
      let isValid = inputValue.length > 2 && isGeorgianText(inputValue);
      props.onChange(inputName, inputValue, isValid);
      setIsValid(isValid);
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor={props.name} style={{ textAlign: "left", color: "black" }}>
        {props.label}
      </label>
      <input
        onChange={onChange}
        name={props.name}
        style={{
          height: "38px",
          borderRadius: "4px",
          background: "#FFFFFF",
          color: "black",
          fontSize: "17.3px",
          border: "2px solid #BCBCBC",
          borderColor: getBorderColor(),
        }}
        type={props.type}
      />
    </div>
  );
}
