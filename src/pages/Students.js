import { Cohort } from "../components/Cohort";
import { useState } from "react";
import { AboutModal } from "../components/modals/AboutModal";
import { Link } from "react-router-dom";
import { Alumni } from "../components/Alumni";
import { personnel } from "../data/personnel.json";

export const Students = () => {
  const [modalOpen, setOpen] = useState(false);
  const [character, setCharacter] = useState("");

  return (
    <div className="flex align-middle flex-col justify-center items-center">
      {modalOpen && <AboutModal character={character} setOpen={setOpen} />}
      <h1 className="flex align-center items-center justify-center text-xl font-sans bg-gradient-to-b bg-blue-300 w-full">
        Become a Student
      </h1>
      <div className="">
        <div className="mt-4 border w-11/12">
          <h1>Key Points</h1>
          <ul>
            <li>Cost: $0</li>
            <li>Time: March - February, 3 hour class Tuesdays and Thursdays</li>
            <li>Difficulty: Worth it</li>
          </ul>
        </div>
        <div className="mt-4 border w-11/12">
          <h1>Curriculum</h1>
          <h2>Techical Skills</h2>
          <p className="ml-2">React JS, HTML, CSS</p>
          <p className="ml-2">Individual projects</p>
          <p className="ml-2">Code-along</p>
          <p className="ml-2">Real project experience</p>
          <h2>Professional Accumen</h2>
          <p className="ml-2">Mock interviews</p>
          <p className="ml-2">Resume</p>
          <p className="ml-2">Searching strategies</p>
          <p className="ml-2">Onboarding support</p>
          <p className="ml-2">Expectation building</p>
          <h2>Leadership</h2>
          <h2>Handling emotions</h2>
        </div>
        <div className="my-4 border w-11/12">
          <h1>Team</h1>
          <h2>Connection</h2>
          <p>Slack, github, check-ins</p>
          <h2>Accountability</h2>
          <p>Collaboration and commitment</p>
          <h2>Support</h2>
          <p>Help always available. Emotional support</p>
        </div>
        <div>
          <h2>Still unsure?</h2>
          <p>How do I know I want to code?</p>
          <p>Example projects</p>
          <p>Example Videos</p>
          <p>What others are saying</p>
        </div>
        <hr />
        <div>
          <h1>Studnet Stories</h1>
          <Cohort
            students={personnel.students}
            modalOpen={modalOpen}
            setOpen={setOpen}
            character={character}
            setCharacter={setCharacter}
          />
          <Alumni />
        </div>
        <div>
          <h1>Testimonial</h1>
          <p>
            This is where I will insert a quote from the students. This section
            could be included in another section that has the circles.
          </p>
        </div>
        <div>
          <Link to="/apply" className="">
            <button className="border-2 p-4 m-2 shadow bg-purple-300 text-white">
              BECOME A STUDENT!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
