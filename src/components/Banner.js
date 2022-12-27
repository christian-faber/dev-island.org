import { Link } from "react-router-dom";
import banner from "../assets/Banner.jpg";

export const Banner = () => {
  return (
    <div
      className="flex 
    relative h-58 lg:h-80 
      overflow-hidden bg-blue-500"
    >
      <div className="h-full">
        <img
          src={banner}
          alt="Banner"
          className="object-cover min-w-full"
        ></img>
      </div>
      <div className="absolute bg-slate-100 opacity-80 mb-2 p-2 shadow-lg bottom-0 rounded-xl">
        <h1 className="text-lg">Bootcamp!</h1>
        <p className="text-base">
          This is where summary text is supposed to be
        </p>
        <Link to="/get" className="flex justify-end">
          Learn More
        </Link>
      </div>
    </div>
  );
};
