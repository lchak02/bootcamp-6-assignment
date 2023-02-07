import Input from "../Input";
import { useState, useEffect } from "react";

export default function Experience(props) {
  const [inputData, setInputData] = useState({
    position: {
      value: "",
      isValid: false,
    },
    employee: {
      value: "",
      isValid: false,
    },
    started_date: {
      value: "",
      isValid: false,
    },
    ended_date: {
      value: "",
      isValid: false,
    },
    description: {
      value: "",
      isValid: false,
    },
  });

  useEffect(() => {
    for (const key in inputData) {
      if (!inputData[key].isValid) {
        props.setAllValid(false);
        return;
      }
    }

    props.setAllValid(true);
  }, [inputData]);

  function onChange(inputName, inputValue, isValid) {
    setInputData({
      ...inputData,
      [inputName]: { value: inputValue, isValid: isValid },
    });

    props.getData(inputName, inputValue);
  }

  return (
    <>
      <Input
        onChange={onChange}
        name={"position"}
        label={"თანამდებობა"}
        type={"text"}
      />
      <Input
        onChange={onChange}
        name={"employee"}
        label={"დამსაქმებელი"}
        type={"text"}
      />
      <div style={{ display: "flex", justifyContent: "center", gap: "260px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            onChange={onChange}
            name={"started_date"}
            label={"დაწყების რიცხვი"}
            type={"date"}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            onChange={onChange}
            name={"ended_date"}
            label={"დამთავრების რიცხვი"}
            type={"date"}
          />
        </div>
      </div>
      <Input
        onChange={onChange}
        name={"description"}
        label={"აღწერა"}
        type={"text"}
      />
    </>
  );
}
