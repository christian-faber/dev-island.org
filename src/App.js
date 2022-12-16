import { Page } from "./Page";
import { Routes, Route } from "react-router-dom";
import { AboutUs } from "./components/AboutUs";
import { Donate } from "./components/Donate";
import { Project } from "./components/Project";
import { Faq } from "./components/Faq";
import { Bootcamp } from "./components/Bootcamp";
import { GetInvolved } from "./components/GetInvolved";
import { Apply } from "./components/Apply";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/home" element={<Page />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/project" element={<Project />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </div>
  );
}

export default App;
