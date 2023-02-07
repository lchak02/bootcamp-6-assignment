import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import Create from "./routes/Create";
import Success from "./routes/Success";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
