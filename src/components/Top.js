import { Link } from "react-router-dom";

export const Top = () => {
  // const logo = "</>";
  return (
    <>
      <div className="flex justify-start h-[10%]">
        <div className="flex items-center align-center justify-start lg:hidden px-[25%] w-full">
          <img
            src="/assets/logo/Dev-Island_SeasideLogo.svg"
            className="z-40"
            alt="logo"
          ></img>
        </div>
        <div className="bg-coolgray flex-row items-center justify-between p-5 hidden lg:flex w-2/3">
          <Link
            to="/"
            className="bg-coolgray border-misty w-40 h-20 rounded-full flex justify-center items-center border shadow-2xl transform transition hover:scale-125"
          >
            <img
              src="/assets/logo/Dev-Island_SeasideLogo.svg"
              className="z-50"
              alt="logo"
            ></img>
          </Link>
          <ul className="flex items-center p-3 align-right justify-center [&>*]:p-5 [&>*]:text-black">
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
