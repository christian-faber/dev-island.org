import { useState } from "react";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { HomeBootcamp } from "./components/HomeBootcamp";
import { AboutModal } from "./components/Modals/AboutModal";
import { NavBar } from "./components/NavBar";
import { Tabs } from "./components/Tabs";
// import { Donate } from "./components/Donate";
// import { AboutUs } from "./components/AboutUs";

export const Page = () => {
  // const [isOpen, setOpen] = useState(false);
  // console.log(isOpen);

  return (
    <>
      <div className="w-full">
        <NavBar />
      </div>
      <div className="w-full">
        <Banner />
      </div>
      <div className="w-full">
        <HomeBootcamp />
      </div>
      <div>
        <Tabs />
      </div>
      <Footer />
      {/* <div className="border-2 border-black">
        <Donate />
      </div>
      <div className="border-2 border-black">
        <AboutUs />
      </div> */}
    </>
  );
};
