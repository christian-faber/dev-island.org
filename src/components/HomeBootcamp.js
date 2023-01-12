import YoutubeEmbed from "./YoutubeEmbed";
import { Link } from "react-router-dom";

export const HomeBootcamp = () => {
  return (
    <div className="">
      <div className="m-7 ">
        <div className="">
          <h2 className="uppercase shadow-sm">
            Creating tech opportunities on Kaua`i, for Kaua`i
          </h2>
          <p className="pl-4 pt-4 pb-6">
            Dev-Island is a Kauaʻi-focused, software development bootcamp,
            aiming to engage and grow the next generation of software developers
            locally.
          </p>
          <p className="pl-4 pt-4 pb-6">
            We care deeply about the individuals and families of Kauaʻi. It's
            more than just a bootcamp, it’s investment in people and our belief
            that knowledge can change the world. Our mission is to connect
            residents with technology and skills to earn a better living. Kauaʻi
            will benefit as students raise their knowledge, skills, and connect
            with the land and community in which they reside. We believe each
            student has enormous potential to become a software engineer and be
            at the forefront of inspiration and innovation for their family and
            future employers.
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
