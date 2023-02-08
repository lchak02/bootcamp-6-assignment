import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/create");
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
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
  );
}
