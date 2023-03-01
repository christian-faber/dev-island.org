import { useState } from "react";

export const Project = () => {
  const [consult, setConsult] = useState(false);
  return (
    <div>
      <div className="bg-seaside p-4">
        <div className="m-4 rounded-xl text-coolgray flex flex-col items-center">
          <h1 className="text-3xl text-center font-semibold p-4">
            Work with us
          </h1>
          {/*  */}
          <button
            onClick={() => setConsult(!consult)}
            className="bg-misty text-coolgray rounded-2xl p-4 text-xl shadow-xl m-2"
          >
            Schedule A Consultation
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-[1440px] m-8">
          <h1 className="text-3xl m-4 ml-12">Services</h1>
          <p className="p-8 text-xl font-semibold">
            Are you looking for a front-end web developer for your project?
            Trying to update your web presence?
          </p>
          <p className="p-8 text-xl font-semibold">
            Schedule a consultation and a Dev-Island representative will be in
            contact!
          </p>
          <p className="p-8 text-xl font-semibold">
            Review the services below to see what we offer.
          </p>
        </div>
        <div className="m-6 flex flex-col lg:flex-row w-full max-w-[1220px]">
          <div className="px-12 py-8 m-6 lg:w-1/2 rounded-xl shadow-2xl bg-seaside text-coolgray">
            <h2 className="text-2xl p-4">In-House</h2>
            <ul className="text-xl [&>*]:p-2">
              <li>
                <h1>Website Consulting</h1>
              </li>
              <li>
                <h2>React Apps</h2>
              </li>
            </ul>
          </div>
          <div className="px-12 py-8 m-6 lg:w-1/2 rounded-xl shadow-2xl bg-seaside text-coolgray">
            <h2 className="text-2xl p-4">Network Products</h2>
            <ul className="text-xl [&>*]:p-2">
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
    </div>
  );
};
