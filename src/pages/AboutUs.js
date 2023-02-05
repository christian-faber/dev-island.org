// import { Partners } from "../components/Partners";
import { Team } from "../components/Team";
import { useState } from "react";
import { AboutModal } from "../components/modals/AboutModal";
import personnel from "../data/personnel.json";

export const AboutUs = () => {
  const [modalOpen, setOpen] = useState(false);
  const [character, setCharacter] = useState("");

  return (
    <div>
      {modalOpen && character && (
        <AboutModal character={character} setOpen={setOpen} />
      )}
      <div>
        <div className="bg-seaside p-4">
          <div className="border-2 border-og text-coolgray p-4">
            <h2 className="">Contact us</h2>
            <div>
              <ion-icon name="call-outline"></ion-icon>
              <p>808-720-7600</p>
            </div>
            <div>
              <ion-icon name="call-outline"></ion-icon>
              <p>info@dev-island.org</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row py-12 bg-og">
          <div>
            <h2 className="text-3xl font-semibold p-2">Background</h2>
            <p className="text-lg">This is where we can say background info</p>
          </div>
          <img
            className="border"
            src="/assets/DevIslandSchool_50.jpg"
            alt="I DON'T have"
          ></img>
        </div>
        <div className="flex flex-row p-20">
          <div>
            <h2>History and Happy Things</h2>
            <p>More information here pleasee</p>
          </div>
          <img
            src="/assets/DevIslandSchool_55.jpg"
            className="border"
            alt="wut"
          ></img>
        </div>
      </div>

      <Team
        team={personnel.team}
        modalOpen={modalOpen}
        setOpen={setOpen}
        character={character}
        setCharacter={setCharacter}
      />
      {/* <Partners
        partners={personnel.partners}
        modalOpen={modalOpen}
        setOpen={setOpen}
        character={character}
        setCharacter={setCharacter}
      /> */}
    </div>
  );
};
