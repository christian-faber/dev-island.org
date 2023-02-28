import { Cohort } from "../components/Cohort";
import { useState } from "react";
import { AboutModal } from "../components/modals/AboutModal";
import { Link } from "react-router-dom";
import { Alumni } from "../components/Alumni";
import personnel from "../data/personnel.json";

export const Students = () => {
  const [modalOpen, setOpen] = useState(false);
  const [character, setCharacter] = useState("");

  return (
    <>
      <div className="flex align-middle flex-col justify-center items-center">
        {modalOpen && character && (
          <AboutModal character={character} setOpen={setOpen} />
        )}
        <div
          className="flex align-center items-center justify-center
          bg-gradient-to-b w-full bg-seaside px-[5%] py-5 "
        >
          <button className="border-2 rounded-xl p-4 shadow-xl m-2 bg-misty text-coolgray text-2xl hover:scale-125 transition transform">
            <Link to="/apply" className="">
              BECOME A STUDENT!
            </Link>
          </button>
        </div>
        <div className="flex flex-col w-5/6 justify-center">
          <div className="mt-4 bg-seaside border-misty border-2 rounded-xl p-4 shadow-xl text-coolgray">
            <>
              <div className="flex flex-row justify-between ">
                <h1 className="text-3xl lg:pl-24 lg:py-12 lg:text-[64px] border-b-2 border-coolgray">
                  Overview
                </h1>
              </div>
              <ul className="list-disc [&>*]:ml-4 [&>*]:text-xl mt-4">
                <li>Scholarships available</li>
                <li>
                  Time: March - February, 3 hour class Tuesdays and Thursdays
                </li>
                <li>Difficulty: Worth it</li>
              </ul>
            </>
          </div>
          <div className="mt-4 bg-seaside border-misty border-2 rounded-xl p-4 shadow-xl text-coolgray">
            <>
              <div className="flex-row flex justify-between">
                <h1 className="text-3xl lg:pl-24 lg:py-12 lg:text-[64px] border-b-2 border-coolgray">
                  Curriculum
                </h1>
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
                  Techical Practice
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
          </div>
          <div className="mt-4 bg-seaside border-misty border-2 rounded-xl p-4 shadow-xl text-coolgray">
            <>
              <div className="flex flex-row justify-between">
                <h1 className="text-3xl lg:pl-24 lg:py-12 lg:text-[64px] border-b-2 border-coolgray">
                  Environment
                </h1>
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
          </div>
          <div className="mt-4 bg-seaside border-misty border-2 rounded-xl p-4 shadow-xl text-coolgray">
            <>
              <div className="flex flex-row justify-between">
                <h1 className="text-3xl lg:pl-24 lg:py-12 lg:text-[64px] border-b-2 border-coolgray">
                  Student Stories
                </h1>
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
          </div>
        </div>
      </div>
    </>
  );
};
