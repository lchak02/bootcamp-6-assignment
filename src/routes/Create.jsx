import { useState } from "react";
import SectionRight from "../Components/SectionRight";
import SectionLeft from "../Components/SectionLeft";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [inputData, setInputData] = useState({});
  const navigate = useNavigate();

  const getData = (inputName, inputValue) => {
    setInputData({ ...inputData, [inputName]: inputValue });
  };

  function redirectSuccess() {
    navigate("/success", { state: inputData });
  }

  return (
    <div style={{ display: "flex", width: "100%", gap: "200px" }}>
      <SectionLeft onChange={getData} redirectSuccess={redirectSuccess} />
      <SectionRight inputData={inputData} />
    </div>
  );
}
