import { useState } from "react";
import { Link } from "react-router-dom";
import { MobileDropdown } from "./MobileDropdown";

export const MobileNavBar = () => {
  const logo = "</>";
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpen(!isOpen)}
        className="w-10 h-10 rounded-full flex justify-center items-center border shadow-md transform transition hover:scale-125 hover:bg-slate-400 lg:hidden"
      >
        <p className="">{logo}</p>
      </div>
      {isOpen && (
        <div className="flex-row flex shadow-sm z-50">
          <MobileDropdown />
        </div>
      )}
    </div>
  );
};
