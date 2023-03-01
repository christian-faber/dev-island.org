// import { Cohort } from "../components/Cohort";
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
          <button className=" rounded-xl p-4 shadow-2xl m-2 bg-misty text-coolgray text-2xl hover:scale-125 transition transform">
            <Link to="/apply" className="">
              BECOME A STUDENT!
            </Link>
          </button>
        </div>
        <div className="flex flex-col w-11/12 max-w-[1440px] justify-center ">
          <div className="lg:flex lg:flex-row">
            <div className="my-4 lg:m-4 bg-seaside rounded-xl lg:p-12 p-4 shadow-xl text-coolgray lg:w-1/2">
              <>
                <div className="flex flex-row justify-between">
                  <h1 className="text-xl p-5 lg:py-8 text-[32px] lg:text-[48px] ">
                    Overview
                  </h1>
                </div>
                <h2 className="font-semibold text-xl justify-start flex p-4 lg:p-5">
                  Scholarships are available to those who will need tuition
                  assistance.
                </h2>
                <h2 className="font-semibold text-xl justify-start flex p-4 lg:p-5">
                  Dev-Island's bootcamp is a 10-month program. Students attend
                  two classes per week and each class is three hours long.
                </h2>
                <h2 className="font-semibold text-xl justify-start flex p-4 lg:p-5">
                  Students will be challenged by along the way, but the skills
                  are worth it!
                </h2>
              </>
            </div>
            <div className="my-4 lg:m-4 bg-seaside rounded-xl lg:p-12 p-4 shadow-xl text-coolgray lg:w-1/2">
              <>
                <div className="flex-row flex justify-between">
                  <h1 className="text-xl p-5 lg:py-8 text-[32px] lg:text-[48px] ">
                    Curriculum
                  </h1>
                </div>
                <h2 className="font-semibold text-xl justify-start flex p-4 lg:p-5">
                  Students use HTML, CSS, JavaScript, and React.js to build web
                  applications!
                </h2>
                <h2 className="font-semibold text-xl justify-start flex p-4 lg:p-5">
                  Students learn through multiple methods. Individual projects
                  test students' abilities. Code-along lessons show, in real
                  time, how new methods are applied. The capstone project puts
                  everything together!
                </h2>
                <h2 className="font-semibold text-xl justify-start flex p-4 lg:p-5">
                  Dev-Island also focuses on developing professional skills.
                  Students run through mock interviews and workshops on
                  improving resumes, networking, and job-searching push students
                  to take action in their careers!
                </h2>
              </>
            </div>
          </div>
          <div className="lg:flex lg:flex-row">
            <div className="my-4 lg:m-4 bg-seaside rounded-xl lg:p-12 p-4 shadow-xl text-coolgray lg:w-1/2">
              <>
                <div className="flex flex-row justify-between">
                  <h1 className="text-xl p-5 lg:py-8 text-[32px] lg:text-[48px] ">
                    Environment
                  </h1>
                </div>
                <h2 className="font-semibold text-xl justify-start p-4 lg:p-5 flex">
                  Dev-Island uses tools like Slack, GitHub, and Kumospace to
                  keep in touch and make remote connection possible!
                </h2>
                <h2 className="font-semibold text-xl justify-start p-4 lg:p-5 flex">
                  An environment of collaboration and accountability drives
                  student success. Students are encouraged to ask for help and
                  express challenges.
                </h2>
                <h2 className="font-semibold text-xl justify-start p-4 lg:p-5 flex">
                  Students are connected with mentors to expand upon the
                  bootcamp's lessons.
                </h2>
              </>
            </div>
            <div className="my-4 lg:m-4 bg-seaside rounded-xl lg:p-12 p-4 shadow-xl text-coolgray lg:w-1/2">
              <>
                <div className="flex flex-row justify-between">
                  <h1 className="text-xl p-5 lg:py-8 text-[32px] lg:text-[48px] ">
                    Student Stories
                  </h1>
                </div>
                <div className="mt-4 flex justify-center items-center">
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
      </div>
    </>
  );
};
