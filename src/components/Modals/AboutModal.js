import { Link } from "react-router-dom";
import React from "react";

export const AboutModal = ({ setOpen }) => {
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
          <div className="bg-white p-5 rounded-lg flex justify-center ">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-1 right-1 text-black border"
            >
              X
            </button>
            <div className="flex flex-col w-1/2">
              <h1 className="border">Who are we</h1>
              <div className="flex flex-col">
                {/* section 1 */}
                <div className="border">
                  <h1>Background</h1>
                  <Link>
                    <button>Dive in!</button>
                  </Link>
                </div>
                {/* section 2 */}
                <div className="border">
                  <h1>Team</h1>
                  <Link>
                    <button>Dive in!</button>
                  </Link>
                </div>
                {/* section 3 */}
                <div className="border">
                  <h1>Cohort</h1>
                  <Link>
                    <button>Dive in!</button>
                  </Link>
                </div>
                {/* section 4 */}
                <div className="border">
                  <h1>Partners</h1>
                  <Link>
                    <button>Dive in!</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
