import Input from "../Input";
import { useState, useEffect } from "react";
import { WORK_HISTORY_INITIAL } from "../../constants";

export default function Experience(props) {
  const [inputData, setInputData] = useState([WORK_HISTORY_INITIAL]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    if (!isDataLoaded) {
      setInputData(props.experienceData);
      setIsDataLoaded(!isDataLoaded);
    } else {
      let newInputData = [...inputData];

      newInputData.forEach(function (value, index) {
        Object.keys(value).forEach(function (key) {
          if (value[key].isValid == null) {
            value[key].isValid = false;
          }
        });
      });

      setInputData(newInputData);
    }
  }, [props.triggerValidation]);

  useEffect(() => {
    let goNext = true;

    inputData.forEach(function (value, index) {
      Object.keys(value).forEach(function (key) {
        if (!value[key].isValid) {
          goNext = false;
        }
      });
    });

    props.setCanGoNext(goNext);
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
    return inputData.map((data, index) => {
      return (
        <div key={index}>
          <Input
            onChange={onChange}
            name={"position"}
            label={"თანამდებობა"}
            type={"text"}
            pattern="[a-zA-Z][a-zA-Z ]+"
            orderNumber={index}
            value={data.position.value}
            isValid={data.position.isValid}
            hintMessage={"მინიმუმ 2 სიმბოლო"}
            placeholder={"დეველოპერი, დიზაინერი, ა.შ."}
          />
          <Input
            onChange={onChange}
            name={"employee"}
            label={"დამსაქმებელი"}
            type={"text"}
            pattern="[a-zA-Z][a-zA-Z ]+"
            orderNumber={index}
            value={data.employee.value}
            isValid={data.employee.isValid}
            hintMessage={"მინიმუმ 2 სიმბოლო"}
            placeholder={"დამსაქმებელი"}
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
                value={data.started_date.value}
                isValid={data.started_date.isValid}
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
                value={data.ended_date.value}
                isValid={data.ended_date.isValid}
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
            value={data.description.value}
            isValid={data.description.isValid}
            placeholder={"როლი თანამდებობაზე და ზოგადი აღწერა"}
          />
        </div>
      );
    });
  }

  return (
    <div>
      {isDataLoaded && renderWorkHistory()}
      <div style={{ display: "flex", padding: "50px 0px 30px 0px" }}>
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
    </div>
  );
}
