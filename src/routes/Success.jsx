import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  const [state, setState] = useState({});

  useEffect(() => {
    setState(location.state);
  }, []);

  return (
    <>
      <h1>success</h1>
      <p>name: {state.name}</p>
    </>
  );
}
