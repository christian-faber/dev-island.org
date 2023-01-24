import { Link } from "react-router-dom";
import banner from "../assets/Banner.jpg";

export const Banner = () => {
  return (
    <div className="bg-seaside relative">
      <div className=" lg:h-full border-black pl-4 pt-2 pb-8 pr-2 bg-misty shadow-xl flex justify-end">
        <img
          src={banner}
          alt="Banner"
          className="shadow-xl rounded-lg lg:w-3/4"
        ></img>
      </div>
      <div className=" w-3/4 h-1/4 lg:w-1/3 lg:h-1/6 bg-coolgray opacity-80 mb-2 p-2 shadow-lg bottom-0 left-1 rounded-xl">
        <h1 className="text-md underline bold">
          Kama'āina driven - Kaiāulu focused!
        </h1>
        <p className="">
          Empowering Kauaʻi's own by training local web developers.
          <Link to="/students" className="ml-4">
            ->
          </Link>
        </p>
      </div>
    </div>
  );
};
