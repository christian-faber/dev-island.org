import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { HomeBootcamp } from "../components/HomeBootcamp";
import { Tabs } from "../components/Tabs";

export const Home = () => {
  return (
    <>
      <div className="w-full z-10">
        <Banner />
      </div>
      <div className="w-full z-20">
        <HomeBootcamp />
      </div>

      <Tabs />

      <Footer />
    </>
  );
};
