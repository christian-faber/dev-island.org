import { useState } from "react";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { HomeBootcamp } from "./components/HomeBootcamp";
import { Modal } from "./components/Modals/Modal";
import { NavBar } from "./components/NavBar";
import { Ribbons } from "./components/Ribbons";
// import { Donate } from "./components/Donate";
// import { AboutUs } from "./components/AboutUs";

export const Page = () => {
  const [isOpen, setOpen] = useState(false);

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
      <Ribbons setOpen={setOpen} />
      {isOpen && <Modal isOpen={isOpen} setOpen={setOpen} />}
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
