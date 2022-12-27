import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { HomeBootcamp } from "./components/HomeBootcamp";
import { MobileNavBar } from "./components/MobileNavBar";
import { Modal } from "./components/Modals/Modal";
import { NavBar } from "./components/NavBar";
import { Ribbons } from "./components/Ribbons";
// import { Donate } from "./components/Donate";
// import { AboutUs } from "./components/AboutUs";

export const Page = () => {
  return (
    <>
      <div className="w-full">
        <NavBar />
      </div>
      <Modal />
      <div className="w-full">
        <Banner />
      </div>
      <div className="w-full">
        <HomeBootcamp />
      </div>
      <Ribbons />
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
