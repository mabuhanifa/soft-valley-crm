import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import Customer from "./components/Customer";
import Home from "./components/Home";
import Leads from "./components/Leads";
import Sales from "./components/Sales";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/leads" element={<Leads />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/sales" element={<Sales />} />
    </Routes>
  );
}

export default App;
