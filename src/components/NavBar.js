import { Link } from "react-router-dom";
import { MobileNavBar } from "./MobileNavBar";
import logo from "../../src/assets/logo/Dev-Island_SeasideLogo.svg";

export const NavBar = () => {
  // const logo = "</>";
  return (
    <>
      <MobileNavBar />

      <div className="hidden lg:block">
        <div className="bg-coolgray flex-row items-center flex shadow-sm p-5">
          <Link
            to="/"
            className="bg-coolgray hover:bg-coolgray hover:border-misty w-40 h-20 rounded-full flex justify-center items-center border shadow-md transform transition hover:scale-125"
          >
            <img src={logo} className="z-50" alt="logo"></img>
          </Link>
          <ul className="flex items-center p-3 align-center justify-centerf [&>*]:p-3 [&>*]:text-black">
            <li className=" hover:text-slate-500 transform transition active:scale-125 active:underline">
              <Link to="/students">Students</Link>
            </li>
            <li className=" hover:text-slate-500 transform transition active:scale-125 active:underline">
              <Link to="/project">Projects</Link>
            </li>
            <li className=" hover:text-slate-500 transform transition active:scale-125 active:underline">
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="hover:text-slate-500 transform transition active:scale-125 active:underline">
              <Link to="/about">About</Link>
            </li>
            <li className=" hover:text-slate-500 transform transition active:scale-125 active:underline">
              <Link to="/getinvolved">Get Involved</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
