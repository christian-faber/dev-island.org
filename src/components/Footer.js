import { CallToAction } from "./CallToAction";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="flex py-4 justify-between mx-8">
      <h2 className="flex items-center align-middle">TM Dev-Island</h2>
      <ul className="hidden lg:flex items-center align-right justify-center [&>*]:p-5 [&>*]:text-black">
        <li className=" hover:text-slate-500 transform transition active:scale-125 active:underline font-semibold text-lg">
          <Link to="/">Home</Link>
        </li>
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
      <CallToAction />
    </div>
  );
};
