import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { HomeBootcamp } from "./components/HomeBootcamp";
import { NavBar } from "./components/NavBar";
import { Ribbons } from "./components/Ribbons";
// import { Donate } from "./components/Donate";
// import { AboutUs } from "./components/AboutUs";

export const Page = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Banner />
      </div>
      <div className="">
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
