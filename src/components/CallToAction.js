import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <div className="flex flex-col fixed w-32 shadow border m-4 right-2 bottom-4 z-10">
      <ul className="w-full mr-[3px] flex">
        <li className="m-[2px] h-10 w-1/3 bg-misty text-black ">
          <a
            href="https://www.linkedin.com/company/hidev-island/"
            className="h-full w-full flex justify-center align-middle items-center"
          >
            <i className="">
              <FaLinkedin />
            </i>
          </a>
        </li>
        <li className="m-[2px] h-10 w-1/3  bg-coolgray text-black">
          <a
            href="https://github.com/orgs/dev-island/"
            className="h-full w-full  flex justify-center align-middle items-center"
          >
            <i className="">
              <FaGithub />
            </i>
          </a>
        </li>
        <li className="m-[2px] h-10 w-1/3 bg-og text-black">
          <a
            href="https://instagram.com/devislandkauai?igshid=YmMyMTA2M2Y="
            className="h-full w-full flex justify-center align-middle items-center"
          >
            <i className="">
              <FaInstagram />
            </i>
          </a>
        </li>
      </ul>
      <ul className="flex flex-row w-full ">
        <Link
          to="/apply"
          className="w-full h-full m-[2px] bg-seaside text-white flex justify-center align-middle items-center"
        >
          <li className="text-white">Apply</li>
        </Link>
        <Link
          to="/donate"
          className="w-full h-full m-[2px] bg-seaside text-white flex justify-center align-middle items-center"
        >
          <li className=" text-white">Donate</li>
        </Link>
      </ul>
    </div>
  );
};
