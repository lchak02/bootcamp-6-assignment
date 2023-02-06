import Input from "../Components/Input";
import { useState } from "react";
import SectionRight from "../Components/SectionRight";
import SectionLeft from "../Components/SectionLeft";

export default function Create() {
  const [inputData, setInputData] = useState({});

  const getData = (event) => {
    let target = event.target;
    let inputName = target.name;

    setInputData({ ...inputData, [inputName]: target.value });
  };
  return (
    <div style={{ display: "flex", width: "100%", gap: "200px" }}>
      <SectionLeft onChange={getData} />
      <SectionRight inputData={inputData} />
    </div>
  );
}
