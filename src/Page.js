import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { HomeBootcamp } from "./components/HomeBootcamp";
import { Tabs } from "./components/Tabs";

export const Page = () => {
  return (
    <>
      <div className="w-full">
        <Banner />
      </div>
      <div className="w-full">
        <HomeBootcamp />
      </div>

      <Tabs />

      <Footer />
    </>
  );
};
