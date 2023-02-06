import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import Create from "./routes/Create";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
