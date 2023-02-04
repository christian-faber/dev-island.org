import { Cohort } from "../components/Cohort";
import { useState } from "react";
import { AboutModal } from "../components/modals/AboutModal";
import { Link } from "react-router-dom";
import { Alumni } from "../components/Alumni";
import personnel from "../data/personnel.json";

export const Students = () => {
  const [modalOpen, setOpen] = useState(false);
  const [character, setCharacter] = useState("");
  const [openOverview, setOverview] = useState(false);
  const [openCurriculum, setCurriculum] = useState(false);
  const [openEnvironment, setEnvironment] = useState(false);
  const [openStudent, setStudent] = useState(false);

  return (
    <div className="flex align-middle flex-col justify-center items-center">
      {modalOpen && character && (
        <AboutModal character={character} setOpen={setOpen} />
      )}
      <div
        className="flex align-center items-center justify-center
          bg-gradient-to-b w-full px-[5%] py-5 hover:scale-125 transition transform"
      >
        <Link to="/apply" className="">
          <button className="border-2 rounded-xl p-4 shadow-xl m-2 bg-seaside text-coolgray text-2xl">
            BECOME A STUDENT!
          </button>
        </Link>
      </div>
      <div className="flex flex-col w-5/6 justify-center">
        <div className="mt-4 border-seaside bg-misty border-2 rounded-xl p-4 shadow-xl text-coolgray">
          {!openOverview && (
            <div
              onClick={() => setOverview(true)}
              className="flex flex-row justify-between"
            >
              <h1 className="text-3xl">Overview</h1>
              <button className="text-3xl">+</button>
            </div>
          )}
          {openOverview && (
            <>
              <div
                onClick={() => setOverview(false)}
                className="flex flex-row justify-between "
              >
                <h1 className="text-3xl border-b-2 border-black">Overview</h1>
                <button className="text-3xl">-</button>
              </div>
              <ul className="list-disc [&>*]:ml-4 [&>*]:text-xl">
                <li>Scholarships available</li>
                <li>
                  Time: March - February, 3 hour class Tuesdays and Thursdays
                </li>
                <li>Difficulty: Worth it</li>
              </ul>
            </>
          )}
        </div>
        <div className="mt-4 border-seaside bg-misty border-2 rounded-xl p-4 shadow-xl text-coolgray">
          {!openCurriculum && (
            <div
              onClick={() => setCurriculum(true)}
              className="flex-row flex justify-between"
            >
              <h1 className="text-3xl">Curriculum</h1>
              <button className="text-3xl">+</button>
            </div>
          )}
          {openCurriculum && (
            <>
              <div
                onClick={() => setCurriculum(false)}
                className="flex-row flex justify-between"
              >
                <h1 className="text-3xl border-b-2 border-black">Curriculum</h1>
                <button className="text-3xl">-</button>
              </div>
              <div className="m-4">
                <h2 className="font-semibold text-xl justify-center flex">
                  Languages
                </h2>
                <ul className="list-disc [&>*]:ml-4 [&>*]:text-xl">
                  <li>React.js</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <div className="m-4">
                <h2 className="font-semibold text-xl justify-center flex">
                  Techical Skills
                </h2>
                <ul className="list-disc [&>*]:ml-4 [&>*]:text-xl">
                  <li>Individual Projects</li>
                  <li>Code-Along</li>
                  <li>Capstone</li>
                </ul>
              </div>
              <div className="m-4">
                <h2 className="font-semibold text-xl justify-center flex">
                  Professional Skills
                </h2>
                <ul className="list-disc [&>*]:ml-4 [&>*]:text-xl">
                  <li>Mock Interviews</li>
                  <li>Resume creation</li>
                  <li>Job-search Strategy</li>
                  <li>Networking Practice</li>
                  <li>Expectation Setting</li>
                  <li>Mentorship</li>
                </ul>
              </div>
            </>
          )}
        </div>
        <div className="mt-4 border-seaside bg-misty border-2 rounded-xl p-4 shadow-xl text-coolgray">
          {!openEnvironment && (
            <div
              onClick={() => setEnvironment(true)}
              className="flex flex-row justify-between"
            >
              <h1 className="text-3xl">Environment</h1>
              <button className="text-3xl">+</button>
            </div>
          )}
          {openEnvironment && (
            <>
              <div
                onClick={() => setEnvironment(false)}
                className="flex flex-row justify-between"
              >
                <h1 className="text-3xl border-b-2 border-black">
                  Environment
                </h1>
                <button className="text-3xl">-</button>
              </div>
              <div className="m-4">
                <h2 className="font-semibold text-xl justify-center flex">
                  Connection
                </h2>
                <ul className="list-disc [&>*]:ml-4 [&>*]:text-xl">
                  <li>Slack</li>
                  <li>GitHub</li>
                  <li>Virtual Office</li>
                </ul>
              </div>
              <div className="m-4">
                <h2 className="font-semibold text-xl justify-center flex">
                  Accountability
                </h2>
                <ul className="list-disc [&>*]:ml-4 [&>*]:text-xl">
                  <li>Collaboration</li>
                  <li>Commitment</li>
                </ul>
              </div>
              <div className="m-4">
                <h2 className="font-semibold text-xl justify-center flex">
                  Support
                </h2>
                <ul className="list-disc [&>*]:ml-4 [&>*]:text-xl">
                  <li>Help when you ask</li>
                  <li>Mentorship</li>
                  <li>Emotional support</li>
                </ul>
              </div>
            </>
          )}
        </div>
        <div className="mt-4 border-seaside bg-misty border-2 rounded-xl p-4 shadow-xl text-coolgray">
          {!openStudent && (
            <div
              onClick={() => setStudent(true)}
              className="flex flex-row justify-between"
            >
              <h1 className="text-3xl">Student Stories</h1>
              <button className="text-3xl">+</button>
            </div>
          )}
          {openStudent && (
            <>
              <div
                onClick={() => setStudent(false)}
                className="flex flex-row justify-between"
              >
                <h1 className="text-3xl border-b-2 border-black">
                  Student Stories
                </h1>
                <button className="text-3xl">-</button>
              </div>
              <div className="mt-4">
                <Cohort
                  students={personnel.students}
                  modalOpen={modalOpen}
                  setOpen={setOpen}
                  character={character}
                  setCharacter={setCharacter}
                />
                <Alumni
                  alumni={personnel.alumni}
                  modalOpen={modalOpen}
                  setOpen={setOpen}
                  character={character}
                  setCharacter={setCharacter}
                />
              </div>
            </>
          )}
        </div>
      </div>

      <div>
        <h1>Testimonial</h1>
        <p>
          This is where I will insert a quote from the students. This section
          could be included in another section that has the circles.
        </p>
      </div>
    </div>
  );
};
