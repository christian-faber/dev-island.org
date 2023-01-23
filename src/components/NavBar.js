import { Link } from "react-router-dom";
import { MobileNavBar } from "./MobileNavBar";

export const NavBar = () => {
  const logo = "</>";
  return (
    <>
      <MobileNavBar />

      <div className="hidden lg:block">
        <div className="bg-seaside flex-col items-center flex shadow-sm pt-5">
          <Link
            to="/"
            className="bg-coolgray hover:bg-misty w-20 h-20 rounded-full flex justify-center items-center border shadow-md transform transition hover:scale-125"
          >
            <p className="">{logo}</p>
          </Link>
          <ul className="flex items-center p-3 align-center justify-centerf [&>*]:p-3 [&>*]:text-coolgray">
            <li className="border-l-2 hover:text-slate-500 transform transition active:scale-125 active:underline">
              <Link to="/students">Students</Link>
            </li>
            <li className="border-l-2 hover:text-slate-500 transform transition active:scale-125 active:underline">
              <Link to="/project">Projects</Link>
            </li>
            <li className="border-l-2 hover:text-slate-500 transform transition active:scale-125 active:underline">
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="hover:text-slate-500 transform transition active:scale-125 active:underline">
              <Link to="/about">About</Link>
            </li>
            <li className="border-l-2 hover:text-slate-500 transform transition active:scale-125 active:underline">
              <Link to="/getinvolved">Get Involved</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
