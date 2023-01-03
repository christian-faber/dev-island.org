import { Cohort } from "../Cohort";
import { NavBar } from "../NavBar";
import { Partners } from "../Partners";
import { Team } from "../Team";
import { useState } from "react";
import { AboutModal } from "../modals/AboutModal";

export const AboutUs = () => {
  const [modalOpen, setOpen] = useState(false);
  const [character, setCharacter] = useState("");

  return (
    <div>
      {modalOpen && <AboutModal character={character} setOpen={setOpen} />}
      <div>
        <NavBar />
      </div>
      <div>
        <div className="flex flex-row p-20">
          <div>
            <h2>Background</h2>
            <p>This is where we can say background info</p>
          </div>
          <img className="border" alt="I DON'T have"></img>
        </div>
        <div className="flex flex-row p-20">
          <div>
            <h2>History and Happy Things</h2>
            <p>More information here pleasee</p>
          </div>
          <img className="border" alt="wut"></img>
        </div>
      </div>
      <Cohort
        modalOpen={modalOpen}
        setOpen={setOpen}
        character={character}
        setCharacter={setCharacter}
      />
      <Team
        modalOpen={modalOpen}
        setOpen={setOpen}
        character={character}
        setCharacter={setCharacter}
      />
      <Partners
        modalOpen={modalOpen}
        setOpen={setOpen}
        character={character}
        setCharacter={setCharacter}
      />
    </div>
  );
};
