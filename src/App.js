import { Page } from "./Page";
import { Routes, Route } from "react-router-dom";
import { AboutUs } from "./components/pages/AboutUs";
import { Donate } from "./components/pages/Donate";
import { Project } from "./components/pages/Project";
import { Faq } from "./components/pages/Faq";
import { Bootcamp } from "./components/pages/Bootcamp";
import { GetInvolved } from "./components/pages/GetInvolved";
import { Apply } from "./components/pages/Apply";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page />} />
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
