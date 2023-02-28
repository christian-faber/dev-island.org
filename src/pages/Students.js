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
          bg-gradient-to-b w-full bg-seaside px-[5%] py-5 shadow-xl mb-4"
        >
          <button className="border-2 rounded-xl p-4 shadow-xl m-2 bg-misty text-coolgray text-2xl hover:scale-125 transition transform">
            <Link to="/apply" className="">
              BECOME A STUDENT!
            </Link>
          </button>
        </div>
        <div className="flex flex-col w-11/12 max-w-[1220px] justify-center">
          <div className="my-4 bg-seaside border-misty border-2 rounded-xl p-4 shadow-xl text-coolgray">
            <>
              <div className="flex flex-row justify-between ">
                <h1 className="text-5xl p-5 lg:pl-24 lg:py-12 lg:text-[64px] ">
                  Overview
                </h1>
              </div>
              <ul className=" [&>*]:p-4 [&>*]:text-xl mt-4">
                <li className="font-semibold text-xl justify-center flex">
                  Scholarships are available to those who will need tuition
                  assistance.
                </li>
                <li className="font-semibold text-xl justify-center flex">
                  Dev-Island's bootcamp is a 10-month program. Students attend
                  two classes per week and each class is three hours long.
                </li>
                <li className="font-semibold text-xl justify-center flex">
                  Students will be challenged by along the way, but the skills
                  are worth it!
                </li>
              </ul>
            </>
          </div>
          <div className="my-4 bg-seaside border-misty border-2 rounded-xl p-4 shadow-xl text-coolgray">
            <>
              <div className="flex-row flex justify-between">
                <h1 className="text-5xl p-5 lg:pl-24 lg:py-12 lg:text-[64px] ">
                  Curriculum
                </h1>
              </div>
              <div className="m-4">
                <h2 className="font-semibold text-xl justify-center flex">
                  Students use HTML, CSS, JavaScript, and React.js to build web
                  applications!
                </h2>
              </div>
              <div className="m-4">
                <h2 className="font-semibold text-xl justify-center flex">
                  Students learn through multiple methods. Individual projects
                  test students' abilities. Code-along lessons show, in real
                  time, how new methods are applied. The capstone project puts
                  everything together!
                </h2>
              </div>
              <div className="m-4">
                <h2 className="font-semibold text-xl justify-center flex">
                  Dev-Island also focuses on developing professional skills.
                  Students run through mock interviews and workshops on
                  improving resumes, networking, and job-searching push students
                  to take action in their careers!
                </h2>
              </div>
            </>
          </div>
          <div className="my-4 bg-seaside border-misty border-2 rounded-xl p-4 shadow-xl text-coolgray">
            <>
              <div className="flex flex-row justify-between">
                <h1 className="text-5xl p-5 lg:pl-24 lg:py-12 lg:text-[64px] ">
                  Environment
                </h1>
              </div>
              <div className="m-4">
                <h2 className="font-semibold text-xl justify-center flex">
                  Dev-Island uses tools like Slack, GitHub, and Kumospace to
                  keep in touch and make remote connection possible!
                </h2>
              </div>
              <div className="m-4">
                <h2 className="font-semibold text-xl justify-center flex">
                  An environment of collaboration and accountability drives
                  student success. Students are encouraged to ask for help and
                  express challenges.
                </h2>
              </div>
              <div className="m-4">
                <h2 className="font-semibold text-xl justify-center flex">
                  Students are connected with mentors to
                </h2>
              </div>
            </>
          </div>
          <div className="my-4 bg-seaside border-misty border-2 rounded-xl p-4 shadow-xl text-coolgray">
            <>
              <div className="flex flex-row justify-between">
                <h1 className="text-5xl p-5 lg:pl-24 lg:py-12 lg:text-[64px] ">
                  Student Stories
                </h1>
              </div>
              <div className="mt-4">
                {/* <Cohort
                  students={personnel.students}
                  modalOpen={modalOpen}
                  setOpen={setOpen}
                  character={character}
                  setCharacter={setCharacter}
                /> */}
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
