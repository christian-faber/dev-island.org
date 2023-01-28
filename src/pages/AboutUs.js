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
        <div>
          <h2>Contact us</h2>
          <p>808-720-7600</p>
        </div>
        <div className="flex flex-row p-20">
          <div>
            <h2>Background</h2>
            <p>This is where we can say background info</p>
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
