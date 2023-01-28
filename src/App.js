import { Page } from "./Page";
import { Routes, Route } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import { Donate } from "./pages/Donate";
import { Project } from "./pages/Project";
import { Faq } from "./pages/Faq";
import { GetInvolved } from "./pages/GetInvolved";
import { Apply } from "./pages/Apply";
import { Top } from "./components/Top";
import { Students } from "./pages/Students";
import { CallToAction } from "./components/CallToAction";
import { MobileButton } from "./components/MobileButton";

function App() {
  return (
    <div className="App bg-coolgray">
      <div className="">
        <MobileButton />
        <CallToAction />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/project" element={<Project />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/students" element={<Students />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
