import { useState } from "react";

export const AboutModal = ({ setOpen, character }) => {
  //useEffect any time character changes, team.find(character vs team member.name)
  //usestate for person
  return (
    <>
      {/* overlay */}
      <div
        className="fixed flex justify-center z-40 
      h-full w-full bg-slate-300 bg-opacity-50 left-0 top-0 right-0 bottom-0
      align-middle"
      >
        {/* modal */}
        <div className="relative z-50 m-auto max-w-xl w-full max-h-full">
          {/* body */}
          <div className="bg-white p-5 rounded-lg flex justify-center space-x-10 ">
            <div className="border w-1/3">
              <h1 className="uppercase text-3xl ">{character.name}</h1>
              <div className="w-full">
                <img
                  src={character.image}
                  alt="face"
                  className="rounded-full  h-full object-cover"
                ></img>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-1 right-1 text-black border"
            >
              X
            </button>

            <div className="flex flex-col w-1/2">
              <div className="flex flex-col">
                {/* section 1 */}
                <div className="border">
                  <h1 className="text-lg">Background</h1>
                  <p className="text-md">{character.background}</p>
                </div>
                {/* section 2 */}
                <div className="border">
                  <h1>Links</h1>
                  <div className="space-x-3">
                    <a href="https://github.com">Git</a>
                    <a href="https://linkedin.com">Lnkdn</a>
                    <a href="https://communitypursuit.com">compu</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
