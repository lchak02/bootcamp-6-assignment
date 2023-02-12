import { useState, useEffect } from "react";
import SectionRight from "../components/SectionRight";
import SectionLeft from "../components/SectionLeft";
import {
  GENERAL_INFO_INITIAL,
  WORK_HISTORY_INITIAL,
  EDUCATION_HISTORY_INITIAL,
} from "../constants";

const CreateStyle = { display: "flex", width: "100%", gap: "1px" };

export default function Create() {
  const [isStorageLoaded, setIsStorageLoaded] = useState(false);
  const [stageData, setStageData] = useState(1);
  const [generalData, setGeneralData] = useState(GENERAL_INFO_INITIAL);
  const [experienceData, setExperienceData] = useState([WORK_HISTORY_INITIAL]);
  const [educationData, setEducationData] = useState([
    EDUCATION_HISTORY_INITIAL,
  ]);

  useEffect(() => {
    let storageGeneralData = localStorage.getItem("generalData");
    let storageExperienceData = localStorage.getItem("experienceData");
    let storageEducationData = localStorage.getItem("educationData");
    let stageData = localStorage.getItem("stageData");

    if (storageGeneralData) {
      setGeneralData(JSON.parse(storageGeneralData));
    }

    if (storageExperienceData) {
      setExperienceData(JSON.parse(storageExperienceData));
    }

    if (storageEducationData) {
      setEducationData(JSON.parse(storageEducationData));
    }

    if (stageData) {
      setStageData(JSON.parse(stageData));
    }

    setIsStorageLoaded(true);
  }, []);

  const updateGeneralData = (updatedData) => {
    setGeneralData({ ...updatedData });
    localStorage.setItem("generalData", JSON.stringify(updatedData));
  };

  const updateExperienceData = (updatedData) => {
    setExperienceData([...updatedData]);
    localStorage.setItem("experienceData", JSON.stringify(updatedData));
  };

  const updateEducationData = (updatedData) => {
    setEducationData([...updatedData]);
    localStorage.setItem("educationData", JSON.stringify(updatedData));
  };

  return (
    <div style={CreateStyle}>
      {isStorageLoaded && (
        <>
          <SectionLeft
            stageData={stageData}
            generalData={generalData}
            experienceData={experienceData}
            educationData={educationData}
            onGeneralChange={updateGeneralData}
            onExperienceChange={updateExperienceData}
            onEducationChange={updateEducationData}
          />
          <SectionRight
            generalData={generalData}
            experienceData={experienceData}
            educationData={educationData}
          />
        </>
      )}
    </div>
  );
}
