import Input from "../Input";
import { useState, useEffect } from "react";

function getWorkHistoryObject(index) {
  return {
    [`position_${index}`]: {
      value: "",
      isValid: false,
    },
    [`employee_${index}`]: {
      value: "",
      isValid: false,
    },
    [`started_date_${index}`]: {
      value: "",
      isValid: false,
    },
    [`ended_date_${index}`]: {
      value: "",
      isValid: false,
    },
    [`description_${index}`]: {
      value: "",
      isValid: false,
    },
  };
}

export default function Experience(props) {
  const [workHistoryCount, setWorkHistoryCount] = useState(1);
  const [inputData, setInputData] = useState(null);

  useEffect(() => {
    setInputData(getWorkHistoryObject(0));
  }, []);

  useEffect(() => {
    console.log(inputData);

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

  function handleAddHistory() {
    let newCount = workHistoryCount + 1;
    let newInputData = getWorkHistoryObject(newCount);

    setWorkHistoryCount(newCount);
    setInputData({ ...inputData, newInputData });
  }

  function renderWorkHistory() {
    return Array.from({ length: workHistoryCount }, (_, index) => {
      return (
        <div key={index}>
          <Input
            onChange={onChange}
            name={`position_${index}`}
            label={"თანამდებობა"}
            type={"text"}
            pattern="^[a-z]+$"
          />
          <Input
            onChange={onChange}
            name={`employee_${index}`}
            label={"დამსაქმებელი"}
            type={"text"}
            pattern="^[a-z]+$"
          />
          <div
            style={{ display: "flex", justifyContent: "center", gap: "260px" }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Input
                onChange={onChange}
                name={`started_date_${index}`}
                label={"დაწყების რიცხვი"}
                type={"date"}
                pattern="^[a-z]+$"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Input
                onChange={onChange}
                name={`ended_date_${index}`}
                label={"დამთავრების რიცხვი"}
                type={"date"}
                pattern="^[a-z]+$"
              />
            </div>
          </div>
          <Input
            onChange={onChange}
            name={`description_${index}`}
            label={"აღწერა"}
            type={"text"}
            pattern="^[a-z]+$"
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
