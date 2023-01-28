import { useState } from "react";
import { MobileDropdown } from "./MobileDropdown";

export const MobileButton = () => {
  const [isOpen, setOpen] = useState(false);
  const openTag = "<";
  const closeOpenTag = ">";
  const closeTag = "/>";
  const logo = "/assets/logo/Dev-Island_GradientMark.svg";
  return (
    <>
      <div
        onClick={() => setOpen(!isOpen)}
        className="fixed top-[4%] left-[2%] w-[20%]  rounded-full flex justify-center 
        items-center border shadow-md transform transition hover:scale-125
         bg-coolgray lg:hidden z-50 "
      >
        {isOpen === false && (
          <>
            <p>{openTag}</p>
            <img className="w-1/2 lg:hidden" src={logo} alt="D"></img>
            {/* <img className="w-1/2 lg:hidden" src={logo} alt="D"></img> */}

            <p>{closeOpenTag}</p>
          </>
        )}
        {isOpen === true && (
          <>
            <p>{openTag}</p>
            <img className="w-1/2 lg:hidden" src={logo} alt="D"></img>
            {/* <img className="w-1/2 lg:hidden" src={logo} alt="D"></img> */}

            <p>{closeTag}</p>
          </>
        )}
      </div>
      {isOpen && (
        <div className="flex-row flex absolute top-10 left-0 shadow-sm z-50">
          <MobileDropdown />
        </div>
      )}
    </>
  );
};
