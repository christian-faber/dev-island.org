import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export const AboutModal = ({ setOpen, character }) => {
  //useEffect any time character changes, team.find(character vs team member.name)
  //usestate for person
  return (
    <>
      {/* overlay */}
      <div
        onClick={() => setOpen(false)}
        className="fixed flex justify-center z-40 
      h-full w-full bg-seaside bg-opacity-50 left-0 top-0 right-0 bottom-0
      align-middle"
      >
        {/* modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative z-50 w-full h-full lg:max-w-[800px] drop-shadow-2xl"
        >
          {/* body */}
          <div className="relative bg-coolgray p-1 rounded-lg flex flex-col h-[85%] mt-[10%]">
            <div className="flex flex-row justify-end items-center h-[5%]">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-black border rounded-full text-2xl font-bold w-8"
              >
                X
              </button>
            </div>
            <div className="flex flex-col h-[90%]">
              <div className="h-1/3 flex items-center justify-between mx-[10%]">
                <div className="">
                  <h1 className="uppercase text-2xl font-bold">
                    {character.name}
                  </h1>
                  <h2 className="font-semibold">{character?.position}</h2>
                  <div className="border-seaside border-2 rounded-lg p-2 shadow-xl w-2/3">
                    <div className="justify-between flex-row flex">
                      <a href={character?.linkedin} className="text-2xl ">
                        <FaLinkedin />
                      </a>
                      <a href={character?.github} className="text-2xl ">
                        <FaGithub />
                      </a>
                      {character.otherlink !== "" && (
                        <a href={character?.otherlink} className="text-2xl ">
                          <CgWebsite />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <img
                  src={character.image}
                  alt="face"
                  className="rounded-full object-cover border-og border-2 drop-shadow-xl h-5/6"
                ></img>
              </div>
              <div className="flex flex-col align-top px-4 h-2/3">
                <h1 className="text-2xl m-4 font-semibold">Background</h1>
                <div className="overflow-auto h-2/3">
                  <p className="text-xl">{character.background}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
