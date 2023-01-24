import { useState } from "react";
import { MobileDropdown } from "./MobileDropdown";
import logo from "../../src/assets/logo/Dev-Island_SeasideLogo.svg";

export const MobileNavBar = () => {
  // const logoOpen = { logo };
  // const logoClosed = { logo };
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-coolgray p-3">
      <div
        onClick={() => setOpen(!isOpen)}
        className="w-32 h-10 rounded-full flex justify-center 
        items-center border shadow-md transform transition hover:scale-125
         hover:bg-coolgray lg:hidden"
      >
        {isOpen === false && <img src={logo}></img>}
        {isOpen === true && <img src={logo}></img>}
      </div>
      {isOpen && (
        <div className="flex-row flex shadow-sm z-50">
          <MobileDropdown />
        </div>
      )}
    </div>
  );
};
