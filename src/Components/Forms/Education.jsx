import Input from "../Input";
import { useEffect, useState } from "react";

export default function Education(props) {
  const [inputData, setInputData] = useState({
    university: {
      value: "",
      isValid: false,
    },
    degree: {
      value: "",
      isValid: false,
    },
    endeddate: {
      value: "",
      isValid: false,
    },
    edudescription: {
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
        name={"university"}
        label={"სასწავლებელი"}
        type={"text"}
      />
      <div style={{ display: "flex", justifyContent: "center", gap: "260px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            onChange={onChange}
            name={"degree"}
            label={"ხარისხი"}
            type={"text"}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            onChange={onChange}
            name={"endeddate"}
            label={"დამთავრების რიცხვი"}
            type={"date"}
          />
        </div>
      </div>
      <Input
        onChange={onChange}
        name={"edudescription"}
        label={"აღწერა"}
        type={"text"}
      />
    </>
  );
}
