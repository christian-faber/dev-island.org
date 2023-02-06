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
          className="relative z-50 mt-12 mb-4 max-w-full w-full lg:w-[800px] h-11/12 drop-shadow-2xl"
        >
          {/* body */}
          <div className="bg-coolgray pt-10 p-5 rounded-lg flex flex-col justify-between h-full">
            <div className="flex flex-row absolute top-1 left-1 items-center">
              <h1 className="uppercase text-2xl font-bold">{character.name}</h1>
            </div>
            <div className="flex flex-col lg:max-w-xs">
              <h2 className="font-semibold">{character?.position}</h2>
              <img
                src={character.image}
                alt="face"
                className="rounded-full w-full  h-full object-cover border-og border-2 drop-shadow-xl"
              ></img>
            </div>
            <div className="pl-4">
              <h1 className="text-2xl font-semibold">Background</h1>
              <div className="h-48 overflow-auto">
                <p className="text-xl">{character.background}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-1 right-1 text-black border rounded-full text-2xl font-bold w-8"
            >
              X
            </button>

            <div className="flex flex-col justify-start items-start ml-4 mt-2">
              <div className="border-seaside border-2 rounded-lg p-2 shadow-xl">
                <h1 className="font-semibold text-xl underline">Links</h1>
                <div className="space-x-4 flex-row flex">
                  <a href={character?.linkedin} className="text-2xl ">
                    <FaLinkedin />
                  </a>
                  <a href={character?.github} className="text-2xl ">
                    <FaGithub />
                  </a>
                  <a href={character?.otherlink} className="text-2xl ">
                    <CgWebsite />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
