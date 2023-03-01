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
      <div className="bg-seaside p-6 lg:p-12 flex justify-center">
        <div className="text-coolgray p-4">
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
      <div className="flex justify-center">
        <img
          className="rounded-xl drop-shadow-xl lg:max-w-[1220px]"
          src="/assets/DevIslandSchool_52.jpg"
          alt="Backs"
        ></img>
      </div>
      <div className="flex flex-col justify-center items-center align-middle w-full">
        <div className="p-8 bg-coolgray max-w-[1220px]">
          <h2 className="text-3xl drop-shadow-xl">Background</h2>
          <div className="p-4 [&>*]:p-2">
            <p className=" text-lg">
              Dev-Island is a nonprofit organization, brought together to equip
              Kauaʻi workers with tools for the emerging tech industry. After
              the pandemic, work became more dependent on technology than ever
              before. Remote work became a more viable option, creating the
              opportunity for high-paying careers that don't depend on location.
            </p>
            <p className="text-lg">
              Dev-Island is focused on connecting Kauaʻi's workforce with
              opportunities that have come from growth in the tech industry and
              new work practices.
            </p>
          </div>
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
    </div>
  );
};
