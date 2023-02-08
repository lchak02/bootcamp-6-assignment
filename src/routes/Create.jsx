import { useState } from "react";
import SectionRight from "../Components/SectionRight";
import SectionLeft from "../Components/SectionLeft";
import { useNavigate } from "react-router-dom";

const CreateStyle = { display: "flex", width: "100%", gap: "1px" };

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
    <div style={CreateStyle}>
      <SectionLeft onChange={getData} redirectSuccess={redirectSuccess} />
      <SectionRight inputData={inputData} />
    </div>
  );
}
