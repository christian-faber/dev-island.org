import { useState } from "react";

export const Tabs = () => {
  const [toggleState, setToggleState] = useState(0);

  return (
    <div className="flex justify-center lg:m-12">
      <div className="flex flex-row w-full h-[500px] rounded-xl bg-seaside pt-2 pl-2 max-w-[1400px] shadow-2xl">
        <div className="flex flex-col w-1/3 lg:w-1/6 h-2/5 rounded-xl">
          <button
            className="align-center p-3 w-full h-1/3 rounded-l-2xl
             cursor-pointer bg-misty focus:bg-coolgray 
             focus:text-black text-coolgray font-semibold 
             lg:text-xl border-2 border-og"
            onClick={() => setToggleState(1)}
          >
            Mission
          </button>
          <button
            className="align-center p-3 w-full h-1/3 rounded-l-2xl 
            cursor-pointer bg-misty focus:bg-coolgray 
            focus:text-black text-coolgray font-semibold 
            lg:text-xl border-2 border-og"
            onClick={() => setToggleState(2)}
          >
            Who we serve
          </button>
          <button
            className="align-center p-3 w-full h-1/3 rounded-l-2xl 
            cursor-pointer bg-misty focus:bg-coolgray
             focus:text-black text-coolgray font-semibold 
             lg:text-xl border-2 border-og"
            onClick={() => setToggleState(3)}
          >
            Our community
          </button>
        </div>

        <div className="w-full h-full pb-2 pr-2 rounded-2xl">
          {toggleState === 0 && (
            <div className="bg-coolgray p-5 w-full h-full rounded-r-2xl">
              <h2 className="pb-2 text-2xl font-bold">Learn more</h2>
              <hr />
              <p className="w-full h-full text-xl font-semibold">
                Click the tabs to read about Dev-Island!
              </p>
            </div>
          )}
          {toggleState === 1 && (
            <div className="bg-coolgray p-5 w-full h-full rounded-r-2xl">
              <h2 className="pb-2 text-2xl font-bold">
                Connect, Empower, Grow
              </h2>
              <hr />
              <p className="w-full h-full text-xl font-semibold">
                Dev-Island's mission is to connect residents with technology and
                skills to earn a better living by attending a
                software-development bootcamp, to empower the community by
                supporting the tech industry and high-paying jobs in it, and to
                grow Dev-Island's capacity and roots.
              </p>
            </div>
          )}

          {toggleState === 2 && (
            <div className="bg-coolgray p-5 w-full h-full rounded-r-2xl">
              <h2 className="pb-2 text-2xl font-bold">
                Students, Organizations, Community
              </h2>
              <hr />
              <div>
                <p className="w-full h-full text-xl font-semibold">
                  Students learning about technology and building career skills.
                </p>
                <p className="w-full h-full text-xl font-semibold">
                  Businesses looking for stronger web presence and
                  functionality.
                </p>
                <p className="w-full h-full text-xl font-semibold">
                  Companies looking for trained and enthusiastic employees!
                </p>
              </div>
            </div>
          )}
          {toggleState === 3 && (
            <div className="bg-coolgray p-5 w-full h-full rounded-r-2xl">
              <h2 className="pb-2 text-2xl font-bold">Kauaʻi</h2>
              <hr />
              <p className="w-full text-xl font-semibold">
                Kauaʻi, the Garden Island, is home.
              </p>
              <p className="w-full mt-6 text-xl font-semibold">
                Online communities offer solutions, connection, and
                collaboration.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
