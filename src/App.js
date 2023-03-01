import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import { Donate } from "./pages/Donate";
import { Project } from "./pages/Project";
import { Faq } from "./pages/Faq";
import { GetInvolved } from "./pages/GetInvolved";
import { Apply } from "./pages/Apply";
import { Top } from "./components/Top";
import { Students } from "./pages/Students";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className=" bg-coolgray">
      <div className="bg-coolgray min-h-screen">
        <div className="z-20 sticky top-0">
          <Top />
        </div>
        <div className="z-10  ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/project" element={<Project />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/students" element={<Students />} />
            <Route path="/getinvolved" element={<GetInvolved />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
