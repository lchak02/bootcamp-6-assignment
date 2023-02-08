import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  const [state, setState] = useState({});

  useEffect(() => {
    setState(location.state);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "600px",
          border: "1px solid white",
          padding: "50px",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <div style={{ borderBottom: "1px solid black" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "30px",
              fontSize: "25px",
              color: "#F93B1D",
            }}
          >
            <p>{state.name}</p>
            <p>{state.surname}</p>
          </div>
          <p>{state.email}</p>
          <p>{state.number}</p>
          <p>{state.aboutus}</p>
        </div>
        <div style={{ borderBottom: "1px solid black" }}>
          <p>{state.position}</p>
          <p>{state.employee}</p>
          <div style={{ display: "flex", gap: "30px" }}>
            <p>{state.started_date}</p>
            <p>{state.ended_date}</p>
          </div>
          <p>{state.description}</p>
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-start", gap: "30px" }}
        >
          <p>{state.university}</p>
          <p>{state.degree}</p>
        </div>
        <p>{state.endeddate}</p>
        <p>{state.edudescription}</p>
      </div>
    </div>
  );
}
