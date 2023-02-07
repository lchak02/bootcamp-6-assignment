import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

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

  return (
    <div>
      <div>{stage}/3</div>
      <form
        style={{
          width: "700px",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", gap: "260px" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Input onChange={props.onChange} name={"name"} label={"სახელი"} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Input onChange={props.onChange} name={"surname"} label={"გვარი"} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Input
              onChange={props.onChange}
              name={"aboutus"}
              label={"ჩემ შესახებ(არასავალდებულო)"}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Input
              onChange={props.onChange}
              name={"email"}
              label={"ელ.ფოსტა"}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Input
              onChange={props.onChange}
              name={"number"}
              label={"მობილურის ნომერი"}
            />
          </div>
        </div>
      </form>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div>
          {stage > 1 && <button onClick={previousStage}>prev</button>}
          <button onClick={nextStage}>next</button>
        </div>
      </div>
    </div>
  );
}
