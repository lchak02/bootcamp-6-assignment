import Input from "../Input";
import { useEffect, useState } from "react";
import { EDUCATION_HISTORY_INITIAL, EDUCATION_OPTIONS } from "../../constants";

export default function Education(props) {
  const [inputData, setInputData] = useState([EDUCATION_HISTORY_INITIAL]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    setInputData(props.educationData);
    setIsDataLoaded(true);
  }, []);

  useEffect(() => {
    for (const educationHistory in inputData) {
      for (const inputName in educationHistory) {
        if (!educationHistory[inputName].isValid) {
          props.setCanGoNext(false);
          return;
        }
      }
    }

    props.setCanGoNext(true);
  }, [inputData]);

  function onChange(orderNumber, inputName, inputValue, isValid) {
    let inputDataCopy = [...inputData];

    inputDataCopy[orderNumber] = {
      ...inputDataCopy[orderNumber],
      [inputName]: { value: inputValue, isValid: isValid },
    };

    setInputData(inputDataCopy);
    props.updateEducationData(inputDataCopy);
  }

  function handleAddEducation() {
    setInputData([...inputData, EDUCATION_HISTORY_INITIAL]);
  }

  function onSelect(event) {
    let value = event.target.value;
    let name = event.target.name;

    onChange(name, value, true);
  }

  function renderEducationHistory() {
    return inputData.map((data, index) => {
      return (
        <div key={index}>
          <Input
            onChange={onChange}
            name={"university"}
            label={"სასწავლებელი"}
            type={"text"}
            pattern="^[ა-ჰ]+$"
            orderNumber={index}
            value={data.university.value}
            isValid={data.university.isValid}
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
                {EDUCATION_OPTIONS.map((elem) => (
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
                pattern="^[ა-ჰ]+$"
                orderNumber={index}
                value={data.endeddate.value}
                isValid={data.endeddate.isValid}
              />
            </div>
          </div>
          <Input
            onChange={onChange}
            name={"edudescription"}
            label={"აღწერა"}
            type={"text"}
            pattern="^[ა-ჰ]+$"
            orderNumber={index}
            value={data.edudescription.value}
            isValid={data.edudescription.isValid}
          />
        </div>
      );
    });
  }

  return (
    <div>
      {isDataLoaded && renderEducationHistory()}
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
          type={"button"}
          onClick={handleAddEducation}
        >
          სხვა სასწავლებლების დამატება
        </button>
      </div>
    </div>
  );
}
