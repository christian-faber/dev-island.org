import { Banner } from "../components/Banner";
import { HomeBootcamp } from "../components/HomeBootcamp";
import { Tabs } from "../components/Tabs";

export const Home = () => {
  return (
    <>
      <div className="w-full">
        <Banner />
      </div>
      <div className="w-full">
        <HomeBootcamp />
      </div>

      <Tabs />
    </>
  );
};
