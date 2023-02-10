import { useState } from "react";
import SectionRight from "../components/SectionRight";
import SectionLeft from "../components/SectionLeft";
import { useNavigate } from "react-router-dom";

const CreateStyle = { display: "flex", width: "100%", gap: "1px" };

export default function Create() {
  const [inputData, setInputData] = useState({});
  const [experienceData, setExperienceData] = useState([]);
  const [educationData, setEducationData] = useState([]);

  const navigate = useNavigate();

  const getData = (inputName, inputValue) => {
    setInputData({ ...inputData, [inputName]: inputValue });
  };

  const updateExperienceData = (data) => {
    setExperienceData([...data]);
  };

  const updateEducationData = (data) => {
    setEducationData([...data]);
  };

  function redirectSuccess() {
    navigate("/success", { state: inputData });
  }

  return (
    <div style={CreateStyle}>
      <SectionLeft
        onChange={getData}
        onExperienceChange={updateExperienceData}
        onEducationChange={updateEducationData}
        redirectSuccess={redirectSuccess}
      />
      <SectionRight
        inputData={inputData}
        experienceData={experienceData}
        educationData={educationData}
      />
    </div>
  );
}
