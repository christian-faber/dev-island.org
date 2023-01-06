import { Page } from "./Page";
import { Routes, Route } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import { Donate } from "./pages/Donate";
import { Project } from "./pages/Project";
import { Faq } from "./pages/Faq";
import { Bootcamp } from "./pages/Bootcamp";
import { GetInvolved } from "./pages/GetInvolved";
import { Apply } from "./pages/Apply";
import { NavBar } from "./components/NavBar";
import { SocialMedia } from "./components/SocialMedia";

function App() {
  return (
    <div className="App">
      <div className="w-full">
        <NavBar />
      </div>
      <SocialMedia />
      {/* <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/project" element={<Project />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/apply" element={<Apply />} />
      </Routes> */}
    </div>
  );
}

export default App;
