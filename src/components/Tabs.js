import { useState } from "react";

export const Tabs = () => {
  const [toggleState, setToggleState] = useState(0);

  return (
    <div className="flex flex-row w-full h-[500px] border border-black bg-blue-200">
      <div className="flex flex-col w-1/3 lg:w-1/6 h-1/2">
        <button
          className="align-center  p-4 w-full h-1/3 border-b-1 cursor-pointer bg-blue-300 focus:bg-white"
          onClick={() => setToggleState(1)}
        >
          Mission
        </button>
        <button
          className="align-center  p-4 w-full h-1/3 border-b-1 cursor-pointer bg-blue-300 focus:bg-white"
          onClick={() => setToggleState(2)}
        >
          Who we serve
        </button>
        <button
          className="align-center  p-4 w-full h-1/3 border-b-1 cursor-pointer bg-blue-300 focus:bg-white"
          onClick={() => setToggleState(3)}
        >
          Our community
        </button>
      </div>

      <div className="w-full h-full p-2">
        {toggleState === 0 && (
          <div className="bg-white p-5 w-full h-full">
            <h2 className="pb-2">Learn more</h2>
            <hr />
            <p className="w-full h-full">
              Click the tabs to read about Dev-Island!
            </p>
          </div>
        )}
        {toggleState === 1 && (
          <div className="bg-white p-5 w-full h-full">
            <h2 className="pb-2">Content 1</h2>
            <hr />
            <p className="w-full h-full">
              Level up your skills! Contribute to and learn from community!
            </p>
          </div>
        )}

        {toggleState === 2 && (
          <div className="bg-white p-5 w-full h-full">
            <h2 className="pb-2">Students, Organizations, Community</h2>
            <hr />
            <div>
              <p className="w-full h-full">
                Students learning about technology and building career skills.
              </p>
              <p className="w-full h-full">
                Businesses looking for stronger web presence and functionality.
              </p>
              <p className="w-full h-full">
                Companies looking for trained and enthusiastic employees!
              </p>
            </div>
          </div>
        )}
        {toggleState === 3 && (
          <div className="bg-white p-5 w-full h-full">
            <h2 className="pb-2">Kauaʻi</h2>
            <hr />
            <p className="w-full h-full">Kauaʻi, the Garden Island, is home.</p>
          </div>
        )}
      </div>
    </div>
  );
};
