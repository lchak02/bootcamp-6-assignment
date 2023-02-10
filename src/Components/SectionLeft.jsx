import { useState } from "react";
import Experience from "./Forms/Experience";
import General from "./Forms/General";
import Education from "./Forms/Education";
import Header from "./Header";

export default function SectionLeft(props) {
  const [stage, setStage] = useState(1);
  const [allValid, setAllValid] = useState(false);

  function previousStage() {
    if (stage === 1) return;
    setStage(stage - 1);
  }

  function renderForm() {
    // return <Experience setAllValid={setAllValid} getData={props.onChange} />;

    switch (stage) {
      case 1:
        return <General setAllValid={setAllValid} getData={props.onChange} />;
      case 2:
        return (
          <Experience setAllValid={setAllValid} getData={props.onChange} />
        );
      case 3:
        return <Education setAllValid={setAllValid} getData={props.onChange} />;
    }
  }

  function handleOnSubmit(event) {
    event.preventDefault();

    if (!allValid) {
      alert("Forma ar aris validuri");
      return;
    }

    if (stage === 3) {
      props.redirectSuccess();
    }

    setStage(stage + 1);
  }

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        padding: "20px 70px 170px 70px",
        height: "100%",
        width: "1020px",
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
          onClick={previousStage}
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
