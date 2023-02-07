import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Experience from "./Forms/Experience";
import General from "./Forms/General";
import Education from "./Forms/Education";

export default function SectionLeft(props) {
  const [stage, setStage] = useState(1);
  const navigate = useNavigate();

  function previousStage() {
    if (stage === 1) return;
    setStage(stage - 1);
  }

  function nextStage() {
    if (stage === 3) {
      navigate("/success", { state: { name: "lasha" } });
    }
    setStage(stage + 1);
  }

  function renderForm() {
    switch (stage) {
      case 1:
        return <General onChange={props.onChange} />;
      case 2:
        return <Experience onChange={props.onChange} />;
      case 3:
        return <Education onChange={props.onChange} />;
      default:
        return <h1>dsakdsaj</h1>;
    }
  }

  return (
    <div>
      <div>{stage}/3</div>
      {renderForm()}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div>
          {stage > 1 && <button onClick={previousStage}>prev</button>}
          <button onClick={nextStage}>next</button>
        </div>
      </div>
    </div>
  );
}
