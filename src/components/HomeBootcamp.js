import { Link } from "react-router-dom";

export const HomeBootcamp = () => {
  return (
    <div className="">
      <div className="m-5 lg:m-7">
        <h2 className="pb-2 lg:w-2/3 uppercase border-b-slate-300 border-b-2 text-2xl lg:text-3xl font-semibold">
          Creating tech opportunities on Kauaʻi, for Kauaʻi
        </h2>

        <div className="flex flex-col p-3 lg:flex-row lg:m-5">
          <div className="lg:w-2/3">
            <p className="p-4 text-2xl">
              Dev-Island is a Kauaʻi-focused, software development bootcamp,
              engaging and growing the next generation of software developers
              locally.
            </p>
            <ul className="list-disc px-6 [&>*]:p-2 [&>*]:my-4 text-2xl lg:ml-20 ml-10">
              <li className="">9 month bootcamp</li>
              <li className="">Classes held in-person and online</li>
              <li className="">Scholarships available</li>
            </ul>
          </div>
          <div className="lg:relative lg:w-1/3 bg-coolgray rounded-xl">
            {/* <YoutubeEmbed embedId="dQw4w9WgXcQ" /> */}
            <img
              src="/assets/DevIslandSchool_60.jpg"
              alt="bootcamp"
              className="lg:max-h-[350px] rounded-xl shadow-2xl"
            ></img>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center align-middle">
        <h2 className="text-xl pr-2">Next Cohort:</h2>
        <p className="text-3xl underline  font-bold">Spring 2023</p>
      </div>
      <div className="flex p-5 justify-center space-x-[10%]">
        <Link to="/apply" className="">
          <button className="border min-w-[96px] max-w-[192px] bg-misty rounded-xl p-5 shadow-2xl text-coolgray font-semibold">
            Apply
          </button>
        </Link>
        <Link to="/donate" className="">
          <button className="border min-w-[96px] max-w-[192px] bg-misty rounded-xl p-5 text-coolgray shadow-2xl font-semibold">
            Donate
          </button>
        </Link>
      </div>
    </div>
  );
};
