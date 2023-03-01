// import { Partners } from "../components/Partners";
import { Team } from "../components/Team";
import { useState } from "react";
import { AboutModal } from "../components/modals/AboutModal";
import personnel from "../data/personnel.json";
// import { IoCallOutline } from "react-icons/io5";
// import { IoAtOutline } from "react-icons/io5";
export const AboutUs = () => {
  const [modalOpen, setOpen] = useState(false);
  const [character, setCharacter] = useState("");

  return (
    <div>
      {modalOpen && character && (
        <AboutModal character={character} setOpen={setOpen} />
      )}
      <div className="">
        <div className="bg-seaside p-4 flex justify-center">
          <div className="text-coolgray p-4 max-w-[1440px]">
            <h2 className="text-3xl font-semibold m-4">Contact Us</h2>
            {/* <div className="bg-coolgray p-1 rounded-3xl m-2">
              <div className="bg-coolgray border-seaside border-2 rounded-3xl flex p-3 justify-between">
                <IoCallOutline className="text-black align-middle items-center text-3xl" />
                <p className="text-black text-2xl">808-720-7600</p>
              </div>
            </div> */}
            <a href="mailto:info@dev-island.org">
              <button className="border bg-misty rounded-xl p-5 text-coolgray shadow-2xl font-semibold">
                info@dev-island.org
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col py-10">
          <div>
            <div className=" mb-8 relative">
              <img
                className="border border-misty w-11/12 m-2 rounded-lg drop-shadow-xl lg:max-w-[1200px] lg:ml-12"
                src="/assets/DevIslandSchool_52.jpg"
                alt="I DON'T have"
              ></img>
            </div>
            <h2 className="text-3xl font-semibold pl-12 mb-4  drop-shadow-lg">
              Background
            </h2>
            <p className="text-lg p-6">
              Dev-Island is a nonprofit organization, brought together to equip
              Kauaʻi workers with tools for the emerging tech industry. After
              the pandemic, work became more dependent on technology than ever
              before. Remote work became a more viable option, creating the
              opportunity for high-paying careers that don't depend on location.
            </p>
            <p className="text-lg p-6">
              Dev-Island is focused on connecting Kauaʻi's workforce with
              opportunities that have come from growth in the tech industry and
              new work practices.
            </p>
          </div>
        </div>
        {/* <div className="flex flex-row p-20">
          <div>
            <h2>History and Happy Things</h2>
            <p>More information here pleasee</p>
          </div>
          <img
            src="/assets/DevIslandSchool_55.jpg"
            className="border"
            alt="wut"
          ></img>
        </div> */}
      </div>
      <div className="flex justify-center items-center">
        <Team
          team={personnel.team}
          modalOpen={modalOpen}
          setOpen={setOpen}
          character={character}
          setCharacter={setCharacter}
        />
      </div>
    </div>
  );
};
