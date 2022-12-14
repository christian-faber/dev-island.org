export const NavBar = () => {
  const logo = "</>";
  return (
    <div className="bg-slate-300 flex-col items-center flex shadow-sm pt-5">
      <div className="w-20 h-20 rounded-full flex justify-center items-center border shadow-md transform transition hover:scale-125 hover:bg-slate-400">
        <p className="">{logo}</p>
      </div>
      <ul className="flex items-center p-3 align-center justify-centerf [&>*]:p-3">
        <li className="hover:text-slate-500 transform transition active:scale-125 active:underline">
          About
        </li>
        <li className="border-l-2 hover:text-slate-500 transform transition active:scale-125 active:underline">
          Bootcamp
        </li>
        <li className="border-l-2 hover:text-slate-500 transform transition active:scale-125 active:underline">
          Projects
        </li>
        <li className="border-l-2 hover:text-slate-500 transform transition active:scale-125 active:underline">
          Get Involved
        </li>
        <li className="border-l-2 hover:text-slate-500 transform transition active:scale-125 active:underline">
          FAQ
        </li>
      </ul>
    </div>
  );
};
