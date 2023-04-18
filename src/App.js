import { Route, Routes } from "react-router-dom";
import Appp from "./components/Appp";
import Contacto from "./components/Contacto";
import "./css/style.css";
import "./css/responsive.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Appp />} />
        <Route path="/home" element={<Appp />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
