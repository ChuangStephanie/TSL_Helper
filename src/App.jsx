import { useState } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Shipment from "./components/Shipment";
import Dropship from "./components/Dropship";
import BOL from "./components/BOL";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shipment" element={<Shipment />} />
        <Route path="/dropship" element={<Dropship />} />
        <Route path="/bol" element={<BOL />} />
      </Routes>
    </>
  );
}

export default App;
