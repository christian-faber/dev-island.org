import { Link } from "react-router-dom";

export const MobileDropdown = () => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed left-[2%] top-[8%] z-50 bg-coolgray flex shadow-2xl rounded-xl"
    >
      <ul className="flex flex-col items-center p-3 align-center justify-center [&>*]:font-bold text-2xl [&>*]:p-3">
        <li className="text-black border-b-2 text-center w-3/4 border-black transform transition active:scale-125 active:underline">
          <Link to="/apply">Apply</Link>
        </li>
        <li className="text-black border-b-2 text-center w-3/4 border-black transform transition active:scale-125 active:underline">
          <Link to="/">Home</Link>
        </li>
        <li className=" text-black border-b-2 text-center w-3/4 border-black transform transition active:scale-125 active:underline">
          <Link to="/students">Students</Link>
        </li>
        <li className=" text-black border-b-2 text-center w-3/4 border-black transform transition active:scale-125 active:underline">
          <Link to="/project">Projects</Link>
        </li>
        <li className=" text-black border-b-2 text-center w-3/4 border-black transform transition active:scale-125 active:underline">
          <Link to="/faq">FAQ</Link>
        </li>
        <li className="text-black border-b-2 text-center w-3/4 border-black transform transition active:scale-125 active:underline">
          <Link to="/about">About</Link>
        </li>
        <li className=" text-black border-b-2 text-center w-3/4 border-black transform transition active:scale-125 active:underline">
          <Link to="/getinvolved">Get Involved</Link>
        </li>
      </ul>
    </div>
  );
};
