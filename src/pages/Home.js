import { Banner } from "../components/Banner";
import { HomeBootcamp } from "../components/HomeBootcamp";
import { HomeCards } from "../components/HomeCards";

export const Home = () => {
  return (
    <>
      <div className="w-full">
        <Banner />
      </div>
      <div className="w-full">
        <HomeBootcamp />
      </div>

      <HomeCards />
    </>
  );
};
