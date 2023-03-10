import { useEffect, useState } from "react";
import Experience from "./forms/Experience";
import General from "./forms/General";
import Education from "./forms/Education";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import cleanUpLocalStorage from "../utils";

export default function SectionLeft(props) {
  const navigate = useNavigate();
  const [stage, setStage] = useState(1);
  const [canGoNext, setCanGoNext] = useState(false);
  const [triggerValidation, setTriggerValidation] = useState(false);

  useEffect(() => {
    setStage(props.stageData);
  }, []);

  function previousStage() {
    if (stage === 1) return;

    let newStage = stage - 1;

    localStorage.setItem("stageData", JSON.stringify(newStage));
    setStage(newStage);
    props.onStageChange(newStage);
  }

  function renderForm() {
    switch (stage) {
      case 1:
        return (
          <General
            triggerValidation={triggerValidation}
            generalData={props.generalData}
            setCanGoNext={setCanGoNext}
            updateGeneralData={props.onGeneralChange}
          />
        );
      case 2:
        return (
          <Experience
            triggerValidation={triggerValidation}
            experienceData={props.experienceData}
            setCanGoNext={setCanGoNext}
            updateExperienceData={props.onExperienceChange}
          />
        );
      case 3:
        return (
          <Education
            triggerValidation={triggerValidation}
            educationData={props.educationData}
            setCanGoNext={setCanGoNext}
            updateEducationData={props.onEducationChange}
          />
        );
    }
  }

  function handleGoBack() {
    cleanUpLocalStorage();
    navigate("/");
  }

  function handleOnSubmit(event) {
    event.preventDefault();

    if (!canGoNext) {
      setTriggerValidation(true);
      return;
    }

    if (stage === 3) {
      props.goToSuccess();
      return;
    }

    let newStage = stage + 1;

    localStorage.setItem("stageData", JSON.stringify(newStage));
    setStage(newStage);
    props.onStageChange(newStage);
  }

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        padding: "20px 70px 10px 70px",
        height: "100%",
        width: "55%",
        position: "relative",
      }}
    >
      <div>
        <button
          style={{
            position: "absolute",
            width: "40px",
            height: "40px",
            left: "15px",
            top: "45px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "50%",
            border: "none",
          }}
          type="button"
          onClick={handleGoBack}
        >
          {"<"}
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "black",
          borderBottom: "2px solid black",
        }}
      >
        <Header stage={stage} />
      </div>
      <form
        onSubmit={handleOnSubmit}
        style={{
          width: "700px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {renderForm()}
        <div
          style={{
            display: "flex",
            justifyContent: stage > 1 ? "space-between" : "flex-end",
          }}
        >
          {stage > 1 && (
            <button
              style={{
                backgroundColor: "#6B40E3",
                width: "151px",
                height: "40px",
                borderRadius: "4px",
              }}
              type="button"
              onClick={previousStage}
            >
              ????????????
            </button>
          )}
          <button
            style={{
              backgroundColor: "#6B40E3",
              width: "151px",
              height: "48px",
              borderRadius: "4px",
            }}
            type="submit"
          >
            ?????????????????????
          </button>
        </div>
      </form>
    </div>
  );
}
