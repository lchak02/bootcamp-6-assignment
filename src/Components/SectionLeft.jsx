import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Experience from "./Forms/Experience";
import General from "./Forms/General";
import Education from "./Forms/Education";

export default function SectionLeft(props) {
  const [stage, setStage] = useState(1);
  const [allValid, setAllValid] = useState(false);
  const navigate = useNavigate();

  function previousStage() {
    if (stage === 1) return;
    setStage(stage - 1);
  }

  function renderForm() {
    switch (stage) {
      case 1:
        return <General setAllValid={setAllValid} />;
      case 2:
        return <Experience setAllValid={setAllValid} />;
      case 3:
        return <Education setAllValid={setAllValid} />;
    }
  }

  function handleOnSubmit(event) {
    event.preventDefault();

    if (!allValid) {
      alert("Forma ar aris validuri");
      return;
    }

    if (stage === 3) {
      navigate("/success", { state: { name: "lasha" } });
    }

    setStage(stage + 1);
  }

  return (
    <div>
      <div>{stage}/3</div>
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
            <button type="button" onClick={previousStage}>
              prev
            </button>
          )}
          <button type="submit">next</button>
        </div>
      </form>
    </div>
  );
}
