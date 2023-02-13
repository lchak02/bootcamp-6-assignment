import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/create");
  }
  return (
    <div
      className="home"
      style={{
        backgroundColor: "#F2F2F2",
        padding: "0",
        margin: "0",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          borderBottom: "1px solid black",
          width: "90%",
          left: "65px",
          position: "absolute",
        }}
      >
        <h1 style={{ color: "#F93B1D" }}>REDBERRY</h1>
      </div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <button
            style={{
              width: "464px",
              height: "60px",
              color: "white",
              backgroundColor: "black",
              border: "none",
              borderRadius: "8px",
              fontSize: "18px",
            }}
            type="button"
            onClick={handleClick}
          >
            რეზიუმეს დამატება
          </button>
        </div>
      </div>
    </div>
  );
}
