import { useState } from "react";
import { Footer } from "../components/Footer";

export const Project = () => {
  const [consult, setConsult] = useState(false);
  return (
    <div>
      <div className="bg-seaside p-4">
        <div className="m-4 border-2 border-og rounded-xl bg-coolgray">
          <h1 className="text-3xl text-center font-semibold p-4">
            Request a bid
          </h1>
          <p className="p-4 text-xl font-semibold">
            Are you looking for a front-end web developer for your project?
            Trying to update your web presence? Fill out the information below
            and we will be in contact to figure out how we can best help!
          </p>
          <button
            onClick={() => setConsult(!consult)}
            className="bg-seaside text-coolgray border rounded-2xl p-4 text-xl shadow-xl m-8"
          >
            Schedule an appointment
          </button>
        </div>
      </div>
      <hr />

      {consult && (
        <p>
          This feature is being developed now. This is where the embed code for
          a calendly will go.
        </p>
      )}

      <div className="bg-og text-coolgray flex flex-col">
        <div className="border-seaside bg-misty border-2 rounded-xl m-4 shadow-xl">
          <h2 className="text-xl m-4 underline ">
            Work with local developers to level up your business
          </h2>
        </div>
        <h1 className="text-3xl m-4">Product List:</h1>
        <div className="m-4 border w-11/12">
          <div className="m-6">
            <h2>In-House</h2>
            <ul className="list-disc">
              <li>
                <h1>Web Dev</h1>
              </li>
              <li>
                <h2>React Apps</h2>
              </li>
            </ul>
          </div>
          <div className="m-6">
            <h2>Network Products</h2>
            <ul className="list-disc">
              <li>
                <h1>Product Imaging</h1>
              </li>
              <li>
                <h2>Photography</h2>
              </li>
              <li>
                <h1>Graphic Design</h1>
              </li>
              <li>
                <h2>Logos and visuals</h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
