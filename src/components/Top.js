import { Link } from "react-router-dom";
import { MobileButton } from "../components/MobileButton";

export const Top = () => {
  return (
    <>
      <div className="h-[10%] md:h-[20%] bg-coolgray shadow-md">
        <div className="flex items-center align-center justify-between lg:hidden w-full">
          <img
            src="/assets/logo/Dev-Island_SeasideLogo.svg"
            className="z-40 w-2/3 max-h-[100px]"
            alt="logo"
          ></img>
          <MobileButton />
        </div>
        <div className="bg-coolgray flex-row items-center justify-between  hidden lg:flex w-[85%]">
          <Link
            to="/"
            className="bg-coolgray w-[45%] flex justify-center items-center border transform transition hover:opacity-75"
          >
            <img
              src="/assets/logo/Dev-Island_SeasideLogo.svg"
              className="z-50 w-full max-h-[90px]"
              alt="logo"
            ></img>
          </Link>
          <ul className="flex items-center align-right justify-center [&>*]:p-5 [&>*]:text-black">
            <li className=" hover:text-slate-500 transform transition active:scale-125 active:underline font-semibold text-lg">
              <Link to="/students">Students</Link>
            </li>
            <li className=" hover:text-slate-500 transform transition active:scale-125 active:underline font-semibold text-lg">
              <Link to="/project">Projects</Link>
            </li>
            <li className=" hover:text-slate-500 transform transition active:scale-125 active:underline font-semibold text-lg">
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="hover:text-slate-500 transform transition active:scale-125 active:underline font-semibold text-lg">
              <Link to="/about">About</Link>
            </li>
            <li className=" hover:text-slate-500 transform transition active:scale-125 active:underline font-semibold text-lg">
              <Link to="/getinvolved">Get Involved</Link>
            </li>
          </ul>
          <Link className="absolute right-10" to="/apply">
            <button className="rounded-2xl bg-misty text-white px-5 py-2 shadow-xl text-lg">
              Apply
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
