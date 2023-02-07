import { useState } from "react";
import Input from "../Input";

export default function General(props) {
  const [inputData, setInputData] = useState({
    name: {
      value: "",
      isValid: false,
    },
    surname: {
      value: "",
      isValid: false,
    },
    aboutus: {
      value: "",
      isValid: false,
    },
    email: {
      value: "",
      isValid: false,
    },
    number: {
      value: "",
      isValid: false,
    },
  });

  function onChange(inputName, inputValue, isValid) {
    setInputData({
      ...inputData,
      [inputName]: { value: inputValue, isValid, isValid },
    });

    let isFormValid = true;

    for (const key in inputData) {
      if (!inputData[key].isValid) {
        isFormValid = false;
      }
    }

    props.setAllValid(isFormValid);
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "260px" }}>
        <Input onChange={onChange} name={"name"} label={"სახელი"} />
        <Input onChange={onChange} name={"surname"} label={"გვარი"} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <Input
          onChange={onChange}
          name={"aboutus"}
          label={"ჩემ შესახებ(არასავალდებულო)"}
        />

        <Input onChange={onChange} name={"email"} label={"ელ.ფოსტა"} />

        <Input onChange={onChange} name={"number"} label={"მობილურის ნომერი"} />
      </div>
    </>
  );
}
