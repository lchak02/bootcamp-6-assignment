import { useState, useRef, useEffect } from "react";

const InputStyle = {
  height: "38px",
  borderRadius: "4px",
  background: "#FFFFFF",
  fontSize: "17.3px",
  color: "black",
};

export default function Input(props) {
  const uploadFileRef = useRef(null);

  let [isInputValid, setIsInputValid] = useState(null);

  useEffect(() => {
    setIsInputValid(props.isValid);
  }, [props.isValid]);

  function getClassName() {
    const base = "input-wrapper";
    if (isInputValid === null) return base;

    return isInputValid ? `${base} valid` : `${base} invalid`;
  }

  function matchesPattern(inputValue, inputPattern) {
    return new RegExp(inputPattern).test(inputValue);
  }

  function validateOther(inputName, inputValue, isValid) {
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
    let inputValue = target.value;

    switch (target.type) {
      case "date":
        validateOther(inputName, inputValue, true);
        break;
      case "text":
        validateText(inputName, inputValue);
        break;
      case "file":
        convertToBase64(inputName, target.files[0], true);
        break;
    }
  }

  const convertToBase64 = (inputName, inputValue, isValid) => {
    const reader = new FileReader();
    reader.readAsDataURL(inputValue);

    reader.onload = () => {
      validateOther(inputName, reader.result, isValid);
    };
  };

  return (
    <>
      {props.type === "file" ? (
        <div
          style={{
            display: "flex",
            gap: "15px",
            padding: "30px 0px 30px 0px",
          }}
        >
          <label
            htmlFor={props.name}
            style={{ textAlign: "left", color: "black" }}
          >
            {props.label[0]}
          </label>
          <button
            style={{
              width: "90px",
              background: "#0E80BF",
              borderRadius: "4px",
              border: "none",
            }}
            onClick={() => uploadFileRef.current.click()}
            type="button"
          >
            {props.label[1]}
          </button>
          <input
            name={props.name}
            type={props.type}
            ref={uploadFileRef}
            onChange={onChange}
            style={{ display: "none" }}
          />
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label
            htmlFor={props.name}
            style={{ textAlign: "left", color: "black" }}
          >
            {props.label}
          </label>
          <div className={getClassName()}>
            <input
              onChange={onChange}
              name={props.name}
              style={InputStyle}
              type={props.type}
              placeholder={props.placeholder}
              value={props.value}
            />

            <div className="icon"></div>
          </div>
          <p
            style={{
              display: "flex",
              fontSize: "12px",
              color: "black",
              opacity: "0.5",
            }}
          >
            {props.hintMessage}
          </p>
        </div>
      )}
    </>
  );
}
