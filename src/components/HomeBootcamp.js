import YoutubeEmbed from "./YoutubeEmbed";
import { Link } from "react-router-dom";

export const HomeBootcamp = () => {
  return (
    <div className="">
      <div className="m-7 ">
        <div className="">
          <h2 className="uppercase shadow-sm">We have a bootcamp on Kauai</h2>
          <p className="pl-4 pt-4 pb-6">
            Summary of bootcamp. We are doing React.js. Trying to train software
            developers! Building workforce! Lorem ipsum etc etc I like tacos and
            waffles. You can use mushrooms instead of beef by finely chopping
            them, cooking at high heat in oil. Add seasoning. You can tell the
            difference but still delicious
          </p>
        </div>
        <div className="">
          <YoutubeEmbed embedId="dQw4w9WgXcQ" />
        </div>
      </div>
      <div className="flex p-5 justify-center space-x-10">
        <Link to="/apply" className="w-1/4">
          <button className="border bg-purple-500 min-w-full rounded-lg p-5 shadow-md">
            Apply
          </button>
        </Link>
        <Link to="/donate" className="w-1/4">
          <button className="border bg-purple-500 min-w-full rounded-lg p-5  shadow-md">
            Donate
          </button>
        </Link>
      </div>
    </div>
  );
};
