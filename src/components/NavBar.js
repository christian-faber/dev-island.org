import { Link } from "react-router-dom";
import { MobileNavBar } from "./MobileNavBar";

export const NavBar = () => {
  const logo = "</>";
  return (
    <>
      <MobileNavBar />

      <div className="hidden lg:block">
        <div className="bg-slate-300 flex-col items-center flex shadow-sm pt-5">
          <Link
            to="/"
            className="w-20 h-20 rounded-full flex justify-center items-center border shadow-md transform transition hover:scale-125 hover:bg-slate-400"
          >
            <p className="">{logo}</p>
          </Link>
          <ul className="flex items-center p-3 align-center justify-centerf [&>*]:p-3">
            <li className="hover:text-slate-500 transform transition active:scale-125 active:underline">
              <Link to="/about">About</Link>
            </li>
            <li className="border-l-2 hover:text-slate-500 transform transition active:scale-125 active:underline">
              <Link to="/bootcamp">Bootcamp</Link>
            </li>
            <li className="border-l-2 hover:text-slate-500 transform transition active:scale-125 active:underline">
              <Link to="/project">Projects</Link>
            </li>
            <li className="border-l-2 hover:text-slate-500 transform transition active:scale-125 active:underline">
              <Link to="/getinvolved">Get Involved</Link>
            </li>
            <li className="border-l-2 hover:text-slate-500 transform transition active:scale-125 active:underline">
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
