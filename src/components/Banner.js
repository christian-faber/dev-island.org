import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <div className="bg-seaside pb-4">
      <div className="border-black mb-6 flex justify-end">
        <img
          src="/assets/Banner.jpg"
          alt="Banner"
          className="shadow-xl rounded-lg lg:w-3/4"
        ></img>
      </div>
      <div className="flex flex-col justify-end items-end px-10 lg:w-1/3 lg:h-1/6 opacity-80 rounded-xl">
        <Link to="/students" className="">
          <div className="">
            <h1 className="text-2xl text-left text-white bold">
              Kama'āina driven.
            </h1>
            <h1 className="text-2xl text-left text-white bold">
              Kaiāulu focused.
            </h1>
          </div>
          <hr />
          <div className="flex justify-center">
            <p className="text-lg text-left text-white p-1 active:underline">
              Empowering Kauaʻi's own by training local web developers.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
