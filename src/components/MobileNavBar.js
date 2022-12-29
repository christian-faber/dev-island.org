import { useState } from "react";
import { MobileDropdown } from "./MobileDropdown";

export const MobileNavBar = () => {
  const logoOpen = "</>";
  const logoClosed = "<>";
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpen(!isOpen)}
        className="w-10 h-10 rounded-full flex justify-center 
        items-center border shadow-md transform transition hover:scale-125
         hover:bg-slate-400 lg:hidden"
      >
        {isOpen === false && <p className="">{logoClosed}</p>}
        {isOpen === true && <p>{logoOpen}</p>}
      </div>
      {isOpen && (
        <div className="flex-row flex shadow-sm z-50">
          <MobileDropdown />
        </div>
      )}
    </div>
  );
};
