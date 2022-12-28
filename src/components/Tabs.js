import { useState } from "react";

export const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  return (
    <div className="flex flex-row w-full h-full border border-black">
      <div className="flex flex-col h-full">
        <button
          className="align-center  p-4 w-full border-b-1 cursor-pointer bg-white"
          onClick={() => setToggleState(1)}
        >
          Tab 1
        </button>
        <button
          className="align-center  p-4 w-full  border-b-1 cursor-pointer bg-white"
          onClick={() => setToggleState(2)}
        >
          Tab 2
        </button>
        <button
          className="align-center  p-4 w-full  border-b-1 cursor-pointer bg-white"
          onClick={() => setToggleState(3)}
        >
          Tab 3
        </button>
      </div>

      <div>
        {toggleState === 1 && (
          <div className="bg-white p-5 w-full h-full">
            <h2 className="pb-2">Content 1</h2>
            <hr />
            <p className="w-full h-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              praesentium incidunt quia aspernatur quasi quidem facilis quo
              nihil vel voluptatum?
            </p>
          </div>
        )}

        {toggleState === 2 && (
          <div className="bg-white p-5 w-full h-full">
            <h2 className="pb-2">Content 2</h2>
            <hr />
            <p className="w-full h-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatum qui adipisci.
            </p>
          </div>
        )}
        {toggleState === 3 && (
          <div className="bg-white p-5 w-full h-full">
            <h2 className="pb-2">Content 3</h2>
            <hr />
            <p className="w-full h-full">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
