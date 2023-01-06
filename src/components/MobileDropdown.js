import { Link } from "react-router-dom";

export const MobileDropdown = () => {
  return (
    <div className="absolute z-50 bg-slate-300 flex">
      <ul className="flex flex-col items-center p-3 align-center justify-centerf [&>*]:p-3">
        <li className="hover:text-slate-500 transform transition active:scale-125 active:underline">
          <Link to="/">Home</Link>
        </li>
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
  );
};
