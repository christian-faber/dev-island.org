import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <div className="bg-seaside pb-4">
      <div className="border-black mb-6 mr-0 md:mr-2 lg:mr-4 flex justify-end">
        <img
          src="/assets/Banner.jpg"
          alt="Banner"
          className="shadow-xl rounded-lg lg:w-3/4 mt-1"
        ></img>
      </div>
      <div className="flex flex-col justify-end items-end px-10 lg:w-1/2 lg:h-1/6 opacity-80 rounded-xl">
        <Link to="/students" className="">
          <h1 className="hidden lg:flex text-2xl text-left text-white bold font-bold">
            Kamaʻāina driven. Kaiāulu focused.
          </h1>
          <div className="">
            <h1 className="lg:hidden text-2xl text-left text-white bold font-bold">
              Kama'āina driven.
            </h1>
            <h1 className="lg:hidden text-2xl text-left text-white bold font-bold">
              Kaiāulu focused.
            </h1>
          </div>
          <hr />
          <div className="flex justify-center">
            <p className="text-lg text-left text-white p-1 active:underline font-semibold">
              Empowering Kauaʻi's own by training local web developers.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
