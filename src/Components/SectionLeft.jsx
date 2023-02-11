import { useState } from "react";
import Experience from "./forms/Experience";
import General from "./forms/General";
import Education from "./forms/Education";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function SectionLeft(props) {
  const navigate = useNavigate();
  const [stage, setStage] = useState(1);
  const [allValid, setAllValid] = useState(false);

  function previousStage() {
    if (stage === 1) return;
    setStage(stage - 1);
  }

  function renderForm() {
    switch (stage) {
      case 1:
        return (
          <General
            generalData={props.generalData}
            setAllValid={setAllValid}
            updateGeneralData={props.onGeneralChange}
          />
        );
      case 2:
        return (
          <Experience
            experienceData={props.experienceData}
            setAllValid={setAllValid}
            updateExperienceData={props.onExperienceChange}
          />
        );
      case 3:
        return (
          <Education
            educationData={props.educationData}
            setAllValid={setAllValid}
            updateEducationData={props.onEducationChange}
          />
        );
    }
  }

  function handleGoBack() {
    localStorage.removeItem("generalData");
    localStorage.removeItem("experienceData");
    localStorage.removeItem("educationData");

    navigate("/");
  }

  function handleOnSubmit(event) {
    event.preventDefault();

    if (!allValid) {
      alert("Forma ar aris validuri");
      return;
    }

    if (stage === 3) {
      navigate("/success");
    }

    setStage(stage + 1);
  }

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        padding: "20px 70px 170px 70px",
        height: "100%",
        width: "75%",
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
          gap: "50px",
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
                height: "48px",
                borderRadius: "4px",
              }}
              type="button"
              onClick={previousStage}
            >
              უკან
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
            შემდეგი
          </button>
        </div>
      </form>
    </div>
  );
}
