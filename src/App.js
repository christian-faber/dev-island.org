import { Page } from "./Page";
import { Routes, Route } from "react-router-dom";
import { AboutUs } from "./components/Pages/AboutUs";
import { Donate } from "./components/Pages/Donate";
import { Project } from "./components/Pages/Project";
import { Faq } from "./components/Pages/Faq";
import { Bootcamp } from "./components/Pages/Bootcamp";
import { GetInvolved } from "./components/Pages/GetInvolved";
import { Apply } from "./components/Pages/Apply";

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
