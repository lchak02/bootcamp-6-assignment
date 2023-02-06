import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/create");
  }
  return (
    <button type="button" onClick={handleClick}>
      რეზიუმეს დამატება
    </button>
  );
}
