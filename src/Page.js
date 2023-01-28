import { useState } from "react";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { HomeBootcamp } from "./components/HomeBootcamp";
import { Top } from "./components/Top";
import { Tabs } from "./components/Tabs";
// import { Donate } from "./components/Donate";
// import { AboutUs } from "./components/AboutUs";

export const Page = () => {
  return (
    <>
      <Top />
      <div className="w-full">
        <Banner />
      </div>
      <div className="w-full">
        <HomeBootcamp />
      </div>

      <Tabs />

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
