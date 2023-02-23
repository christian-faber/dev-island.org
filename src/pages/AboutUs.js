// import { Partners } from "../components/Partners";
import { Team } from "../components/Team";
import { useState } from "react";
import { AboutModal } from "../components/modals/AboutModal";
import personnel from "../data/personnel.json";
import { IoCallOutline } from "react-icons/io5";
import { IoAtOutline } from "react-icons/io5";
export const AboutUs = () => {
  const [modalOpen, setOpen] = useState(false);
  const [character, setCharacter] = useState("");

  return (
    <div>
      {modalOpen && character && (
        <AboutModal character={character} setOpen={setOpen} />
      )}
      <div>
        <div className="bg-seaside p-4 flex justify-center">
          <div className="border-2 border-og text-coolgray p-4 rounded-lg">
            <h2 className="text-3xl font-semibold m-2">Contact Us</h2>
            <div className="bg-coolgray p-1 rounded-3xl m-2">
              <div className="bg-coolgray border-seaside border-2 rounded-3xl flex p-3 justify-between">
                <IoCallOutline className="text-black align-middle items-center text-3xl" />
                <p className="text-black text-2xl">808-720-7600</p>
              </div>
            </div>
            <a href="mailto:info@dev-island.org">
              <div className="bg-coolgray p-1 rounded-3xl m-2">
                <div className="flex bg-coolgray border-seaside border-2 p-3 justify-between rounded-3xl">
                  <IoAtOutline className="text-black text-3xl" />
                  <p className="text-black text-xl font-semibold">
                    info@dev-island.org
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col py-10 bg-og">
          <div>
            <h2 className="text-3xl font-semibold pl-12 mb-4 text-coolgray drop-shadow-lg">
              Background
            </h2>
            <div className=" mb-8 relative">
              <div className="border-4 border-coolgray rounded-xl h-2/3 w-11/12 absolute m-4"></div>
              <img
                className="border border-misty w-11/12 m-2 rounded-lg drop-shadow-xl lg:max-w-[1200px] lg:ml-12"
                src="/assets/DevIslandSchool_52.jpg"
                alt="I DON'T have"
              ></img>
            </div>
            <p className="text-lg text-coolgray p-6">
              Dev-Island is a nonprofit organization, brought together to equip
              Kauaʻi workers with tools for the emerging tech industry. After
              the pandemic, work became more dependent on technology than ever
              before. Remote work became a more viable option, creating the
              opportunity for high-paying careers that don't depend on location.
            </p>
            <p className="text-lg text-coolgray p-6">
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

      <Team
        team={personnel.team}
        modalOpen={modalOpen}
        setOpen={setOpen}
        character={character}
        setCharacter={setCharacter}
      />
    </div>
  );
};
