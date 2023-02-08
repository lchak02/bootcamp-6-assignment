import Input from "../Input";
import { useEffect, useState } from "react";

const educationOptions = [
  "საშუალო სკოლის დიპლომი",
  "ზოგადსაგანმანათლებლო დიპლომი",
  "მაგისტრი",
  "ბაკალავრი",
  "დოქტორი",
  "ასოცირებული ხარისხი",
  "სტუდენტი",
  "კოლეჯი(ხარისხის გარეშე)",
  "სხვა",
];

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

  function onSelect(event) {
    let value = event.target.value;
    let name = event.target.name;

    onChange(name, value, true);
  }

  return (
    <div>
      <>
        <Input
          onChange={onChange}
          name={"university"}
          label={"სასწავლებელი"}
          type={"text"}
        />
        <div
          style={{ display: "flex", justifyContent: "center", gap: "150px" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <select
              name={"degree"}
              style={{
                width: "350px",
                height: "38px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "5px",
                padding: "5px",
                fontSize: "16px",
              }}
              onChange={onSelect}
            >
              <option value="choose" disabled selected hidden>
                აირჩიეთ ხარისხი
              </option>
              {educationOptions.map((elem) => (
                <option value={elem} key={elem}>
                  {elem}
                </option>
              ))}
            </select>
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
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "100px 0px",
        }}
      >
        <button
          style={{
            width: "247px",
            height: "38px",
            background: "#62A1EB",
            borderRadius: "4px",
            border: "none",
            type: "button",
          }}
        >
          სხვა სასწავლებლების დამატება
        </button>
      </div>
    </div>
  );
}
