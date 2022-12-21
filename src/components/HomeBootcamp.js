import YoutubeEmbed from "./YoutubeEmbed";
import { Link } from "react-router-dom";

export const HomeBootcamp = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row m-7 ">
        <div className="flex flex-col w-3/5 pr-10">
          <h2 className="uppercase shadow-sm">We have a bootcamp on Kauai</h2>
          <p className="pl-4 pt-4">
            Summary of bootcamp. We are doing React.js. Trying to train software
            developers! Building workforce! Lorem ipsum etc etc I like tacos and
            waffles. You can use mushrooms instead of beef by finely chopping
            them, cooking at high heat in oil. Add seasoning. You can tell the
            difference but still delicious
          </p>
        </div>
        <div className="relative h-[11.25rem] pb-2/3">
          <YoutubeEmbed embedId="dQw4w9WgXcQ" />
        </div>
      </div>
      <div className="flex p-5 space-between space-x-10 justify-center">
        <button className="border bg-purple-500 rounded-lg p-5 w-[200px] shadow-md">
          Apply
        </button>
        <Link to="/donate">
          <button className="border bg-purple-500 rounded-lg p-5 w-[200px] shadow-md">
            Donate
          </button>
        </Link>
      </div>
    </div>
  );
};
