import { useState } from "react";
import { MobileDropdown } from "./MobileDropdown";
import { Squash as Hamburger } from "hamburger-react";

export const MobileButton = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(!isOpen)}
        className="rounded-full flex justify-center 
        items-center border border-seaside shadow-md
         bg-coolgray lg:hidden z-50 mr-4"
      >
        <Hamburger toggle={(isOpen, setOpen)} rounded size={24} />
        <div>
          {isOpen && <MobileDropdown isOpen={isOpen} setOpen={setOpen} />}
        </div>
      </div>
    </>
  );
};
