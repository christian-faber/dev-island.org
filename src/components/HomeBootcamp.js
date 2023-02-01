import YoutubeEmbed from "./YoutubeEmbed";
import { Link } from "react-router-dom";

export const HomeBootcamp = () => {
  return (
    <div className="">
      <div className="m-5 lg:m-7">
        <h2 className="pb-2 lg:w-2/3 uppercase border-b-slate-300 border-b-2 text-2xl lg:text-3xl font-semibold">
          Creating tech opportunities on Kauaʻi, for Kauaʻi
        </h2>

        <div className="flex flex-col-reverse p-3 lg:flex-row lg:m-5">
          <div className="lg:w-2/3">
            <p className="py-4 text-xl">
              Dev-Island is a Kauaʻi-focused, software development bootcamp,
              engaging and growing the next generation of software developers
              locally.
            </p>
            <ul className="list-disc text-lg px-6 [&>*]:p-2">
              <li> 9 month bootcamp</li>
              <li> Open to all ages, backgrounds, and experience.</li>
              <li> Classes held in-person</li>
            </ul>
          </div>
          <div className="bg-misty lg:w-1/3">
            {/* <YoutubeEmbed embedId="dQw4w9WgXcQ" /> */}
            <img
              src="/assets/DevIslandSchool_56.jpg"
              alt="bootcamp"
              className=""
            ></img>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center align-middle">
        <h2 className="text-lg pr-2">Next Cohort:</h2>
        <p className="text-xl font-bold">Spring 2023</p>
      </div>
      <div className="flex p-5 justify-center space-x-10">
        <Link to="/apply" className="w-1/4">
          <button className="border bg-misty min-w-full rounded-xl p-5 shadow-lg text-coolgray font-semibold">
            Apply
          </button>
        </Link>
        <Link to="/donate" className="w-1/4">
          <button className="border bg-misty min-w-full rounded-xl p-5 text-coolgray shadow-lg font-semibold">
            Donate
          </button>
        </Link>
      </div>
    </div>
  );
};
