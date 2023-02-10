import Input from "../Input";
import { useState, useEffect } from "react";
import { WORK_HISTORY_INITIAL } from "../../constants";

export default function Experience(props) {
  const [inputData, setInputData] = useState([WORK_HISTORY_INITIAL]);

  useEffect(() => {
    for (const workHistory in inputData) {
      for (const inputName in workHistory) {
        if (!workHistory[inputName].isValid) {
          props.setAllValid(false);
          return;
        }
      }
    }

    props.setAllValid(true);
  }, [inputData]);

  function onChange(orderNumber, inputName, inputValue, isValid) {
    let inputDataCopy = [...inputData];

    inputDataCopy[orderNumber] = {
      ...inputDataCopy[orderNumber],
      [inputName]: { value: inputValue, isValid: isValid },
    };

    setInputData(inputDataCopy);

    props.updateExperienceData(inputDataCopy);
  }

  function handleAddHistory() {
    setInputData([...inputData, WORK_HISTORY_INITIAL]);
  }

  function renderWorkHistory() {
    return inputData.map((elem, index) => {
      return (
        <div key={index}>
          <Input
            onChange={onChange}
            name={"position"}
            label={"თანამდებობა"}
            type={"text"}
            pattern="[a-zA-Z][a-zA-Z ]+"
            orderNumber={index}
          />
          <Input
            onChange={onChange}
            name={"employee"}
            label={"დამსაქმებელი"}
            type={"text"}
            pattern="[a-zA-Z][a-zA-Z ]+"
            orderNumber={index}
          />
          <div
            style={{ display: "flex", justifyContent: "center", gap: "260px" }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Input
                onChange={onChange}
                name={"started_date"}
                label={"დაწყების რიცხვი"}
                type={"date"}
                pattern="[a-zA-Z][a-zA-Z ]+"
                orderNumber={index}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Input
                onChange={onChange}
                name={"ended_date"}
                label={"დამთავრების რიცხვი"}
                type={"date"}
                pattern="[a-zA-Z][a-zA-Z ]+"
                orderNumber={index}
              />
            </div>
          </div>
          <Input
            onChange={onChange}
            name={"description"}
            label={"აღწერა"}
            type={"text"}
            pattern="[a-zA-Z][a-zA-Z ]+"
            orderNumber={index}
          />
        </div>
      );
    });
  }

  return (
    <div>
      {renderWorkHistory()}
      <button
        style={{
          width: "247px",
          height: "38px",
          background: "#62A1EB",
          borderRadius: "4px",
          border: "none",
          type: "button",
        }}
        type="button"
        onClick={handleAddHistory}
      >
        მეტი გამოცდილების დამატება
      </button>
    </div>
  );
}
