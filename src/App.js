import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Leads from "./components/Leads";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/leads" element={<Leads />} />
    </Routes>
  );
}

export default App;
