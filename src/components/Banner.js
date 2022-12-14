import banner from "../assets/Banner.jpg";

export const Banner = () => {
  return (
    <div className="flex relative max-h-25 w-full justify-center items-end">
      <img src={banner} alt="Banner" className=" max-w-full object-fill" />
      <div className="absolute bg-slate-100 opacity-80 mb-5 p-3 shadow-lg rounded-xl">
        <h1 className="text-2xl">Bootcamp!</h1>
        <p className="text-xl">This is where summary text is supposed to be</p>
        <a href="dev-island.org" className="flex justify-end">
          Learn More
        </a>
      </div>
    </div>
  );
};
